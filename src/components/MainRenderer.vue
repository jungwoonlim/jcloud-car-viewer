<template>
  <div class="renderer">
    <div class="sample-box"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainRenderer",
});
</script>

<style lang="scss" scoped>
.renderer {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  .sample-box {
    margin: 0 auto;
    width: 50rem;
    height: 30rem;
    background-color: #3f3f3f;
  }
}
</style>
