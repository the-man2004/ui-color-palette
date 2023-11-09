import { defineStore } from "pinia";

export const useUIStore = defineStore("UIStore", {
  state: () => {
    return {
      title: "Hello World!",
      background: "rgb(231 229 228)", // Stone 200
      text: "rgb(15 23 42)", // Slate 900
      primary: "rgb(220 38 38)", // Red 600
      secondary: "rgb(251 191 36)", // Amber 400
      accent: "rgb(132 204 22)", // Lime 500
      font: "",
    };
  },
  getters: {
    backgroundColor: (state) => state.background,
    textColor: (state) => state.text,
    primaryColor: (state) => state.primary,
  },
  actions: {
    updateColors() {
      const container = document.querySelector("#app");
      console.log(container);

      container.style.backgroundColor = this.background;
      container.style.color = this.text;
    },
  },
});
