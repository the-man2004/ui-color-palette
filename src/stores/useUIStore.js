import { defineStore } from "pinia";

export const useUIStore = defineStore("UIStore", {
  state: () => {
    return {
      title: "Hello World!",
      background: "",
      text: "",
      primary: "",
      secondary: "",
      accent: "",
      font: "",
    };
  },
  getters: {},
  actions: {},
});
