<template>
<div class="main-box">
  <MainContainer />
  <MainRenderer />
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainContainer from "./components/MainContainer.vue";
import MainRenderer from "./components/MainRenderer.vue";

export default defineComponent({
  name: "App",
  components: {
    MainContainer,
    MainRenderer,
  },
});
</script>

<style lang="scss" scoped>
.main-box {
  width: 100%;
  height: 100vh;
  color: #f2f2f2;
  background-color: #2f2f2f;
}
</style>
