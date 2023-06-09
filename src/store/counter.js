import { defineStore } from "pinia";
import { ref } from "vue"

export const useStore = defineStore("counter", () => {
  const languages = [
    { code: "EN", language: "english" },
    { code: "UZ", language: "uzbek" },
  ];
  const categories = [
    { code: "Barchasi", language: "english" },
    { code: "Mebel", language: "uzbek" },
    { code: "Office uchun", language: "uzbek" },
    { code: "Oshxona uchun", language: "uzbek" },
    { code: "Yotoqxona uchun", language: "uzbek" },
  ];
  const current = ref(categories[0]['code'])
  const isOpen = ref(false);
  async function toggle() {
    isOpen.value = !isOpen.value
  }
  async function change(event) {
    toggle()
    current.value = event.target.textContent
  }
  ///////////////////////////get api//////////////////////////////////////////

});
