<template>
  <div class="dashboard p-4">
    <h1 class="text-4xl">Admin oynasi</h1>
    <p class="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque atque corrupti earum? Quia tempore
      temporibus perferendis quo quaerat architecto fugiat, quidem mollitia rem. Expedita repudiandae eum enim fuga ipsum
      reiciendis sequi labore, doloribus amet? Expedita iusto consequuntur eaque quod illo ab maiores velit voluptas
      commodi dignissimos labore numquam est porro eius sunt optio excepturi, sint nemo aliquid voluptatem? Dignissimos
      consequuntur odit natus cumque, deleniti beatae quod ducimus ratione, error soluta vel facilis laborum aliquam
      dolore asperiores consequatur tempora! Accusamus eveniet quas porro iure harum vel voluptates modi, at rerum
      temporibus eius quidem repellendus alias mollitia a! Debitis porro consectetur magni.</p>
</div></template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter()
const adminUrl = "https://superphotoshop.uz/api/dashboard";
let items = ref();
const loading = ref(true);

async function getData() {
  const token = localStorage.getItem('token');
  const res = await fetch(adminUrl + "/navbar-category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${token}`
    },
  });
  const req = await res.json();
  items.value = req;
  if (res.status === 401) {
    router.push('/auth/login');
  }
  
  loading.value = false;
}
getData()

</script>
