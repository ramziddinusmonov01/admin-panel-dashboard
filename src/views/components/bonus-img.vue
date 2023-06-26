<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">
    <!-- BOSH SAHIFA RASMINI TAHRIRLASH -->
    <div class="mt-5 w-full">
      <div class="flex justify-between">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Bonuslar sahifasi rasmlari
        </h1>
        <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="sendAdd" :isImage="true"
          title="Yangi element qo'shish" subtitle="" btnTextSubmit="Saqlash">
          <template v-slot:body>
            <div class="space-y-5 pb-5">

              <div class="space-y-3">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                  file</label>
                <input @change="editImg($event)"
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input" type="file">
              </div>

              <div class="space-y-3">
                <p>Holati</p>
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
                  <input @click="add_status = !add_status" type="checkbox" class="sr-only peer" :checked="add_status"
                    :value="add_status" />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
                    :class="{
                      'peer-checked:bg-indigo-600 peer-checked:after:border-white peer-checked:after:translate-x-full':
                        edit_status,
                    }"></div>

                  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none">
                    {{ edit_status ? "Faol" : "Nofaol" }}
                  </span>
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
    <div class="flex items-center justify-center w-full mt-5">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Id</th>
            <th class="py-3 px-6 text-left">Rasm</th>
            <th class="py-3 px-6 text-left">Holati</th>
            <th class="py-3 px-6 text-center">Actions</th>
          </tr>
          <!-- HEADER FISRT IMAGE -->
          <tr v-for="(img, index) in bonusImg?.data" :key="index.id">
            <td class="p-2">
              {{ index + 1 }}
            </td>
            <td class="p-2">
              <img class="w-48" :src="img.image" alt="image" />
            </td>
            <td class="py-3 px-6 text-center">
              <div class="flex-1">
                <span v-if="img.status === 1"
                  class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">Faol</span>
                <span v-else class="bg-red-200 text-red-700 py-1 px-4 rounded-full text-xs">Nofaol</span>
              </div>
            </td>
            <td class="py-3 px-6 text-center">
              <div class="flex items-center justify-center">

                <!-- SEE -->
                <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                  :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                  <template v-slot:body>
                    <div class="flex justify-start gap-12">
                      <div class="flex flex-col items-start gap-6">
                        <span class="font-medium text-lg flex-1">
                          <img :src="img.image" alt="image">
                        </span>
                      </div>
                    </div>
                  </template>
                  <template v-slot:button>
                    <div class="w-8 h-8 flex items-center justify-center border-2 border-blue-500 rounded  mr-2 transform hover:text-blue-500 hover:scale-110">
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

                <!-- EDIT -->
                <Modal :activeModal="activeModal" @submit="sendEdit(img)" @open="changeActive" @close="closeModal"
                  :isImage="true" title="Tahrirlash" subtitle="Bosh sahifa rasmini tahrirlash" btnTextSubmit="Saqlash">
                  <template v-slot:body>
                    <div class="space-y-5 pb-5">
                      <div class="space-y-3">
                        <p>Bosh sahifa rasmini tahrirsh</p>
                        <div class="flex items-center justify-center w-full">

                          <input @change="editImg($event)"
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="file_input" type="file">
                        </div>
                      </div>
                      <div class="space-y-3">
                        <p>Holati</p>
                        <label class="relative inline-flex items-center mr-5 cursor-pointer">
                          <input @click="edit_status = !edit_status" type="checkbox" class="sr-only peer"
                            :checked="edit_status" :value="edit_status" />
                          <div
                            class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
                            :class="{
                              'peer-checked:bg-indigo-600 peer-checked:after:border-white peer-checked:after:translate-x-full':
                                edit_status,
                            }"></div>

                          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none">
                            {{ edit_status ? "Faol" : "Nofaol" }}
                          </span>
                        </label>
                      </div>

                    </div>
                  </template>

                  <template v-slot:button>
                    <div class="w-8 h-8 flex items-center justify-center border-2 border-green-500 rounded  mr-2 transform hover:text-green-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20px">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  </template>
                </Modal>

                <!-- DELETE -->
                <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="sendDelete(img)"
                  :isImage="true" title="O'chirish" subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                  btnTextSubmit="O'chirish" btnColorSubmit="bg-red-500">
                  <template v-slot:button>
                    <div class="w-8 h-8 flex items-center justify-center border-2 border-red-500 rounded  mr-2 transform hover:text-red-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20px">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                  </template>
                </Modal>
              </div>
            </td>

          </tr>

        </thead>
      </table>
    </div>
    <div class="spinner" v-if="loading"></div>
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
  submitEdit,
  submitDelete,
  submitEditHeader,
} from "@/helper/active-modal";
const breadcrumbs = [
  {
    label: "Sahifalarni tahrirlash",
    url: "/",
  },
  {
    label: "Bonuslar sahifasi rasmlari",
    url: "header",
  },
];

let adminUrl = "https://superphotoshop.uz/api/dashboard"
let bonusImg = ref([]);
const loading = ref(true)



async function getBonusImg() {
  const token = localStorage.getItem('token')
  fetch(adminUrl + "/bonus-course-images", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

  }).then(res => res.json()).then(data => {
    bonusImg.value = data;
    loading.value = false
  })
}

getBonusImg()

const bonus_img = ref("");
const add_status = ref(true)
const edit_status = ref(true);

function editImg(event) {
  bonus_img.value = event.target.files[0]
}

async function sendAdd() {
  let formdata = new FormData;
  formdata.append('img', bonus_img.value);
  formdata.append('status', add_status.value ? 1 : 0);


  await submitAdd(adminUrl + "/bonus-course-images/create", formdata);
  await getBonusImg()
}

async function sendEdit(item) {
  let id = item.id;
  let formdata = new FormData();
  formdata.append("img", bonus_img.value);
  formdata.append("status", edit_status.value ? 1 : 0);

  await submitEdit(adminUrl + "/bonus-course-images/update?id=" + id, formdata);
  await getBonusImg();

}


async function sendDelete(item) {
  let id = item.id;

  // /navbar-category/delete?id=6
  await submitDelete(adminUrl + "/bonus-course-images/delete?id=" + id);
  await getBonusImg();
}

</script>

<style lang="scss" scoped></style>