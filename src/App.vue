<template>
  <the-header></the-header>
  <the-hero></the-hero>
</template>

<script setup>
import { useUIStore } from "./stores/useUIStore";
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import { onMounted } from "vue";

const UIStore = useUIStore();

onMounted(() => {
  UIStore.updateColors();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100dvh;
}
</style>
