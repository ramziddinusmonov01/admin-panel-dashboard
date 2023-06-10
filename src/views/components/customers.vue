<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">
    <!-- breadcump /-->
    <breadcump :items="breadcrumbs"></breadcump>

    <!-- title /-->
    <div class="mt-5 w-full">
      <div class="flex justify-between">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          customers
        </h1>
        <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="submitAdd" :isImage="true"
          title="Yangi element qo'shish" subtitle="" btnTextSubmit="Saqlash">
          <template v-slot:body>
            <div class="space-y-5 pb-5">
              <div class="space-y-3">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">rasm
                  yuklang</label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help" id="file_input" type="file" />
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <div class="space-y-3">
                <p>Holati</p>
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" checked />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600">
                  </div>
                  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none">Faol</span>
                </label>
              </div>
            </div>
          </template>
          <template v-slot:button>
            <span class="bg-green-500 pb-1 px-4 rounded-md text-4xl text-green-50">+</span>
          </template>
        </Modal>
      </div>
    </div>

    <!-- settingsn tahrirlash/-->
    <div class="overflow-x-auto dark:bg-gray-800">
      <div class="w-full">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">komponentalar</th>
                <th class="py-3 px-6 text-center">Holati</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <!--  rasm tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">rasm footer</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <button class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">
                    Faol
                  </button>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">rasm</span>
                            <span class="font-medium text-lg flex-1">Holati</span>
                          </div>
                          <div class="flex flex-col items-start gap-6">
                            <img src="../../assets/img/star.png" alt="img">
                            <span class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">Faol</span>
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="submitEdit"
                      :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">rasm yuklang</label>
                            <input
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                              SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
                          </div>
                          <div class="space-y-3">
                            <p>Holati</p>
                            <label class="relative inline-flex items-center mr-5 cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer" checked />
                              <div
                                class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600">
                              </div>
                              <span
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none">Faol</span>
                            </label>
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
                    <!-- delete -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="submitDelete"
                      :isImage="true" title="O'chirish" subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                      btnTextSubmit="O'chirish" btnColorSubmit="bg-red-500">
                      <template v-slot:button>
                        <div class="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
      <button type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Saqlash
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store/counter";
import Modal from "@/components/modal.vue";
import Breadcump from "@/components/Breadcump.vue";
import {
  activeModal,
  changeActive,
  closeModal,
  nextModal,
  submitAdd,
  submitEdit,
  submitDelete,
} from "@/helper/active-modal";
const store = useStore();
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
</script>

<style scoped></style>
