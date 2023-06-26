<template>
  <div class="menus lg:h-screen h-auto px-6 py-3" >
   

    <!-- breadcump -->
    <breadcump :items="breadcrumbs"></breadcump>


    <!-- title -->
    <div class="w-full py-3 mt-4 flex items-end justify-between">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Mijozlar ro'yhati
      </h1>
    </div>


    <!-- main -->
    <div class="overflow-x-auto">
      <div class="w-full">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">ID</th>
                <th class="py-3 px-6 text-left">Username</th>
                <th class="py-3 px-6 text-left">Phone</th>
                <th class="py-3 px-6 text-left">Ro`yxatdan o`tagn sana</th>
                <th class="py-3 px-6 text-left"> Holati</th>
                <th class="py-3 px-6 text-center"> Action</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr v-for="(item, index) in items?.data.items" :key="item.id"
                class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <span class="font-medium"> {{ index + 1 }} </span>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="min-w-max text-base font-medium">{{ item.username }} </span>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <span class="min-w-max text-base font-medium"> {{ item.phone }} </span>
                </td>
                <td class="py-3 px-6 text-left">
                  <span class="min-w-max text-base font-medium"> {{ item.created_at }} </span>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex-1">
                     <button v-if="item.status === 1"   @click="changeStatus(item)" class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs cursor-pointer">Ko`rildi</button>
                      <button v-else @click="changeStatus(item)" class="bg-red-200 text-red-700 py-1 px-4 rounded-full text-xs cursor-pointer">Ko`rilmadi</button>
                    </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex item-center justify-center">

                    <!-- see -->
                    <Modal :activeModal="activeModal"  @open="changeActive" @close="closeModal" @submit="closeModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Chiqish">
                      <template v-slot:body>
                        <div>
                          <div class="flex justfy-center flex-col text-left gap-4">
                            <span class="font-normal text-base flex-1 flex items-center gap-4">
                              <span>Ismi</span> 
                              {{ item.username }}</span>
                            <span class="font-normal text-base flex-1 flex items-center gap-4"> 
                              <spam>Telefon raqami</spam>
                               {{ item.phone }}
                            </span>
                            <span class="font-normal text-base flex-1 flex items-center gap-4"> 
                              Holati
                              <div class="col-span-3">
                                <span v-if="item.status === 1" class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">Ko'rildi</span>
                                <span v-else class="bg-red-200 text-red-700 py-1 px-4 rounded-full text-xs">Ko'rilmadi</span>
                            </div>
                            </span>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div class="w-8 h-8 flex items-center justify-center border-2 border-green-500 rounded  mr-2 transform hover:text-blue-500 hover:scale-110">
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

                    
                    <!-- delete -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="sendDelete(item)"
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
            </tbody>
          </table>
         
        </div>
        <div class="mt-2 mb-4">
            <ul class="flex items-center gap-3">
              <li @click="updatePage(pagi)" v-for="pagi in items?.data._meta.pageCount" :key="pagi" class="border-2 w-11 h-11 flex items-center justify-center cursor-pointer rounded-full font-bold " :class="pagi == count ? 'active' : ''">
                <h1>{{ pagi }}</h1>
              </li>
            </ul>
          </div>
      </div>
    </div>

    <div class="spinner" v-if="loading"></div>
  </div>
</template>

<script setup>
import Modal from "@/components/modal.vue";
import Breadcump from "@/components/Breadcump.vue";
import { ref, onMounted } from "vue";
import {
  activeModal,
  changeActive,
  closeModal,
  nextModal,
  submitAdd,
  submitEdit,
  submitDelete,
  } from "@/helper/active-modal";


const adminUrl = 'https://superphotoshop.uz/api/dashboard'
const breadcrumbs = [
  {
    label: "Mijozlar ro`yxati",
    url: "/"
  },
]

// main items
let items = ref(null)
let count = ref(1)
const loading = ref(true)




const updatePage = async (page) => {
  const token = localStorage.getItem('token')
  count.value = page
  const res = await fetch('https://superphotoshop.uz/api/dashboard/contact-form/index?page=' + page, {
    methods: 'POST',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const data = await res.json();
  items.value = data;
}

async function getData() {
  const token = localStorage.getItem('token')
  const res = await fetch(adminUrl + '/contact-form?per-page=5&page=' + count.value, {
    method:'POST', 
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const req = await res.json()
  items.value = req
  loading.value = false
}


  getData()





async function sendDelete(item) {
  let id = item.id;

  // DELETED ITEM
  await submitDelete(adminUrl + `/contact-form/delete?id=${id}`);
  await getData()
}

async function changeStatus(item) {
  let id = item.id;
  //CHANGE STATUS

  await submitEdit(adminUrl + `/contact-form/checked?id=${id}`);
  await getData()
  
  localStorage.setItem('status', item.status);
   
}


</script>

<style>
.active {
  background: rgb(113, 111, 111);
  transition: 0.5s linear;
  color: white;
}

</style>