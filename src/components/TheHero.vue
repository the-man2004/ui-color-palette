<template>
  <div class="px-12">
    <div
      class="mx-auto mt-8 max-w-6xl flex flex-col-reverse gap-4 sm:gap-6 md:mt-24 md:grid md:grid-cols-2 md:gap-8"
    >
      <div class="mb-24">
        <h1 class="mb-2 text-3xl font-bold sm:text-5xl md:mb-4 lg:text-6xl">
          Visualize Your Color Palette & Fonts On a Real Website
        </h1>
        <h2 class="mb-4 sm:w-2/3 md:text-lg md:mb-8">
          Choosing a color scheme for your website? Use the toolbar to play with
          your colors.
        </h2>
        <a
          href="#"
          class="primary-color py-2 px-6 font-semibold bg-red-400 rounded-full hover:shadow-2xl"
          >Try It Out</a
        >
      </div>
      <div
        class="p-2 mx-auto w-full max-w-md relative aspect-square md:mx-0 md:ml-auto md:max-w-lg"
      >
        <div class="logo-visual h-full w-full grid grid-rows-10 rounded-full">
          <!-- Line 1 -->
          <div class="line bg-black text-color w-full h-full"></div>
          <!-- Line 2 -->
          <div class="line w-full h-full grid grid-cols-7">
            <div class="col-span-1 bg-black text-color"></div>
            <div class="col-span-5"></div>
            <div class="col-span-1 bg-black text-color"></div>
          </div>
          <!-- Line 3 -->
          <div class="line w-full h-full grid grid-cols-7">
            <div class="col-span-1 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-3 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-1 bg-black text-color"></div>
          </div>
          <!-- Line 4 -->
          <div class="line w-full h-full grid grid-cols-7">
            <div class="col-span-1 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-3 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-1 bg-black text-color"></div>
          </div>
          <!-- Line 5 -->
          <div class="line w-full h-full grid grid-cols-7">
            <div class="col-span-1 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-3 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-1 bg-black text-color"></div>
          </div>
          <!-- Line 6 -->
          <div class="line w-full h-full grid grid-cols-7">
            <div class="col-span-1 bg-black text-color"></div>
            <div class="col-span-5"></div>
            <div class="col-span-1 bg-black text-color"></div>
          </div>
          <!-- Line 7 -->
          <div class="line w-full h-full grid grid-cols-7">
            <div class="col-span-1 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-5 bg-black text-color"></div>
          </div>
          <!-- Line 8 -->
          <div class="line w-full h-full grid grid-cols-7">
            <div class="col-span-1 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-5 bg-black text-color"></div>
          </div>
          <!-- Line 9 -->
          <div class="w-full h-full grid grid-cols-7">
            <div class="col-span-1 bg-black text-color"></div>
            <div class="col-span-1"></div>
            <div class="col-span-5 bg-black text-color"></div>
          </div>
          <!-- Line 10 -->
          <div class="line bg-black text-color w-full h-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUIStore } from "../stores/useUIStore";

const UIStore = useUIStore();
</script>

<style scoped>
.logo-visual {
  gap: 1%;
}

.line:first-child {
  border-start-start-radius: 50px;
  border-start-end-radius: 50px;
}

.line:last-child {
  border-end-end-radius: 50px;
  border-end-start-radius: 50px;
}
</style>
