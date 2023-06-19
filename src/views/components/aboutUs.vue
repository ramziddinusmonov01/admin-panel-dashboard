<template>
  <div>
    

  <div class="menus lg:h-screen h-auto px-6 py-3">
    <!-- breadcump /-->
    <breadcump :items="breadcrumbs"></breadcump>

    <!-- settingsn tahrirlash/-->
    <div class="overflow-x-auto dark:bg-gray-800">
      <div class="w-full">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">komponentalar</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <!-- amientities  tahrirlash/-->

              <!-- SARLAVHANI TAHRIRLASH -->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="title in amenities?.data" :key="title.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">{{ title.title }}</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">{{ title.title }}</span>
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
                            <p>Bosh sahifa sarlavhasini kiriting</p>
                            <input type="text" placeholder="" @input="headerTitleONe = $event.target.value" :value="title.title"
                              
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

              <!-- DESCRIPTION TAHRIRLASH -->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="desc in amenities?.data" :key="desc.id" >
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">{{ desc.subtitle }}</span>
                  </div>
                </td>

                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex items-center">
                            <span class="text-base font-medium">{{ desc.subtitle }}</span>
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
                            <p>Bosh sahifa sarlavhasini kiriting</p>
                            <input type="text" placeholder="" @input="headerTitleTwo = $event.target.value" :value="desc.subtitle"
                              
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

              <!-- MUALLIF  ISMINI TAHRIRLASH -->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="AuthorName in amenities?.data" :key="AuthorName.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">{{ AuthorName.name }}</span>
                  </div>
                </td>

                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex items-center">
                            <span class="text-base font-medium">{{ AuthorName.name }}</span>
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
                    <Modal :activeModal="activeModal" @submit="closeModal" @open="changeActive"
                      @close="closeModal" :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash"
                      btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Bosh sahifa muallif ismini tahrirlash</p>
                            <input type="text" placeholder="" @input="headerName = $event.target.value" :value="AuthorName.name"
                              
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

              <!-- HEADER LINKI TAHRIRLASH -->
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="link in amenities?.data" :key="link.id">
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span class="text-base font-medium">{{ link.free_course_link }}</span>
                  </div>
                </td>

                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex items-center">
                            <span class="text-base font-medium">{{link.free_course_link }}</span>
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
                    <Modal :activeModal="activeModal" @submit="closeModal" @open="changeActive"
                      @close="closeModal" :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash"
                      btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Bosh sahifa linkini tahrirlash</p>
                            <input type="text" placeholder="" @input="headerLink = $event.target.value" :value="link.free_course_link"
                             
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

        <!-- BOSH SAHIFA RASMINI TAHRIRLASH -->
        <h1 class="font-bold text-2xl mb-4">Bosh sahifa rasmini tahrirlash</h1>
        <div class="flex items-center justify-center w-full">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">komponentalar</th>
                <th class="py-3 px-6 text-left">Rasm</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
          

              <!-- HEADER FISRT IMAGE -->
              <tr v-for="firstImg in amenities?.data" :key="firstImg.id" >
                <td>
                  <h1 class="font-bold text-xl">Bosh sahifa birinchi rasmi</h1>
                </td>
                <td class="p-2">
                  <img class="w-48" :src="firstImg.first_img" alt="image" />
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <!-- see -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                      :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                      <template v-slot:body>
                        <div class="flex justify-start gap-12">
                          <div class="flex flex-col items-start gap-6">
                            <span class="font-medium text-lg flex-1">
                              <img :src="firstImg.first_img" alt="image">
                            </span>
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
                    <Modal :activeModal="activeModal" @submit="closeModal" @open="changeActive"
                      @close="closeModal" :isImage="true" title="Tahrirlash" subtitle="Bosh sahifa rasmini tahrirlash"
                      btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Bosh sahifa rasmini tahrirsh</p>
                            <div class="flex items-center justify-center w-full">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                              <input @change="editFirstImage($event)"  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
                            </div>
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
              <!-- HEADER SECONS IMAGE -->
              <tr v-for="headerSecondImg in amenities?.data" :key="headerSecondImg.id" >
                <td>
                  <h1 class="font-bold text-xl">Bosh sahifa ikkinchi rasmi</h1>
                </td>
                <td class="p-2">
                  <img class="w-48" :src="headerSecondImg.second_img" alt="image" />
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
                              <img :src="headerSecondImg.first_img" alt="image">
                            </span>
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
                    <!-- EDIT -->
                    <Modal :activeModal="activeModal" @submit="closeModal" @open="changeActive"
                      @close="closeModal" :isImage="true" title="Tahrirlash" subtitle="Bosh sahifa rasmini tahrirlash"
                      btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Bosh sahifa rasmini tahrirsh</p>
                            <div class="flex items-center justify-center w-full">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                              <input  @change="editSecondtImage($event)" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
                            </div>
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

              <!--HEADER MUALLIF RASMI  -->
              <tr v-for="headerAutherImg in amenities?.data" :key="headerAutherImg.id">
                <td>
                  <h1 class="font-bold text-xl">Bosh sahifa muallif rasmi</h1>
                </td>
                <td class="p-2">
                  <img class="w-48" :src="headerAutherImg.photo" alt="image" />
                </td>
                <td>
                  <div class="flex items-center justify-center">
                    <!-- SEE -->
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                         :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                         <template v-slot:body>
                           <div class="flex justify-start gap-12">
                             <div class="flex flex-col items-start gap-6">
                               <span class="font-medium text-lg flex-1">
                                 <img :src="headerAutherImg.photo" alt="image">
                               </span>
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
   
                    <!-- EDIT -->
                    <Modal :activeModal="activeModal" @submit="closeModal" @open="changeActive"
                         @close="closeModal" :isImage="true" title="Tahrirlash" subtitle="Bosh sahifa rasmini tahrirlash"
                         btnTextSubmit="Saqlash">
                         <template v-slot:body>
                           <div class="space-y-5 pb-5">
                             <div class="space-y-3">
                               <p>Bosh sahifa muallif rasmini tahrirlash</p>
                               <div class="flex items-center justify-center w-full">                           
                                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                  <input @change="editAuthorImg($event)" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
                               </div>
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

              <!-- VIEDO -->
              <tr v-for="headerVideo in amenities?.data" :key="headerVideo.id">
                <td>
                  <h1 class="font-bold text-xl">Bosh sahifa videosi</h1>
                </td>
                <td class="p-2">
                  <video class="w-48 h-48" :src="headerVideo.video_url" controls></video>
                </td>
                <td>
                  <div class="flex items-center justify-center">
                    <!-- SEE -->
                       <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="nextModal"
                        :isImage="true" title="Ko'rish" btnTextSubmit="Tahrirlash">
                        <template v-slot:body>
                          <div class="flex justify-start gap-12">
                            <div class="flex flex-col items-start gap-6">
                              <span class="font-medium text-lg flex-1">
                                <img :src="headerVideo.video_url" alt="image">
                              </span>
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
  
                      <!-- EDIT -->
                      <Modal :activeModal="activeModal" @submit="closeModal" @open="changeActive"
                        @close="closeModal" :isImage="true" title="Tahrirlash" subtitle="Bosh sahifa rasmini tahrirlash"
                        btnTextSubmit="Saqlash">
                        <template v-slot:body>
                          <div class="space-y-5 pb-5">
                            <div class="space-y-3">
                              <p>Bosh sahifa videosini tahrirlash</p>
                              <div class="flex items-center justify-center w-full">                                     
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                <input @change="editVideo($event)" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
                          </div>
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
            </thead>
          </table>
        </div>
      </div>


      <!-- Saqlash/-->
      <div class="flex justify-end mb-4">
        <button @click="sendEdit()" type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Saqlash
        </button>
      </div>
    </div>


    <div class="spinner" v-if="loading"></div>


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
  submitEditHeader,
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
let amenities = ref([])

