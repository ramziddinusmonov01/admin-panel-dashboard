<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">

    <!-- breadcump -->
    <breadcump :items="breadcrumbs"></breadcump>


    <!-- title -->
    <div class="w-full py-3 mt-4 flex items-end justify-between">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Video dars narxlari
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
                <th class="py-3 px-6 text-left">Nomi</th>
                <th class="py-3 px-6 text-left">Rasm</th>
                <th class="py-3 px-6 text-center">Holati</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr v-for="(item, index) in items?.data" :key="item.id"
                class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <span class="font-medium"> {{ index + 1 }} </span>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="min-w-max text-base font-medium"> {{ item.title }} </span>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center w-24">
                    <img class="w-full h-full" :src="item.image" alt="img">
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">Faol</span>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @click="openEdit(item)" @open="changeActive" @close="closeModal"
                      @submit="nextModal" :isImage=true title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="grid grid-cols-4 gap-4">
                          <span class="font-medium text-lg">Nomi</span>
                          <span class="font-normal text-base col-span-3"> {{ item.title }} </span>
                          <span class="font-medium text-lg">Super kurs narxi</span>
                          <span class="font-normal text-base col-span-3"> {{ item.super_course_price }} </span>
                          <span class="font-medium text-lg">Effektiv kurs narxi</span>
                          <span class="font-normal text-base col-span-3"> {{ item.effect_course_price }} </span>
                          <span class="font-medium text-lg">Umumiy Narx</span>
                          <span class="font-normal text-base col-span-3"> {{ item.total_price }} </span>
                          <span class="font-medium text-lg">Chegirma narxi</span>
                          <span class="font-normal text-base col-span-3"> {{ item.discount_price }} </span>
                          <span class="font-medium text-lg">link</span>
                          <span class="font-normal text-base col-span-3"> {{ item.sign_up_link }} </span>
                          <span class="block font-normal text-base col-span-3">
                            <img class="w-44" :src="item.image" alt="">
                          </span>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div class="w-8 h-8 flex items-center justify-center border-2 border-blue-500 rounded  mr-3 transform hover:text-blue-500 hover:scale-110">
                          <svg class="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" width="20px">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- edit -->
                    <Modal :activeModal="activeModal" @click="openEdit(item)" @open="changeActive" @close="closeModal"
                      @submit="sendEdit(item)" :isImage=true title="Tahrirlash" subtitle="Cartni tahrirlash"
                      btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Card nomi</p>
                            <input type="text" placeholder="" @input="edit_title = $event.target.value"
                              @keydown.enter="sendEdit(item)" :value="edit_title"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Super kurs narxini kiriting</p>
                            <input type="text" placeholder="" @input="edit_super_course_price = $event.target.value"
                              @keydown.enter="sendEdit(item)" :value="edit_super_course_price"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Effectiv kurs narxi</p>
                            <input type="text" placeholder="" @input="edit_effect_course_price = $event.target.value"
                              @keydown.enter="sendEdit(item)" :value="edit_effect_course_price"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Umumiy narx</p>
                            <input type="text" placeholder="" @input="edit_total_price = $event.target.value"
                              @keydown.enter="sendEdit(item)" :value="edit_total_price"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Chegirma narxi</p>
                            <input type="text" placeholder="" @input="edit_discount_price = $event.target.value"
                              @keydown.enter="sendEdit(item)" :value="edit_discount_price"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>link</p>
                            <input type="text" placeholder="" @input="edit_sign_up_link = $event.target.value"
                              @keydown.enter="sendEdit(item)" :value="edit_sign_up_link"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">Rasm yuklash</label>
                            <input @input="editImage($event)"
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or
                              GIF (MAX. 800x400px).</p>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div class="w-8 h-8 flex items-center justify-center border-2 border-green-500 rounded  mr-3 transform hover:text-green-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20px">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- delete -->

                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="!items?.data" class="flex justify-center py-6">
            <div class="spinner"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="spinner" v-if="loading"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// components
import Modal from "@/components/modal.vue";
import Breadcump from "@/components/Breadcump.vue";
import { activeModal, changeActive, closeModal, nextModal, submitAdd, submitEdit, submitDelete } from '@/helper/active-modal'

const adminUrl = 'https://superphotoshop.uz/api/dashboard'

// main items
let items = ref()
const loading = ref(true)

async function getData() {
  const token = localStorage.getItem('token')
  const res = await fetch(adminUrl + '/course-price', {
    method:'POST',
    headers:{
      'Content-type':'aplication/json',
      'Authorization':`Bearer ${token}`
    }
  })
  const req = await res.json()
  items.value = req
  loading.value = false
}

onMounted(() => {
  getData()
})







// edit variables
let edit_image = ref('')
let edit_title = ref('')
let edit_super_course_price = ref('')
let edit_effect_course_price = ref('')
let edit_total_price = ref('')
let edit_discount_price = ref('')
let edit_sign_up_link = ref('')




function editImage(event) {
  edit_image.value = event.target.files[0]

}

function openEdit(item) {
  edit_image.value = item.image
  edit_title.value = item.title
  edit_super_course_price.value = item.super_course_price
  edit_effect_course_price.value = item.effect_course_price
  edit_total_price.value = item.total_price
  edit_discount_price.value = item.discount_price
  edit_sign_up_link.value = item.sign_up_link
}

async function sendEdit() {
  let formdata = new FormData()
  formdata.append('img', edit_image.value)
  formdata.append('title', edit_title.value)
  formdata.append('super_course_price', edit_super_course_price.value)
  formdata.append('effect_course_price', edit_effect_course_price.value)
  formdata.append('total_price', edit_total_price.value)
  formdata.append('discount_price', edit_discount_price.value)
  formdata.append('sign_up_link', edit_sign_up_link.value)
  await submitEdit(adminUrl + '/course-price/update?id=1', formdata)
  await getData()

}

const breadcrumbs = [
  {
    label: "Videodarslar narxi",
    url: "/"
  },
]

</script>

<style  scoped>


</style>