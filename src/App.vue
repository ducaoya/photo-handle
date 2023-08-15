<script setup>
import PhotoView from "@/components/PhotoView/index.vue";
import FileHandle from "@/components/FileHandle/index.vue";
import PhotoBorder from "@/components/PhotoBorder/index.vue";
import { ref } from "vue";

const fileUrl = ref("");
const options = ref({});

function changeFile(url) {
  console.log("<=== file ===>", url);
  fileUrl.value = url;
}

function changeOptions(value) {
  console.log("<=== options ===>", value);
  options.value = value;
}
</script>

<template>
  <div class="main">
    <div class="left">
      <PhotoView :options="options" :fileUrl="fileUrl" />
    </div>
    <div class="right">
      <div class="top">
        <FileHandle
          @changeFile="changeFile"
          :options="options"
          :fileUrl="fileUrl"
        />
      </div>
      <div class="bottom">
        <PhotoBorder @changeOptions="changeOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
}
.left {
  flex: 1;
  overflow: auto;
}
.right {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}
.bottom {
  flex: 1;
}
</style>
