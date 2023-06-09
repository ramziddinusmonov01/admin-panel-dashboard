<template>
  <div class="w-full h-screen">
    <div class="flex shadow bg-waves rounded-md h-screen">
      <div class="bg-white dark:bg-gray-900 w-full">
        <form @submit.prevent="registerUser">
          <div class="form-body max-w-xl mx-auto lg:p-20 p-8 lg:mt-10 mt-5 space-y-8">
            <div class="space-y-3">
              <h2 class="dark:text-white font-semibold text-gray-800 text-4xl">
                Create new account?
              </h2>
            </div>
            <div class="space-y-5">
              <div class="relative z-0 w-full mb-6 group">
                <input v-model="name" type="text" name="floating_text"
                  class="inputName block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" " required />
                <label for="floating_text"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input v-model="username" type="text" name="username"
                  class="inputUserName block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" " required />
                <label for="username"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  User name</label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input v-model="newpassword" type="password" name="floating_password" id="floating_password"
                  class="inputNewPassword block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" " required />
                <label for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Create
                  new password</label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input v-model="coniformpassword" type="password" name="floating_password" id="floating_password"
                  class="inputConiformPassword block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" " required />
                <label for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm
                  password</label>
              </div>
              <div v-show="inCorrect" class="incorrect text-red-500 text-sm dark:text-white">
                Parollar mos kelmayapti
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" autocomplete="off"
                    class="accent-primary focus:ring-4 cursor-pointer w-4 h-4 border border-gray-300 rounded dark:bg-gray-700 bg-gray-50 focus:ring-3 focus:ring-primary/30" />
                </div>
                <label for="remember" class="ml-2 text-sm cursor-pointer font-normal dark:text-white text-gray-500">I
                  accept term of service
                </label>
              </div>
            </div>

            <button class="registerBtn text-white bg-primary hover:bg-primary/80 p-3 w-full rounded-md">
              Submit, and Register
            </button>
            <p class="dark:text-white text-center text-gray-700">
              Already have an account?<button type="button" @click="$router.push('/auth/login')"
                class="ml-2 text-primary">
                Login here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");
const username = ref("");
const newpassword = ref("");
const coniformpassword = ref("");
const inCorrect = ref(false);
function registerUser() {
  if (newpassword.value !== coniformpassword.value) {
    inCorrect.value = true;
    let incorrect = document.querySelector(".incorrect");
    incorrect.classList.add("show");
    setTimeout(() => {
      incorrect.classList.remove("show");
    }, "1000");
  } else {
    fetch("http://fazl.karimjonov.uz/api/admin/register", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        user_name: username.value,
        password: coniformpassword.value,
        password: newpassword.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        window.location.href = "/auth/login ";
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        alert("Ro'yxatdan o'tishda xatolik yuz berdi.");
      });

  }
}
</script>

<style>
.incorrect.show {
  animation-name: shake;
  animation-duration: 0.7s, 0.35s;
  animation-iteration-count: 1, 2;
}

@keyframes shake {

  0%,
  20%,
  40%,
  60%,
  80% {
    transform: translateX(8px);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-8px);
  }
}
</style>
