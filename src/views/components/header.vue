<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">
    <!-- breadcump /-->
    <breadcump :items="breadcrumbs"></breadcump>

    <!-- title /-->
    <div class="mt-5 w-full">
      <div class="flex justify-between">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Navigation
        </h1>
      </div>
    </div>

    <!-- Navbarni tahrirlash/-->
    <div class="overflow-x-auto dark:bg-gray-800">
      <div class="w-full">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr
                class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal"
              >
                <th class="py-3 px-6 text-left">ID</th>
                <th class="py-3 px-6 text-left">komponentalar</th>
                <th class="py-3 px-6 text-center">Holati</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <span class="font-medium">1</span>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Tillar</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <button
                    class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                  >
                    Faol
                  </button>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <!-- see -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="nextModal"
                      :isImage="true"
                      title="Ko'rish"
                      btnTextSubmit="Tahrirlash"
                    >
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-4">
                            <span class="font-medium text-lg flex-1"
                              >Tillar</span
                            >
                            <div
                              v-for="language in store.languages"
                              :key="language.code"
                            >
                              <span class="font-normal text-base flex-1">{{
                                language.code
                              }}</span>
                            </div>
                          </div>
                          <div class="flex flex-col items-start gap-4">
                            <span class="font-medium text-lg flex-1"
                              >Holati</span
                            >
                            <div
                              v-for="language in store.languages"
                              :key="language.code"
                            >
                              <span
                                class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                                >Faol</span
                              >
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                        >
                          <svg
                            class="w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- edit -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="submitEdit"
                      :isImage="true"
                      title="Tahrirlash"
                      subtitle="Cartni tahrirlash"
                      btnTextSubmit="Saqlash"
                    >
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Til kodi</p>
                            <input
                              type="text"
                              placeholder=""
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                            />
                          </div>
                          <div class="space-y-3">
                            <p>Holati</p>
                            <label
                              class="relative inline-flex items-center mr-5 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                value=""
                                class="sr-only peer"
                                checked
                              />
                              <div
                                class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                              ></div>
                              <span
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >Faol</span
                              >
                            </label>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- delete -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="submitDelete"
                      :isImage="true"
                      title="O'chirish"
                      subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                      btnTextSubmit="O'chirish"
                      btnColorSubmit="bg-red-500"
                    >
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                  </div>
                </td>
              </tr>

              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <span class="font-medium">2</span>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Joylashuv</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <button
                    class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                  >
                    Faol
                  </button>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="nextModal"
                      :isImage="true"
                      title="Ko'rish"
                      btnTextSubmit="Tahrirlash"
                    >
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-4">
                            <span class="font-medium text-lg flex-1"
                              >Joylashuv</span
                            >
                            <div>
                              <span class="font-normal text-base flex-1"
                                >Andijon shaxar, boychechak 4</span
                              >
                            </div>
                          </div>
                          <div class="flex flex-col items-start gap-4">
                            <span class="font-medium text-lg flex-1"
                              >Holati</span
                            >
                            <div>
                              <span
                                class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                                >Faol</span
                              >
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                        >
                          <svg
                            class="w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- edit -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="submitEdit"
                      :isImage="true"
                      title="Tahrirlash"
                      subtitle="Joylashuvni tahrirlash"
                      btnTextSubmit="Saqlash"
                    >
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Yangi Joylashuvni kiriting</p>
                            <input
                              type="text"
                              placeholder=""
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                            />
                          </div>
                          <div class="space-y-3">
                            <p>Holati</p>
                            <label
                              class="relative inline-flex items-center mr-5 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                value=""
                                class="sr-only peer"
                                checked
                              />
                              <div
                                class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                              ></div>
                              <span
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >Faol</span
                              >
                            </label>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- delete -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="submitDelete"
                      :isImage="true"
                      title="O'chirish"
                      subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                      btnTextSubmit="O'chirish"
                      btnColorSubmit="bg-red-500"
                    >
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                  </div>
                </td>
              </tr>

              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <span class="font-medium">3</span>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">ish vaqtimiz</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <button
                    class="bg-red-200 text-red-700 py-1 px-4 rounded-full text-xs"
                  >
                    Nofaol
                  </button>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="nextModal"
                      :isImage="true"
                      title="Ko'rish"
                      btnTextSubmit="Tahrirlash"
                    >
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-4">
                            <span class="font-medium text-lg flex-1"
                              >Ish vaqti</span
                            >
                            <div>
                              <span class="font-normal text-base flex-1"
                                >09:00 - 22:00</span
                              >
                            </div>
                          </div>
                          <div class="flex flex-col items-start gap-4">
                            <span class="font-medium text-lg flex-1"
                              >Holati</span
                            >
                            <div>
                              <span
                                class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                                >Faol</span
                              >
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                        >
                          <svg
                            class="w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- edit -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="submitEdit"
                      :isImage="true"
                      title="Tahrirlash"
                      subtitle="Joylashuvni tahrirlash"
                      btnTextSubmit="Saqlash"
                    >
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Yangi ish vaqtini kiriting</p>
                            <input
                              type="text"
                              placeholder=""
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                            />
                          </div>
                          <div class="space-y-3">
                            <p>Holati</p>
                            <label
                              class="relative inline-flex items-center mr-5 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                value=""
                                class="sr-only peer"
                                checked
                              />
                              <div
                                class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                              ></div>
                              <span
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >Faol</span
                              >
                            </label>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- delete -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="submitDelete"
                      :isImage="true"
                      title="O'chirish"
                      subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                      btnTextSubmit="O'chirish"
                      btnColorSubmit="bg-red-500"
                    >
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                  </div>
                </td>
              </tr>

              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <span class="font-medium">4</span>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Qo'ng'iroq qiling</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <button
                    class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                  >
                    Faol
                  </button>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="nextModal"
                      :isImage="true"
                      title="Ko'rish"
                      btnTextSubmit="Tahrirlash"
                    >
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-4">
                            <span class="font-medium text-lg flex-1"
                              >Telefon raqam</span
                            >
                            <div>
                              <span class="font-normal text-base flex-1"
                                >+99897 628 28 82</span
                              >
                            </div>
                          </div>
                          <div class="flex flex-col items-start gap-4">
                            <span class="font-medium text-lg flex-1"
                              >Holati</span
                            >
                            <div>
                              <span
                                class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                                >Faol</span
                              >
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                        >
                          <svg
                            class="w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- edit -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="submitEdit"
                      :isImage="true"
                      title="Tahrirlash"
                      subtitle="Joylashuvni tahrirlash"
                      btnTextSubmit="Saqlash"
                    >
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Yangi telefon raqamni kiriting</p>
                            <input
                              type="text"
                              placeholder=""
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                            />
                          </div>
                          <div class="space-y-3">
                            <p>Holati</p>
                            <label
                              class="relative inline-flex items-center mr-5 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                value=""
                                class="sr-only peer"
                                checked
                              />
                              <div
                                class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                              ></div>
                              <span
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >Faol</span
                              >
                            </label>
                          </div>
                        </div>
                      </template>
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </template>
                    </Modal>
                    <!-- delete -->
                    <Modal
                      :activeModal="activeModal"
                      @open="changeActive"
                      @close="closeModal"
                      @submit="submitDelete"
                      :isImage="true"
                      title="O'chirish"
                      subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                      btnTextSubmit="O'chirish"
                      btnColorSubmit="bg-red-500"
                    >
                      <template v-slot:button>
                        <div
                          class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
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

    <!--   rasmini tahrirlash/-->
    <div>
      <div class="mt-5 w-full">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Bosh sahifa rasmnini O'zgartirish
        </h1>
      </div>
      <div class="overflow-x-auto">
        <div class="w-full">
          <div
            class="bg-white dark:bg-gray-800 shadow-md rounded my-6 py-3 px-6"
          >
            <div class="md:flex items-center gap-4">
              <div class="flex-initial w-72 h-auto">
                <img src="@/assets/img/bosh-sahifa-rasmi.png" alt="" />
              </div>
              <div
                class="mt-4 md:mt-0 flex items-center justify-center w-full p-4"
              >
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div
                    class="flex flex-col items-center justify-center pt-5 pb-6"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--   Sarlavhasini tahrirlash/-->
    <div>
      <div class="mt-5 w-full">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Sarlavhani O'zgartirish
        </h1>
      </div>
      <div class="overflow-x-auto dark:bg-gray-800">
        <div class="w-full">
          <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">Sarlavha</th>
                  <th class="py-3 px-6 text-center">Holati</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span class="text-base font-medium"
                        >Uyingiz uchun antiqa mebellar</span
                      >
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <button
                      class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                    >
                      Faol
                    </button>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <!-- see -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="nextModal"
                        :isImage="true"
                        title="Ko'rish"
                        btnTextSubmit="Tahrirlash"
                      >
                        <template v-slot:body>
                          <div class="flex justify-start gap-12">
                            <div class="flex flex-col items-start gap-4">
                              <span class="font-medium text-lg flex-1"
                                >Sarlavha</span
                              >
                              <span class="font-medium text-lg flex-1"
                                >Holati</span
                              >
                            </div>
                            <div class="flex flex-col items-start gap-4">
                              <span class="font-normal text-base flex-1"
                                >Uyingiz uchun antiqa mebellar</span
                              >
                              <span
                                class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                                >Faol</span
                              >
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                          >
                            <svg
                              class="w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- edit -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="submitEdit"
                        :isImage="true"
                        title="Tahrirlash"
                        subtitle="Sarlavhani tahrirlash"
                        btnTextSubmit="Saqlash"
                      >
                        <template v-slot:body>
                          <div class="space-y-5 pb-5">
                            <div class="space-y-3">
                              <p>Sarlavhani kiriting</p>
                              <input
                                type="text"
                                placeholder=""
                                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                              />
                            </div>
                            <div class="space-y-3">
                              <p>Holati</p>
                              <label
                                class="relative inline-flex items-center mr-5 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  value=""
                                  class="sr-only peer"
                                  checked
                                />
                                <div
                                  class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                                ></div>
                                <span
                                  class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                  >Faol</span
                                >
                              </label>
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- delete -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="submitDelete"
                        :isImage="true"
                        title="O'chirish"
                        subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                        btnTextSubmit="O'chirish"
                        btnColorSubmit="bg-red-500"
                      >
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
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
    </div>

    <!--   Sarlavha matnini tahrirlash/-->
    <div>
      <div class="mt-5 w-full">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Sarlavha matnini O'zgartirish
        </h1>
      </div>
      <div class="overflow-x-auto dark:bg-gray-800">
        <div class="w-full">
          <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">Sarlavha matni</th>
                  <th class="py-3 px-6 text-center">Holati</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span class="text-base font-medium"
                        >Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Blanditiis, mollitia.</span
                      >
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <button
                      class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                    >
                      Faol
                    </button>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <!-- see -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="nextModal"
                        :isImage="true"
                        title="Ko'rish"
                        btnTextSubmit="Tahrirlash"
                      >
                        <template v-slot:body>
                          <div class="flex justify-start gap-12">
                            <div class="flex flex-col items-start gap-4">
                              <span class="font-medium text-lg flex-1"
                                >Sarlavha matni</span
                              >
                              <span class="font-medium text-lg flex-1"
                                >Holati</span
                              >
                            </div>
                            <div class="flex flex-col items-start gap-4">
                              <span class="font-normal text-base flex-1"
                                >Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sint, totam.</span
                              >
                              <span
                                class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                                >Faol</span
                              >
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                          >
                            <svg
                              class="w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- edit -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="submitEdit"
                        :isImage="true"
                        title="Tahrirlash"
                        subtitle="Sarlavha matnini tahrirlash"
                        btnTextSubmit="Saqlash"
                      >
                        <template v-slot:body>
                          <div class="space-y-5 pb-5">
                            <div class="space-y-3">
                              <p>Sarlavha matnini kiriting</p>
                              <input
                                type="text"
                                placeholder=""
                                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                              />
                            </div>
                            <div class="space-y-3">
                              <p>Holati</p>
                              <label
                                class="relative inline-flex items-center mr-5 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  value=""
                                  class="sr-only peer"
                                  checked
                                />
                                <div
                                  class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                                ></div>
                                <span
                                  class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                  >Faol</span
                                >
                              </label>
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- delete -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="submitDelete"
                        :isImage="true"
                        title="O'chirish"
                        subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                        btnTextSubmit="O'chirish"
                        btnColorSubmit="bg-red-500"
                      >
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
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
    </div>

    <!--   cartlarni tahrirlash/-->
    <div class="mt-5 w-full">
      <div class="flex justify-between">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Cartlarni tahrirlash
        </h1>
        <Modal
          :activeModal="activeModal"
          @open="changeActive"
          @close="closeModal"
          @submit="submitAdd"
          :isImage="true"
          title="Yangi element qo'shish"
          subtitle=""
          btnTextSubmit="Saqlash"
        >
          <template v-slot:body>
            <div class="space-y-5 pb-5">
              <div class="space-y-3">
                <p>Cart sarlavhasini kiriting</p>
                <input
                  type="text"
                  placeholder=""
                  class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                />
              </div>
              <div class="space-y-3">
                <p>Cart matnini kiriting</p>
                <input
                  type="text"
                  placeholder=""
                  class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                />
              </div>
              <div class="space-y-3">
                <p>Holati</p>
                <label
                  class="relative inline-flex items-center mr-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    checked
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                  ></div>
                  <span
                    class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                    >Faol</span
                  >
                </label>
              </div>
            </div>
          </template>
          <template v-slot:button>
            <span
              class="bg-green-500 pb-1 px-4 rounded-md text-4xl text-green-50"
              >+</span
            >
          </template>
        </Modal>
      </div>
      <div class="overflow-x-auto dark:bg-gray-800">
        <div class="w-full">
          <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">Cart sarlavhasi</th>
                  <th class="py-3 px-6 text-left">Cart matni</th>
                  <th class="py-3 px-6 text-center">Holati</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span class="text-base font-medium">250+</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span class="text-base font-medium"
                        >Mebellar tanlovi</span
                      >
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <button
                      class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                    >
                      Faol
                    </button>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <!-- see -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="nextModal"
                        :isImage="true"
                        title="Ko'rish"
                        btnTextSubmit="Tahrirlash"
                      >
                        <template v-slot:body>
                          <div class="flex justify-start gap-12">
                            <div class="flex flex-col items-start gap-4">
                              <span class="font-medium text-lg flex-1"
                                >Cart sarlavhasi</span
                              >
                              <span class="font-medium text-lg flex-1"
                                >Cart matni</span
                              >
                              <span class="font-medium text-lg flex-1"
                                >Holati</span
                              >
                            </div>
                            <div class="flex flex-col items-start gap-4">
                              <span class="font-normal text-base flex-1"
                                >250+</span
                              >
                              <span class="font-normal text-base flex-1"
                                >Mebellar tanlovi</span
                              >
                              <span
                                class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                                >Faol</span
                              >
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                          >
                            <svg
                              class="w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- edit -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="submitEdit"
                        :isImage="true"
                        title="Tahrirlash"
                        subtitle="Sarlavha matnini tahrirlash"
                        btnTextSubmit="Saqlash"
                      >
                        <template v-slot:body>
                          <div class="space-y-5 pb-5">
                            <div class="space-y-3">
                              <p>Cart sarlavhasini kiriting</p>
                              <input
                                type="text"
                                placeholder=""
                                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                              />
                            </div>
                            <div class="space-y-3">
                              <p>Cart matnini kiriting</p>
                              <input
                                type="text"
                                placeholder=""
                                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                              />
                            </div>
                            <div class="space-y-3">
                              <p>Holati</p>
                              <label
                                class="relative inline-flex items-center mr-5 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  value=""
                                  class="sr-only peer"
                                  checked
                                />
                                <div
                                  class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                                ></div>
                                <span
                                  class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                  >Faol</span
                                >
                              </label>
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- delete -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="submitDelete"
                        :isImage="true"
                        title="O'chirish"
                        subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                        btnTextSubmit="O'chirish"
                        btnColorSubmit="bg-red-500"
                      >
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
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
    </div>

    <!--   qulayliklarni tahrirlash/-->
    <div class="mt-5 w-full">
      <div class="flex justify-between">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Qulayliklarni tahrirlash
        </h1>
        <Modal
          :activeModal="activeModal"
          @open="changeActive"
          @close="closeModal"
          @submit="submitAdd"
          :isImage="true"
          title="Yangi element qo'shish"
          subtitle=""
          btnTextSubmit="Saqlash"
        >
          <template v-slot:body>
            <div class="space-y-5 pb-5">
              <div class="space-y-3">
                <p>Cart sarlavhasini kiriting</p>
                <input
                  type="text"
                  placeholder=""
                  class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                />
              </div>
              <div class="space-y-3">
                <p>Cart matnini kiriting</p>
                <input
                  type="text"
                  placeholder=""
                  class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                />
              </div>
              <div class="space-y-3">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="file_input"
                  >Rasm yuklash</label
                >
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                />
                <p
                  class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <div class="space-y-3">
                <p>Holati</p>
                <label
                  class="relative inline-flex items-center mr-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    checked
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                  ></div>
                  <span
                    class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                    >Faol</span
                  >
                </label>
              </div>
            </div>
          </template>
          <template v-slot:button>
            <span
              class="bg-green-500 pb-1 px-4 rounded-md text-4xl text-green-50"
              >+</span
            >
          </template>
        </Modal>
      </div>
      <div class="overflow-x-auto dark:bg-gray-800">
        <div class="w-full">
          <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">Sarlavha</th>
                  <th class="py-3 px-6 text-left">Matni</th>
                  <th class="py-3 px-6 text-left">Rasm</th>
                  <th class="py-3 px-6 text-center">Holati</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-500">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span class="text-base font-medium"
                        >Bepul yetkazib berish</span
                      >
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span class="text-base font-medium"
                        >Bizda siz istagan mebelni yetkazib berish xizmati
                        mavjud</span
                      >
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <img src="@/assets/img/truck.png" alt="icon" />
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <button
                      class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                    >
                      Faol
                    </button>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <!-- see -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="nextModal"
                        :isImage="true"
                        title="Ko'rish"
                        btnTextSubmit="Tahrirlash"
                      >
                        <template v-slot:body>
                          <div class="flex justify-start gap-12">
                            <div class="flex flex-col items-start gap-8">
                              <span class="font-medium text-lg flex-1"
                                >Sarlavha</span
                              >
                              <span class="font-medium text-lg flex-1"
                                >Matn</span
                              >
                              <span class="font-medium text-lg flex-1"
                                >Rasm</span
                              >
                              <span class="font-medium text-lg flex-1"
                                >Holati</span
                              >
                            </div>
                            <div class="flex flex-col items-start gap-4">
                              <span class="font-normal text-base flex-1"
                                >Bepul yetkazib berish</span
                              >
                              <span class="font-normal text-base flex-1"
                                >Bizda siz istagan mebelni yetkazib berish
                                xizmati mavjud</span
                              >
                              <img src="@/assets/img/truck.png" alt="icon" />
                              <span
                                class="bg-green-200 text-green-700 py-1 px-4 rounded-full text-xs"
                                >Faol</span
                              >
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                          >
                            <svg
                              class="w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- edit -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="submitEdit"
                        :isImage="true"
                        title="Tahrirlash"
                        subtitle="Sarlavha matnini tahrirlash"
                        btnTextSubmit="Saqlash"
                      >
                        <template v-slot:body>
                          <div class="space-y-5 pb-5">
                            <div class="space-y-3">
                              <p>Cart sarlavhasini kiriting</p>
                              <input
                                type="text"
                                placeholder=""
                                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                              />
                            </div>
                            <div class="space-y-3">
                              <p>Cart matnini kiriting</p>
                              <input
                                type="text"
                                placeholder=""
                                class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                              />
                            </div>
                            <div class="space-y-3">
                              <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input"
                                >Rasm yuklash</label
                              >
                              <input
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help"
                                id="file_input"
                                type="file"
                              />
                              <p
                                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                id="file_input_help"
                              >
                                SVG, PNG, JPG or GIF (MAX. 800x400px).
                              </p>
                            </div>
                            <div class="space-y-3">
                              <p>Holati</p>
                              <label
                                class="relative inline-flex items-center mr-5 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  value=""
                                  class="sr-only peer"
                                  checked
                                />
                                <div
                                  class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
                                ></div>
                                <span
                                  class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                  >Faol</span
                                >
                              </label>
                            </div>
                          </div>
                        </template>
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </template>
                      </Modal>
                      <!-- delete -->
                      <Modal
                        :activeModal="activeModal"
                        @open="changeActive"
                        @close="closeModal"
                        @submit="submitDelete"
                        :isImage="true"
                        title="O'chirish"
                        subtitle="Siz haqiqatdan ham bu elementi o'chirishni xohlaysizmi"
                        btnTextSubmit="O'chirish"
                        btnColorSubmit="bg-red-500"
                      >
                        <template v-slot:button>
                          <div
                            class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
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
    </div>

    <!-- Saqlash/-->
    <div class="flex justify-end mb-4">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Saqlash
      </button>
    </div>
  </div>
</template>


<script setup>
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
import axios from "axios";

const token = "sizning_tokeningiz";

// API-ga so'rov yuborish uchun o'zgaruvchilar
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`, // Tokenni header-da berish
  },
  url: "https://api.example.com/data",
};

// So'rovni yuborish
axios(options)
  .then((response) => {
    // API javobini qaytaradi
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

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