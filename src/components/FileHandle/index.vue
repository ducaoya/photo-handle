<template>
  <div class="filehandle">
    <button class="upload" @click="upload">上传图片</button>
    <button @click="download" :disabled="loading">
      {{ loading ? "下载中..." : "下载图片" }}
    </button>
  </div>
</template>

<script setup>
import { render } from "@/tools/index.js";
import { ref } from "vue";

const props = defineProps(["options", "fileUrl"]);

const emit = defineEmits(["changeFile"]);

const fileName = ref("");
const loading = ref(false);

function upload() {
  const input = document.createElement("input");

  input.type = "file";
  input.accept = "image/*";

  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      fileName.value = file.name;
      emit("changeFile", url);
    }
  };

  input.click();
}

async function download() {
  try {
    const { options, fileUrl } = props;
    if (options && fileUrl) {
      loading.value = true;
      const canvas = await render(fileUrl, options);
      console.log("<=== canvas ===>",typeof canvas);
      if (canvas) {
        canvas.toBlob((blob)=>{
          const url = URL.createObjectURL(blob)
          console.log("<=== url ===>",url)

          const a = document.createElement("a");
          a.download = fileName.value || "img.png";
          a.href = url;

          loading.value = false;
          a.click();
        });
      }else{
        loading.value = false;
      }
    }
  } catch (error) {
    console.log("<=== error ===>", error);
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.filehandle {
  padding: 20px;
  button {
    margin-right: 20px;
  }
}
</style>
