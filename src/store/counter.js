import { defineStore } from "pinia";

export const useStore = defineStore("counter", () => {
  const languages = [
    { code: "EN", language: "english" },
    { code: "UZ", language: "uzbek" },
  ];
  return { languages };
});
