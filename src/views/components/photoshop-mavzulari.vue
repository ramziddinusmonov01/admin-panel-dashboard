<template>
  <div>
    

    <div class="menus lg:h-screen h-auto px-6 py-3" >
      <!-- breadcump /-->
      <breadcump :items="breadcrumbs"></breadcump>

      <!-- title /-->
      <div class="mt-5 w-full">
        <div class="flex justify-between">
          <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
            Photoshop mazulari sahifasini tahrirlash
          </h1>
          <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="sendAdd" :isImage="true"
            title="Yangi element qo'shish" subtitle="" btnTextSubmit="Saqlash">
            <template v-slot:body>
              <div class="space-y-5 pb-5">
                <div class="space-y-3">
                  <p>Sarlavhani kiriting</p>
                  <input type="text" placeholder="" @input="title = $event.target.value"
                    class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                </div>
                <div class="space-y-3">
                  <p>Matn kiriting</p>
                  <textarea @input="desc = $event.target.value"    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."></textarea>
                </div>
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
                <tr
                  class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">komponentalar</th>
                  <th class="py-3 px-6 text-center">Holati</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <!-- title  tahrirlash/-->
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="themsTitle in photoshopThems?.data"
                  :key="themsTitle.id">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span class="text-base font-medium">{{ themsTitle.title }}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex-1">
                     <span v-if="themsTitle.status === 1" class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">Faol</span>
                      <span v-else class="bg-red-200 text-red-700 py-1 px-4 rounded-full text-xs">Nofaol</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <!-- see -->
                      <Modal :activeModal="activeModal" @click="openEdit(themsTitle)" @open="changeActive" @close="closeModal" @submit="nextModal"
                        :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                        <template v-slot:body>
                          <div class="flex justify-start gap-12">
                            <div class="flex flex-col items-start gap-6">
                              <span class="font-medium text-lg flex-1">Sarlavha</span>
                              <span class="font-medium text-lg flex-1">Izoh</span>
                              <span class="font-medium text-lg flex-1">Rasm</span>
                              <span class="font-medium text-lg flex-1">Holati</span>
                            </div>
                            <div class="flex flex-col items-start gap-6">
                              <span class="font-normal text-base flex-1">{{ themsTitle.title }}</span>
                              <span class="font-normal text-base flex-1">{{ themsTitle.description }}</span>
                              <span class="font-normal text-base flex-1">
                                <img :src="themsTitle.image" :alt="themsTitle.title">
                              </span>
                              <div class="flex-1">
                              <span v-if="themsTitle.status === 1" class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">Faol</span>
                              <span v-else class="bg-red-200 text-red-700 py-1 px-4 rounded-full text-xs">Nofaol</span>
                            </div>
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div class="w-8 h-8 flex items-center justify-center border-2 border-blue-500 rounded mr-2 transform hover:text-blue-500 hover:scale-110">
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
                      <Modal :activeModal="activeModal" @click="openEdit(themsTitle)" @open="changeActive" @close="closeModal" @submit="sendEdit(themsTitle)"
                        :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                        <template v-slot:body>
                          <div class="space-y-5 pb-5">
                            <div class="space-y-3">
                              <p>Sarlavhani kiriting</p>
                              <input type="text" placeholder=""  @input="title = $event.target.value" :value="themsTitle.title"
                                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                            </div>
                            <div class="space-y-3">
                              <p>Izohni kiriting</p>
                              <textarea @input="desc = $event.target.value" :value="themsTitle.description" id="message" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your thoughts here..."></textarea>

                            </div>
                            <div class="space-y-3">
                              <p>Rasmni kiriting</p>
                              <input @change="editImg($event)"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
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
                          <div class="w-8 h-8 flex items-center justify-center border-2 border-green-500 rounded mr-2 transform hover:text-green-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20px">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- delete -->
                      <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal"
                        @submit="sendDelete(themsTitle)" :isImage="true" title="O'chirish"
                        subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi" btnTextSubmit="O'chirish"
                        btnColorSubmit="bg-red-500">
                        <template v-slot:button>
                          <div class="w-8 h-8 flex items-center justify-center border-2 border-red-500 rounded mr-2 transform hover:text-red-500 hover:scale-110">
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
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div class="spinner" v-if="loading"></div>
    </div>




  </div>
</template>

<script setup>
import { ref } from "vue"
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
const loading = ref(true);
const add_status = ref(true);
const edit_status = ref(true)
const deleted = ref(false)
const breadcrumbs = [
  {
    label: "Sahifalarni tahrirlash",
    url: "/",
  },
  {
    label: "Photshop mavzlular sahifasini tahrirlash",
    url: "header",
  },
];


let adminUrl = "https://superphotoshop.uz/api/dashboard";

const photoshopThems = ref([])

async function getThems() {
  const token = localStorage.getItem('token')
  fetch(adminUrl + '/photoshop-themes', {
    method:"POST",
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    }
  }).then(res => res.json().then(data => {
    photoshopThems.value = data
    loading.value = false
  }))


}


getThems()


const title = ref("");
const desc = ref("");
const add_img = ref("");

function editImg(event) {
  add_img.value = event.target.files[0]
}


async function sendAdd() {
  let formdata = new FormData();
  formdata.append("title", title.value);
  formdata.append("description", desc.value);
  formdata.append("img", add_img.value);
  formdata.append("status", add_status.value ? 1 : 0);
  await submitAdd(adminUrl + "/photoshop-themes/create", formdata);
  await getThems();


}

function openEdit(item) {
  title.value = item.title;
  edit_status.value = item.status === 1 ? true : false;
}

async function sendEdit(item) {
  
  let id = item.id;
  let formdata = new FormData();
  formdata.append("title", title.value);
  formdata.append("description", desc.value);
  formdata.append("img", add_img.value);
  formdata.append("status", edit_status.value ? 1 : 0);

  

  await submitEdit( adminUrl + "/photoshop-themes/update?id=" + id, formdata );
  await getThems();

}


async function sendDelete(item) {
  deleted.value = true;
  let id = item.id;

  // /navbar-category/delete?id=6
  await submitDelete(adminUrl + "/photoshop-themes/delete?id=" + id);
  await getThems();
  deleted.value = false;


}







</script>

<style scoped>




</style>
