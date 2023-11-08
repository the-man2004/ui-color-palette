<template>
  <h1>{{ UIStore.title }}</h1>
</template>

<script setup>
import { useUIStore } from "./stores/useUIStore";

const UIStore = useUIStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
