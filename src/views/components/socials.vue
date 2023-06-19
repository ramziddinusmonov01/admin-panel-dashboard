<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">

    <!-- breadcump -->
    <breadcump :items="breadcrumbs"></breadcump>

    <!-- title -->
    <div class="w-full py-3 mt-4 flex items-end justify-between">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Nima uchun mijozlar bizni tanlab kelishadi
      </h1>
      <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="sendAdd" :isImage=true
        title="Yangi menyu qo'shish" btnTextSubmit="Saqlash">
        <template v-slot:body>
          <div class="space-y-5 pb-5">
            <div class="space-y-3">
              <p>Nomi</p>
              <input type="text" placeholder="" v-model="state.add_name"
                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
              <span class="text-red-500 mt-3 block rounded-full text-xs" v-for="error in v$.add_name.$errors"
                :key="error.$uid"> Ushbu maydon to'ldirilishi shart </span>
            </div>
            <div class="space-y-3">
              <p>Havola</p>
              <input type="text" placeholder="" v-model="state.add_link"
                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
              <span class="text-red-500 mt-3 block rounded-full text-xs" v-for="error in v$.add_link.$errors"
                :key="error.$uid"> Ushbu maydon to'ldirilishi shart </span>
            </div>
            <div class="space-y-3">
              <p>Belgi nomi</p>
              <input type="text" placeholder="" v-model="state.add_icon"
                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
              <span class="text-red-500 mt-3 block rounded-full text-xs" v-for="error in v$.add_icon.$errors"
                :key="error.$uid"> Ushbu maydon to'ldirilishi shart </span>
            </div>
            <div class="space-y-3">
              <p>Holati</p>
              <label class="relative inline-flex items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked v-model="add_status">
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"> {{ add_status ?
                  "Faol" : "Nofaol" }} </span>
              </label>
            </div>
          </div>
        </template>
        <template v-slot:button>
          <span class="bg-green-500 pb-1 px-4 rounded-md text-4xl text-green-50">+</span>
        </template>
      </Modal>
    </div>

    <!-- main -->
    <div class="overflow-auto">
      <div class="w-full">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded my-3">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">#</th>
                <th class="py-3 px-6 text-left">Nomi</th>
                <th class="py-3 px-6 text-left">Havola</th>
                <th class="py-3 px-6 text-center">Holati</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr v-for="(item, index) in items?.data" :key="item.id"
                class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="w-20 py-3 px-6 text-left whitespace-nowrap">
                  <span class="font-medium"> {{ index }} </span>
                </td>
                <td class="py-4 px-6 text-left">
                  <div class="flex items-center">
                    <span class="min-w-max text-base font-medium"> {{ item.social_name }} </span>
                  </div>
                </td>
                <td class="py-4 px-6 text-left">
                  <div class="flex items-center">
                    <span class="min-w-max text-base font-medium"> {{ item.social_link }} </span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span v-if="item.status === 1"
                    class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">Faol</span>
                  <span v-else class="bg-red-200 text-red-700 py-1 px-4 rounded-full text-xs">Nofaol</span>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @click="openEdit(item)" @open="changeActive" @close="closeModal"
                      @submit="nextModal" :isImage=true title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="grid grid-cols-4 gap-4">
                          <span class="font-medium text-lg">Nomi</span>
                          <span class="font-normal text-base col-span-3"> {{ item.social_name }} </span>
                          <span class="font-medium text-lg">Havola</span>
                          <span class="font-normal text-base col-span-3"> {{ item.social_link }}
                          </span>
                          <span class="font-medium text-lg">Belgi nomi</span>
                          <span class="font-normal text-base col-span-3"> {{ item.social_icon }}
                          </span>
                          <span class="font-medium text-lg ">Holati</span>
                          <div class="col-span-3">
                            <span v-if="item.status === 1"
                              class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs">Faol</span>
                            <span v-else class="bg-red-200 text-red-700 py-1 px-4 rounded-full text-xs">Nofaol</span>
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
                    <Modal :activeModal="activeModal" @click="openEdit(item)" @open="changeActive" @close="closeModal"
                      @submit="sendEdit(item)" :isImage=true title="Tahrirlash" subtitle="Cartni tahrirlash"
                      btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Nomi</p>
                            <input type="text" placeholder="" :value="edit_name" @input="edit_name = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Havola</p>
                            <input type="text" placeholder="" :value="edit_link"
                              @input="edit_link = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Belgi nomi</p>
                            <input type="text" placeholder="" :value="edit_icon"
                              @input="edit_icon = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Holati</p>
                            <label class="relative inline-flex items-center mr-5 cursor-pointer">
                              <input @click="edit_status = !edit_status" type="checkbox" class="sr-only peer"
                                :checked="edit_status" :value="edit_status">
                              <div
                                class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
                                :class="{ 'peer-checked:bg-indigo-600 peer-checked:after:border-white peer-checked:after:translate-x-full': edit_status }">
                              </div>

                              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"> {{
                                edit_status ? "Faol" : "Nofaol" }} </span>
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="sendDelete(item)"
                      :isImage=true title="O'chirish" subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
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
          <div v-if="!items?.data" class="flex justify-center py-6">
            <div class="spinner"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
// components
import Modal from "@/components/modal.vue";
import Breadcump from "@/components/Breadcump.vue";
import { activeModal, changeActive, closeModal, nextModal, submitAdd, submitEdit, submitDelete } from '@/helper/active-modal'
// admin url
const adminUrl = "https://superphotoshop.uz/api/dashboard";

let items = ref()

async function getData() {
  const res = await fetch(adminUrl + '/social-network')
  const req = await res.json()
  items.value = req
}

onMounted(() => {
  getData()
})

// add variables
const add_status = ref(true)
const state = reactive({
  add_name: '',
  add_link: '',
  add_icon: '',
})
 
const rules = {
  add_name: { required },
  add_link: { required },
  add_icon: { required },
}

const v$ = useVuelidate(rules, state)


// edit variables
const edit_name = ref('')
const edit_link = ref('')
const edit_icon = ref('')
const edit_status = ref(true)


function openEdit(item) {
  edit_name.value = item.social_name
  edit_link.value = item.social_link
  edit_icon.value = item.social_icon
  edit_status.value = item.status === 1 ? true : false
}


async function sendAdd() {
  const result = await v$.value.$validate()
  let formdata = new FormData()
  formdata.append('social_name', state.add_name)
  formdata.append('social_link', state.add_link)
  formdata.append('social_icon', state.add_icon)
  formdata.append('status', add_status.value ? 1 : 0)
  if (result) {
    await submitAdd(adminUrl + '/social-network/create', formdata)
    await getData()

    state.add_name = ''
  }
}


async function sendEdit(item) {
  let id = item.id
  let formdata = new FormData()
  formdata.append('social_name', edit_name.value)
  formdata.append('social_link', edit_link.value)
  formdata.append('social_icon', edit_link.value)
  formdata.append('status', edit_status.value ? 1 : 0)

  await submitEdit(adminUrl + '/social-network/update?id=' + id, formdata)
  await getData()

  edit_name.value = ''
}

async function sendDelete(item) {
  let id = item.id

  // /social-network/delete?id=6
  await submitEdit(adminUrl + '/social-network/delete?id=' + id)
  await getData()
}
const breadcrumbs = [
  {
    label: "Bosh sahifa",
    url: "/"
  },
  {
    label: "Kurs harakteristikasi",
  },
]
</script>

<style lang="scss" scoped></style>