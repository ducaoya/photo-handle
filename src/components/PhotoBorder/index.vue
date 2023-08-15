<template>
  <div class="border">
    <div class="title">边框</div>
    <div class="item" v-for="item in config.border.list" key="{{ item.value }}">
      <span class="label">{{ item.label }}: </span>
      <input class="range" type="range" v-model="border[item.value]" />
      <input
        class="number"
        type="number"
        max="100"
        min="0"
        v-model="border[item.value]"
      />
    </div>
  </div>
</template>

<script setup>
import { watch, reactive, onMounted } from "vue";
import { config, getInitBorder } from "./config";

const emit = defineEmits(["changeOptions"]);

const border = reactive(getInitBorder());

watch(border, () => {
  emit("changeOptions", { ...border });
});

onMounted(() => {
  emit("changeOptions", { ...border });
});
</script>

<style lang="scss" scoped>
.border {
  overflow: auto;
  padding: 20px;
}
.title {
  font-size: 20px;
  background-image: var(--bgc);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.item {
  display: flex;
  align-items: center;
  padding: 10px 0;

  .label {
    margin-right: 10px;
    background-image: var(--bgc);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .range {
    margin-right: 10px;
  }

  .number {
    width: 40px;
  }
}

::-webkit-slider-container {
  /*可以修改容器的若干样式*/
  background: var(--bgc);
  height: 5px;
  border-radius: 99px;
}
</style>
