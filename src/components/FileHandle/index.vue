<template>
  <div class="filehandle">
    <button class="upload" @click="upload">上传图片</button>
    <button>下载图片</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["changeFile"]);

function upload() {
  const input = document.createElement("input");

  input.type = "file";
  input.accept = "image/*";

  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      emit("changeFile", url);
    }
  };

  input.click();
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
