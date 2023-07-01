<template>
    <div>
        <!-- {{ tranlateManeger?.data?.shift() }} -->
        <table class="min-w-max w-full table-auto">
            <thead>
                <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-left">Komponent nomlari</th>
                    <th class="py-3 px-6 text-left">Komponentalar</th>
                    <th class="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-500" v-for="item in tranlateManeger?.data" :key="item.id">
                    <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                            <span class="text-base font-medium text-black">Komponent nomi</span>
                        </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                            <span class="text-base font-medium text-black">{{ item.translation.uz }}</span>
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
                            <span class="font-medium text-lg flex-1">{{ item.translation.uz }}</span>
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
                    <Modal :activeModal="activeModal" @open="changeActive" @close="closeModal" @submit="sendEdit(item)"  
                      :isImage="true" title="Tahrirlash" subtitle="Joylashuvni tahrirlash" btnTextSubmit="Saqlash">
                      <template v-slot:body>
                        <div class="space-y-5 pb-5">
                          <div class="space-y-3">
                            <p>Birinchi sarlavhani kiriting</p>
                            <input type="text" placeholder="" @input="title = $event.target.value" :value="item.translation.uz"
                              class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                          </div>
                         
                          
                        </div>
                      </template>
                      <template v-slot:button>
                        <div class="w-8 h-8 flex items-cenyet justify-center border-2 border-green-500 rounded mr-2 transform hover:text-green-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20px">
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
        <div class="spinner" v-if="loading"></div>
    </div>
</template>

<script setup>
import { ref, warn } from "vue";
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
const breadcrumbs = [
    {
        label: "Sahifalarni tahrirlash",
        url: "/",
    },
    {
        label: "Translate maneger",
        url: "header",
    },
];
let adminUrl = "https://superphotoshop.uz/api/dashboard";
const tranlateManeger = ref("");
const loading = ref(true)

async function getdata() {
    const token = localStorage.getItem('token')
    const res = await fetch(adminUrl + "/source-message/index", {
        method: 'POST',
        headers: {
            'Content-type': 'aplication/json',
            'Authorization': `Bearer ${token}`
        }

    })
    tranlateManeger.value = await res.json()
    loading.value = false

    console.log(tranlateManeger.value);
}
getdata()

const title = ref("");

async function sendEdit(item){
  let id = item.id;
  let formdata = new FormData;
  formdata.append('languages[uz]', title.value);


 await  submitEdit( adminUrl + "/source-message/update?id=" + id, formdata);
 await getdata()

}


</script>

<style lang="scss" scoped></style>