async function getData() {
  fetch(adminUrl + "/header-section", {

  }).then(res => res.json()).then(data => {
    amenities.value = data;
    loading.value = false
  })
}


getData()
const headerTitleONe = ref("")
const headerTitleTwo = ref("")
const headerName = ref("")
const headerLink = ref("")
const headerFirstImg = ref("");
const headerSecondImg = ref("");
const headerAuthorImg  = ref("");
const headerVideo = ref("");
const loading = ref(true);

function editFirstImage(event) {
  headerFirstImg.value = event.target.files[0];
  console.log(event.target.files[0]);
}
function editSecondtImage(event) {
  headerSecondImg.value = event.target.files[0];
  console.log(headerSecondImg.value);
}
function editAuthorImg(event){
  headerAuthorImg.value = event.target.files[0]
  console.log(headerAuthorImg.value)
}

function editVideo(event) {
  headerVideo.value = event.target.files[0];
  console.log(headerVideo.value);
}


async function sendEdit() {
  let formdata = new FormData();
  formdata.append("title", headerTitleONe.value);
  formdata.append("subtitle", headerTitleTwo.value);
  formdata.append("name", headerName.value);
  formdata.append("free_course_link", headerLink.value);
  formdata.append("first_img", headerFirstImg.value);
  formdata.append("second_img", headerSecondImg.value);
  formdata.append("photo", headerAuthorImg.value);
  formdata.append("video_url", headerVideo.value);

  submitEdit( adminUrl + "/header-section/update?id=1", formdata);
  getData();
}






