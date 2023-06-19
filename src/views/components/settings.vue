<template>
  <div class="menus lg:h-screen h-auto px-6 py-3">
    <!-- breadcump /-->
    <breadcump :items="breadcrumbs"></breadcump>

    <!-- title /-->
    <div class="mt-5 w-full">
      <div class="flex justify-between">
        <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
          Settings
        </h1>
      </div>
    </div>
    <div></div>
    <!-- settingsn tahrirlash/-->
    <div class="overflow-x-auto dark:bg-gray-800">
      <div class="w-full">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">komponentalar</th>
                <th class="py-3 px-6 text-center">qiymati</th>
                <th class="py-3 px-6 text-center">Boshqarish</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <!-- joylashuvni tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="setting in settings?.data" :key="setting.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Joylashuvni tahrirlash</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span class="text-base font-medium">{{ setting.location_uz }}</span>
                </td>
                <td class="py-3 px-6 text-right">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">Joylashuv uz</span>
                            <span class="font-medium text-lg flex-1">Joylashuv ru</span>
                            <span class="font-medium text-lg flex-1">Joylashuv en</span>
                            <span class="font-medium text-lg flex-1">Rasm</span>
                            <span class="font-medium text-lg flex-1">Holati</span>
                          </div>
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-normal text-base flex-1">{{ setting.location_uz }}</span>
                            <span class="font-normal text-base flex-1">{{ setting.location_ru }}</span>
                            <span class="font-normal text-base flex-1">{{ setting.location_en }}</span>
                            <img :src="setting.location_image" alt="img">
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
                    <Modal :activeModal="activeModal" @submit="closeModal" @open="changeActive" @close="closeModal"
                      :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Yangi Joylashuvni kiriting uz</p>
                            <input type="text" placeholder="" :value="location_uz"
                              @input="location_uz = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Yangi Joylashuvni kiriting ru</p>
                            <input type="text" placeholder="" :value="location_ru"
                              @input="location_ru = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>Yangi Joylashuvni kiriting en</p>
                            <input type="text" placeholder="" :value="location_en"
                              @input="location_en = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">location logo yuklash</label>
                            <input @input="location_img = $event.target.files[0]"
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                              SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
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
                  </div>
                </td>
              </tr>
              <!-- ish vaqtini tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="setting in settings?.data" :key="setting.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Ish vaqtimiz</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span class="text-base font-medium">{{ setting.working_time_start }} - {{ setting.working_time_end }}
                  </span>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">Ish vaqti start</span>
                            <span class="font-medium text-lg flex-1">Ish vaqti end</span>
                            <span class="font-medium text-lg flex-1">rasmi</span>
                            <span class="font-medium text-lg flex-1">Holati</span>
                          </div>
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-normal text-base flex-1">{{ setting.working_time_start }}</span>
                            <span class="font-normal text-base flex-1">{{ setting.working_time_end }}</span>
                            <img :src="setting.working_time_image" alt="img">
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="closeModal"
                      :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>start ish vaqtini kiriting</p>
                            <input type="text" placeholder="" :value="work_start"
                              @input="work_start = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <p>end ish vaqtini kiriting</p>
                            <input type="text" placeholder="" :value="work_end" @input="work_end = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">rasm yuklang</label>
                            <input @change="workTime = $event.target.files[0]"
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                              SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
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
                  </div>
                </td>
              </tr>
              <!-- qo'ngiroq tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="setting in settings?.data" :key="setting.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Qo'ng'iroq qiling</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span class="text-base font-medium">{{ setting.phone }} </span>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">Telefon raqam</span>
                            <span class="font-medium text-lg flex-1">rasm</span>
                            <span class="font-medium text-lg flex-1">Holati</span>
                          </div>
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-normal text-base flex-1">{{ setting.phone }}</span>
                            <img :src="setting.phone_image" alt="img">
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="closeModal"
                      :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Yangi telefon raqamni kiriting</p>
                            <input type="text" placeholder="" :value="phone" @input="phone = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                          <div class="space-y-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">rasm yuklang</label>
                            <input @change="phoneImg = $event.target.files[0]"
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                              SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
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
                  </div>
                </td>
              </tr>
              <!-- logo header tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="setting in settings?.data" :key="setting.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Logo Header</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center w-4">
                  <img :src="setting.logo_header" alt="">
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
                            <img :src="setting.logo_header" alt="img">
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="closeModal"
                      :isImage="true" title="Tahrirlash" subtitle="Header Logoni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">rasm yuklang</label>
                            <input @change="logoHeader = $event.target.files[0]"
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                              SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
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
                  </div>
                </td>
              </tr>
              <!-- logo footer tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="setting in settings?.data" :key="setting.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Logo Footer</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center w-4">
                  <img :src="setting.logo_footer" alt="">
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
                            <img :src="setting.logo_footer" alt="img">
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="closeModal"
                      :isImage="true" title="Tahrirlash" subtitle="Header Logoni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">rasm yuklang</label>
                            <input @change="footerLogo = $event.target.files[0]"
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                              SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
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
                  </div>
                </td>
              </tr>
              <!--Projected tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="setting in settings?.data" :key="setting.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">projected tahrirlash</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span class="text-base font-medium">{{ setting.projected }} </span>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">avtor</span>
                          </div>
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-normal text-base flex-1">{{ setting.projected }}</span>
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="closeModal"
                      :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>avtorni</p>
                            <input type="text" placeholder="" :value="projected" @input="projected = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
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
                  </div>
                </td>
              </tr>
              <!--map   tahrirlash/-->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="setting in settings?.data" :key="setting.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">Xaritani tahrirlash</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span class="text-base font-medium">{{ setting.map }} </span>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">Map</span>
                          </div>
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-normal text-base flex-1">{{ setting.map }}</span>
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="closeModal"
                      :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>avtorni</p>
                            <input type="text" placeholder="" :value="map" @input="map = $event.target.value"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
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
      <button type="button" @click="sendEdit()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Serverga Yuklash
      </button>
    </div>
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
} from "@/helper/active-modal";

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

let adminUrl = "https://superphotoshop.uz/api/dashboard"
let settings = ref([])
const token = localStorage.getItem('token')

async function getData() {
  fetch(adminUrl + "/settings", {
    headers: {
      "token": token
    }
  }).then(res => res.json()).then(data => {
    settings.value = data
  })
}

getData()

const location_uz = ref('')
const location_ru = ref('')
const location_en = ref('')
const work_start = ref('')
const work_end = ref('')
const phone = ref('')
const projected = ref('')
const map = ref('')
const location_img = ref('')
const edit_status = ref(true)
const footerLogo = ref('')
const logoHeader = ref('')
const phoneImg = ref('')
const workTime = ref('')

async function sendEdit() {
  let formdata = new FormData()
  formdata.append('location_uz', location_uz.value);
  formdata.append('location_ru', location_ru.value);
  formdata.append('location_en', location_en.value);
  formdata.append('working_time_start', work_start.value);
  formdata.append('working_time_end', work_end.value);
  formdata.append('phone', phone.value);
  formdata.append('projected', projected.value);
  formdata.append('map', map.value);
  formdata.append('logo_footer', footerLogo.value);
  formdata.append('logo_header', logoHeader.value);
  formdata.append('phone_image', phoneImg.value);
  formdata.append('location_image', location_img.value);
  formdata.append('woorking_time_image', workTime.value);
  // const locImg = document.getElementById('file_input'
  console.log(location_uz.value);
  await submitEdit(formdata)
  await getData()
}

</script>

<style scoped></style>
