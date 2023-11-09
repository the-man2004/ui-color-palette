<template>
  <div class="w-full py-4 md:py-8">
    <nav class="container max-w-6xl px-2 mx-auto flex flex-row md:px-8">
      <div>
        <a href="#" class="flex flex-row py-1 px-1 md:py-2 md:px-4">
          <img
            src="../assets/img/palette-logo.png"
            alt=""
            class="my-auto w-6 h-6 md:w-10 md:h-10"
          />
          <h2 id="name" class="ml-2 my-auto text-xl font-bold md:text-2xl">
            Palette
          </h2>
        </a>
      </div>
      <div class="ml-auto">
        <ul class="flex flex-row gap-4 h-full md:gap-8">
          <li class="my-auto">
            <a
              href="#"
              class="py-1 px-2 font-semibold transition-opacity hover:opacity-70 md:py-2 md:px-4"
              >Info</a
            >
          </li>
          <li class="my-auto">
            <a
              href="#"
              class="py-1 px-2 font-semibold transition-opacity hover:opacity-70 md:py-2 md:px-4"
              >About</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useUIStore } from "../stores/useUIStore";

const UIStore = useUIStore();
</script>

<style scoped>
#name {
  /* Create the gradient. */
  /* background-image: linear-gradient(45deg, #f3ec78, #af4261); */
  background-image: linear-gradient(45deg, blue, green, red, yellow);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>
