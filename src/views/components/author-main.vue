<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">

    <!-- breadcump -->
    <breadcump :items="breadcrumbs"></breadcump>

    <!-- title -->
    <div class="w-full py-4 mt-4 flex items-end justify-between">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Muallif haqida asosiy qism
      </h1>
    </div>

    <!-- main -->
    <div class="overflow-auto">
      <div class="w-full">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded my-3">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">Sarlavha</th>
                <th class="py-3 px-6 text-center">Rasm</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <!-- items -->
              <tr v-for="item in items?.data" :key="item.id"
                class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="py-4 px-6 text-left">
                  <div class="flex items-center">
                    <p class="max-h-12 overflow-hidden  min-w-fit text-base font-medium red-title"> {{ item.title }}
                    </p>
                  </div>
                </td>
                <td class="py-3 px-6 text-center flex justify-center">
                  <div class="w-20">
                    <img class="w-full h-full" :src="item.image" alt="">
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @click="openEdit(item)" @open="changeActive" @close="closeModal"
                      @submit="nextModal" :isImage=true title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="grid grid-cols-4 gap-4">
                          <span class="font-medium text-lg">Sarlavha</span>
                          <p class="font-normal text-base col-span-3"> {{ item.title }} </p>
                          <span class="font-medium text-lg"> Tavsifi </span>
                          <span class="font-normal text-base col-span-3"> {{ item.content }} </span>
                          <span class="font-medium text-lg "> Komment </span>
                          <span class="block font-normal text-base col-span-3"> {{ item.comment }} </span>
                          <span class="font-medium text-lg ">Rasm</span>
                          <span class="block font-normal text-base col-span-3 w-48">
                            <img class="w-full" :src="item.image" alt="">
                          </span>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div class="w-5 mr-3 transform hover:text-blue-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            <p>Sarlavha</p>
                            <input type="text" placeholder="" @input="edit_title = $event.target.value"
                              :value="edit_title"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div>
                            <label for="default-input"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sahifa
                              tavsifini kiriting</label>
                            <textarea id="message" rows="8" @input="edit_desc = $event.target.value" :value="edit_desc"
                              class="block p-2.5 w-full min-h-fit text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Sahifa tavsifini shu yerga yozing"></textarea>
                          </div>
                          <div>
                            <label for="default-input"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kommentariyani kiriting</label>
                            <textarea id="message" rows="4" @input="edit_comment = $event.target.value" :value="edit_comment"
                              class="block p-2.5 w-full min-h-fit text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Sahifa tavsifini shu yerga yozing"></textarea>
                          </div>
                          <div class="space-y-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">Rasm
                              yuklash</label>
                            <input @input="editImage($event)"
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or
                              GIF (MAX. 800x400px).</p>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div class="w-5 mr-3 transform hover:text-green-500 hover:scale-110">
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
          <div v-if="!items?.data" class="flex justify-center py-6">
            <div class="spinner"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// components
import Modal from "@/components/modal.vue";
import Breadcump from "@/components/Breadcump.vue";
import { activeModal, changeActive, closeModal, nextModal, submitAdd, submitEdit, submitDelete } from '@/helper/active-modal'
// admin url
const adminUrl = "https://superphotoshop.uz/api/dashboard";
// main items
let items = ref()

async function getData() {
  const res = await fetch(adminUrl + '/author-about')
  const req = await res.json()
  items.value = req
}

onMounted(() => {
  getData()
})

// edit variables
let edit_title = ref('')
let edit_desc = ref('')
let edit_comment = ref('')
let edit_image = ref('')


function editImage(event) {
  edit_image.value = event.target.files[0]

}

function openEdit(item) {
  edit_title.value = item.title
  edit_desc.value = item.content
  edit_comment.value = item.comment
  edit_image.value = item.image

}

async function sendEdit(item) {
  let id = item.id
  let formdata = new FormData()
  formdata.append('title', edit_title.value)
  formdata.append('content', edit_desc.value)
  formdata.append('comment', edit_comment.value)
  formdata.append('img', edit_image.value)

  await submitEdit(adminUrl + '/author-about/update?id=' + id, formdata)
  await getData()

  edit_title.value = ''
  edit_image.value = ''
  edit_status.value = true
}

const breadcrumbs = [
  {
    label: "Bosh sahifa",
    url: "/"
  },
  {
    label: "Muallif haqida",
  },
]
</script>

<style lang="scss" scoped>
// styles
</style>