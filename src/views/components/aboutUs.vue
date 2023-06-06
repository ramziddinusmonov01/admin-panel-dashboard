<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">
    <breadcump :items="breadcrumbs"></breadcump>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <div class="flex justify-between">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Biz haqimizda
        </h1>

      </div>
    </div>

    <!-- title -->
    <div>
      <div class="overflow-x-auto">
        <div class="w-full">
          <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6 py-3 px-6">
            <div>
              <h1 class="text-xl text-gray-900 font-medium dark:text-gray-200">
                Ma'lumotlarni tahrirlash
              </h1>
            </div>
            <div>
              <div class="overflow-x-auto">
                <div class="w-full">
                  <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6 py-3 px-6">
                    <div class="flex items-center gap-4">
                      <div class="flex-1">
                        <label for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sarlavhani
                          kiriting</label>
                        <input type="text" id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      </div>
                      <div class="flex-1">
                        <label for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ma'lumot matnini
                          kiriting</label>
                        <input type="text" id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      </div>
                    </div>
                    <div class="flex justify-end mt-4">
                      <button type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Saqlash
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Videoni tahrirlash -->
    <div>
      <div class="mt-5 w-full">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Videoni yangilash
        </h1>
      </div>
      <div class="overflow-x-auto">
        <div class="w-full">
          <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6 py-3 px-6">
            <div class="md:flex items-center gap-4">
              <div class="flex-initial w-max h-auto">
                <video width="520" controls>
                  <source src="@/assets/video/vid.mp4" type="video/mp4">
                  <source src="@/assets/video/vid.mp4" type="video/ogg">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="mt-4 md:mt-0 flex items-center justify-center w-full p-4">
                <label for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                        upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Mp4</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import Modal from "@/components/modal.vue";
import Breadcump from "@/components/Breadcump.vue";
const breadcrumbs = [
  {
    label: "Sahifalarni tahrirlash",
    url: "/"
  },
  {
    label: "Biz haqimizda",
  },
]
</script>

<style lang="scss" scoped></style>