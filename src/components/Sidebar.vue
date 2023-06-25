<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white dark:bg-gray-800" >
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
                <router-link to="/component/navigation"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Navigatsiya sahifasini tahrirlash
                </router-link>
                <router-link to="/component/bosh-sahifa"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Bosh sahifa tahrirlash
                </router-link>
                <router-link to="/component/photoshop-mavzulari"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Photoshop mazulari sahifasini tahrirlash
                </router-link>
                <router-link to="/component/Darslikdanfoydalanish"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Darslikdan foydalanish sahifasini tahrirlash
                </router-link>
                <router-link to="/component/Darslikdanfoydalanishimg"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Darslikdan foydalanish sahifasini tahrirlash rasmi
                </router-link>
                <router-link to="/component/bonus"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Bonuslar sahifasini tahrirlash
                </router-link>
                <router-link to="/component/bonus-img"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Bonuslar sahifasi rasmlar
                </router-link>
                <router-link to="/component/socials"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Ijtioiy tarmoqlar sahifasini tahrirlash
                </router-link>
                <router-link to="/component/comments"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  O`quvchilar fikri sahifasini tahrirlash
                </router-link>
                <router-link to="/component/videoPrice"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Video darslar narxlari sahifasini tahrirlash
                </router-link>
                <router-link to="/component/register"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Ro`yxatdan o`tish sahifasini tahrirlash
                </router-link>

              </template>
            </menu-accordion>
          </div>
          <!-- main page menues -->
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="gg:components" />
              </template>
              <template v-slot:title> Muallif haqida </template>
              <template v-slot:content>
                <router-link to="/author/about"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Asosiy qism
                </router-link>
                <router-link to="/author/images"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Rasmlar
                </router-link>
              </template>
            </menu-accordion>
          </div>

        </div>
      </div>
    </div>
    <pre>{{ items }}</pre>
  </nav>


</template>

<script setup>
import { Icon } from "@iconify/vue";
import MenuAccordion from "./MenuAccordion.vue";


</script>