</script>

<style scoped>
.spinner {
 width: 56px;
 height: 56px;
 margin: 0 auto;
 border-radius: 50%;
 color: #004dff;
 background: linear-gradient(currentColor 0 0) center/100% 4px,
          linear-gradient(currentColor 0 0) center/4px 100%,
          radial-gradient(farthest-side,#0000 calc(100% - 7px),currentColor calc(100% - 6px)),
          radial-gradient(circle 7px,currentColor 94%,#0000 0);
 background-repeat: no-repeat;
 animation: spinner-mu2ebf 1s infinite linear;
 position: relative;
}

.spinner::before {
 content: "";
 position: absolute;
 inset: 0;
 border-radius: inherit;
 background: inherit;
 transform: rotate(45deg);
}

@keyframes spinner-mu2ebf {
 to {
  transform: rotate(.5turn);
 }
}


/* DELETE */
.circ {
  backface-visibility: hidden;
  margin: 60px auto;
  width: 180px;
  height: 180px;
  border-radius: 0px 0px 50px 50px;
  position: relative;
  z-index: -1;
  left: 0%;
  top: 5%;
  overflow: hidden;
}

.hands {
  margin-top: 140px;
  width: 120px;
  height: 120px;
  position: absolute;
  background-color: #111;
  border-radius: 20px;
  box-shadow: -1px -4px 0px 0px rgba(240,220,220,1);
  transform: rotate(45deg);
  top: 75%;
  left: 16%;
  z-index: 1;
  animation: bodyAnim 1.5s infinite alternate;
  animation-timing-function: ease-out;
}

.load {
  position: absolute;
  width: 7ch;
  height: 32px;
  text-align: left;
  line-height: 32px;
  margin: -10px auto;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 28px;
  font-weight: 400;
  color: rgb(155, 152, 152);
  left: 2%;
  top: 5%;
  animation: fontAnim 3.75s infinite;
  animation-timing-function: ease-out;
  word-wrap: break-word;
  display: block;
  overflow: hidden;
}

@keyframes fontAnim {
  0% {
    width: 7ch;
  }

  16% {
    width: 8ch;
  }

  32% {
    width: 9ch;
  }

  48% {
    width: 10ch;
  }

  64% {
    width: 11ch;
  }

  80% {
    width: 12ch;
  }

  100% {
    width: 13ch;
  }
}</style>
