<template>
  <the-header></the-header>
  <h1>{{ UIStore.title }}</h1>
</template>

<script setup>
import { useUIStore } from "./stores/useUIStore";
import TheHeader from "./components/TheHeader.vue";

const UIStore = useUIStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
