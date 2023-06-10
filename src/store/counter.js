import { defineStore } from "pinia";
import { ref } from "vue";

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
  const current = ref(categories[0]["code"]);
  const isOpen = ref(false);
  async function toggle() {
    isOpen.value = !isOpen.value;
  }
  async function change(event) {
    toggle();
    current.value = event.target.textContent;
  }
  ///////////////////////////get api//////////////////////////////////////////
  const baseUrl = "http://fazl.karimjonov.uz/api/admin";

  const setting = ref([]);
  async function getSetting() {
    const res = await fetch(baseUrl + "/settings", {
      Authorization: "Bearer" + localStorage.getItem("token"),
    });
    const data = await res.json();
    setting.value = data;
  }

  // const header = ref([]);
  // async function getHeader() {
  //   const res = await fetch(baseUrl + "/header/content");
  //   const data = await res.json();
  //   header.value = data;
  // }

  // const amenities = ref([]);
  // async function getAmenties() {
  //   const res = await fetch(baseUrl + "/amenities");
  //   const data = await res.json();
  //   amenities.value = data;
  // }

  // const experience = ref([]);
  // async function getExperience() {
  //   const res = await fetch(baseUrl + "/experience");
  //   const data = await res.json();
  //   experience.value = data;
  // }

  // const about = ref([]);
  // async function getAbout() {
  //   const res = await fetch(baseUrl + "/about");
  //   const data = await res.json();
  //   about.value = data;
  // }
  // const category = ref([]);
  // async function getCategory() {
  //   const res = await fetch(baseUrl + "/categorys");
  //   const data = await res.json();
  //   category.value = data;
  // }

  // const mebel = ref([]);
  // async function getMebel() {
  //   const res = await fetch(baseUrl + "/mebel");
  //   const data = await res.json();
  //   mebel.value = data;
  // }

  // const pricing = ref([]);
  // async function getPricing() {
  //   const res = await fetch(baseUrl + "/pricing");
  //   const data = await res.json();
  //   pricing.value = data;
  // }

  // const whyus = ref([]);
  // async function getWhyus() {
  //   const res = await fetch(baseUrl + "/whyus");
  //   const data = await res.json();
  //   whyus.value = data;
  // }

  // const gallery = ref([]);
  // async function getGallery() {
  //   const res = await fetch(baseUrl + "/gallery");
  //   const data = await res.json();
  //   gallery.value = data;
  // }

  // const directory = ref([]);
  // async function getDirectory() {
  //   const res = await fetch(baseUrl + "directory");
  //   const data = await res.json();
  //   directory.value = data;
  // }

  // const customer = ref([]);
  // async function getCustomer() {
  //   const res = await fetch(baseUrl + "/customer");
  //   const data = await res.json();
  //   customer.value = data;
  // }

  // const comment = ref([]);
  // async function getComment() {
  //   const res = await fetch(baseUrl + "/comment");
  //   const data = await res.json();
  //   comment.value = data;
  // }

  // getComment()
  // getCustomer()
  // getDirectory()
  // getGallery()
  // getWhyus()
  // getCategory()
  // getMebel()
  // getAbout()
  getSetting();
  // getHeader()
  // getAmenties()
  // getExperience()
  // getPricing()
  return { setting ,categories,current,isOpen,change,languages,isOpen,toggle };
});
