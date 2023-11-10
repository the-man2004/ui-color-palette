import { defineStore } from "pinia";

export const useUIStore = defineStore("UIStore", {
  state: () => {
    return {
      background: "#CAF0F8", // Pale blue
      text: "color: rgb(23 37 84)", // Blue 950 (Dark blue)
      primary: "#023E8A", // Darkish blue
      secondary: "#0077B6", // Blue
      accent: "#90E0EF", // Light blue
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
      const textColor = document.querySelectorAll(".text-color");
      const primaryColor = document.querySelectorAll(".primary-color");

      // Changing container color and bg color
      container.style.backgroundColor = this.background;
      container.style.color = this.text;

      // Changing color
      textColor.forEach((el) => {
        el.style.backgroundColor = this.text;
      });
      primaryColor.forEach((el) => {
        el.style.backgroundColor = this.primary;
        el.style.color = this.background;
      });
    },
  },
});
