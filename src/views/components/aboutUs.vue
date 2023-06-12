<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">
    <!-- breadcump /-->
    <breadcump :items="breadcrumbs"></breadcump>

    <!-- settingsn tahrirlash/-->
    <div class="overflow-x-auto dark:bg-gray-800">
      <div class="w-full">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">komponentalar</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <!-- amientities  tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="a in amenities?.data" :key="a.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Joylashuvni tahrirlash</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">title uz</span>
                            <span class="font-medium text-lg flex-1">title ru</span>
                            <span class="font-medium text-lg flex-1">title en</span>
                          </div>
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-normal text-base flex-1">{{ a.title_uz }}</span>
                            <span class="font-normal text-base flex-1">{{ a.title_ru }}</span>
                            <span class="font-normal text-base flex-1">{{ a.title_en }}</span>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                          <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- edit -->
                    <Modal :activeModal="activeModal" @submit="closeModal" @open="changeActive" @close="closeModal"
                      :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Yangi Joylashuvni kiriting uz</p>
                            <input type="text" placeholder="" :value="title_uz" @input="title_uz = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Yangi Joylashuvni kiriting ru</p>
                            <input type="text" placeholder="" :value="title_ru" @input="title_ru = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Yangi Joylashuvni kiriting en</p>
                            <input type="text" placeholder="" :value="title_en" @input="title_en = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div class="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Saqlash/-->
    <div class="flex justify-end mb-4">
      <button type="button" @click="sendEdit()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        serverga yuborish
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/modal.vue";
import Breadcump from "@/components/Breadcump.vue";
import {
  activeModal,
  changeActive,
  closeModal,
  nextModal,
  submitAdd,
  submitEditAmienities,
  submitDelete,
  submitEditHeader,
} from "@/helper/active-modal";
const breadcrumbs = [
  {
    label: "Sahifalarni tahrirlash",
    url: "/",
  },
  {
    label: "Bosh sahifa",
    url: "header",
  },
];
let adminUrl = "http://fazl.karimjonov.uz/api/admin"
let amenities = ref([])
const token = localStorage.getItem('token')

async function getData() {
  fetch(adminUrl + "/amenities", {
    headers: {
      "token": token
    }
  }).then(res => res.json()).then(data => {
    amenities.value = data
  })
}

getData()
const title_uz = ref('')
const title_ru = ref('')
const title_en = ref('')
const desc_uz = ref('')
const desc_ru = ref('')
const desc_en = ref('')
const amientitiesImg = ref('')
async function sendEdit() {
  let formdata = new FormData()
  formdata.append('title_uz', title_uz.value);
  formdata.append('title_ru', title_ru.value);
  formdata.append('title_en', title_en.value);
  formdata.append('description_uz', desc_uz.value);
  formdata.append('description_ru', desc_ru.value);
  formdata.append('description_en', desc_en.value);
  formdata.append('image', amientitiesImg.value);
  console.log(amientitiesImg.value);
  await submitEditAmienities(formdata)
  await getData()
}
</script>

<style scoped></style>
