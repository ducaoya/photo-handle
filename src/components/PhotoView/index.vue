<template>
  <div class="preview">
    <!-- <img class="img" :src="props.imgUrl || ''" alt="" /> -->
    <canvas class="img" ref="cvsRef"></canvas>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { render } from "@/tools/index.js";

const props = defineProps(["options", "fileUrl"]);
const cvsRef = ref();

watch(props, async (value) => {
  console.log("<=== props ===>", value);
  const { options, fileUrl } = value;
  if (cvsRef) {
    const canvas = await render(fileUrl, options);
    if (canvas) {
      console.log("<=== canvas ===>", canvas);
      const { width, height } = canvas;
      cvsRef.value.width = width;
      cvsRef.value.height = height;

      cvsRef.value.getContext("2d").drawImage(canvas, 0, 0);
    }
  }
});
</script>

<style lang="scss" scoped>
.preview {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;

  .img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
