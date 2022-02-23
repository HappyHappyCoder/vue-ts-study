<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
const a = () => {
  return "OK";
};
</script>

<template>
  <div>
    <hello-world :msg="a()" />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
body{
  min-height: 100vh;
  height: 100%;
  width: 100%;
}
</style>
