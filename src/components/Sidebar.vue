<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white dark:bg-gray-800">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <router-link to="/" exact class="flex">
        <img class=" mx-auto" src="@/assets/logo/logo.svg" alt="logo" />
      </router-link>
      <!-- <button class="lg:hidden block dark:text-gray-400 float-right -mt-7" @click="$emit('sidebarToggle')">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25px" height="25px"
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
          <path fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
        </svg>
      </button> -->
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 divide-y dark:divide-gray-700">
      <div class="pb-0">
        <div class="wrap-item  dark:text-gray-500">
          <div class="item">
            <router-link to="/" exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
              <span class="mr-3 text-xl">
                <Icon icon="mdi:home" />
              </span>
              <span class="w-full"> Admin Oynasi </span>
            </router-link>
          </div>
          <!-- main page menues -->
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="gg:components" />
              </template>
              <template v-slot:title> Safihalarni tahrirlash </template>
              <template v-slot:content>
                <router-link to="/component/header"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Bosh sahifa
                </router-link>
                <router-link to="/component/aboutUs"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Biz haqimizda
                </router-link>
                <router-link to="/component/assortiment"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Assortiment
                </router-link>
                <router-link to="/component/buyurtmaBerish"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Buyurtma berish
                </router-link>
                <router-link to="/component/whyChoose"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Nima uchun bizni tanlashadi
                </router-link>
                <router-link to="/component/works"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Biz qilgan ishlar
                </router-link>
                <router-link to="/component/comments"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Mijozlarimiz fikri
                </router-link>
                <router-link to="/component/author-course"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Bepul maslahat olish
                </router-link>
                <router-link to="/component/author-features"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Mijozlarimiz ichida
                </router-link>
                <router-link to="/component/payment"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Footer qismi
                </router-link>
              </template>
            </menu-accordion>
          </div>
          <!-- ad's -->
          <!-- after complete course -->
          <div class="item mt-3">
            <div class="item mt-3">
            <router-link to="/component/after-course"
              class="w-full text-left block rounded-md p-3  hover:bg-gray-200 dark:hover:bg-gray-700">
              <div class="flex gap-4 ">
                <Icon icon="gg:components" />
                Ranglar
              </div>
            </router-link>
          </div>
          </div>
          <!-- faq -->
          <div class="item mt-3">
            <router-link to="/component/module-topics"
              class="w-full text-left block rounded-md p-3 mt-3 hover:bg-gray-200 dark:hover:bg-gray-700">
              <div class="flex gap-4 ">
                <Icon icon="gg:components" />
                Tugmalar
              </div>
            </router-link>
          </div>
          <div class="item mt-3">
            <router-link to="/component/modules"
              class="w-full text-left block rounded-md p-3  hover:bg-gray-200 dark:hover:bg-gray-700">
              <div class="flex gap-4 ">
                <Icon icon="gg:components" />
                Chat
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import MenuAccordion from "./MenuAccordion.vue";

</script>
