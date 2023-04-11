<template>
  <div class="app">
    <div class="title">
      jCloud Car Viewer
    </div>
    <div class="sub-description">
      간단한 3D 자동차 모델 뷰어
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style lang="scss" scoped>
.app {
  .title {
    color: blue;
  }

  .sub-description {
    color: skyblue;
  }
}
</style>
