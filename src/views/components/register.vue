<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">

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
import Breadcump from "@/components/Breadcump.vue";

const adminUrl = 'https://superphotoshop.uz/api/dashboard'

// main items
let items = ref()

async function getData() {
  const res = await fetch(adminUrl + '/contact-form?per-page=5&page=3')
  const req = await res.json()
  items.value = req
}

onMounted(() => {
  getData()
})

const breadcrumbs = [
  {
    label: "Mijozlar narxi",
    url: "/"
  },
]

</script>

<style lang="scss" scoped></style>