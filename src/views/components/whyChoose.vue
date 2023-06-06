<template>
    <div class="menus lg:h-screen h-auto px-6 py-3">
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <a href="#"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="#"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Components</a>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="#"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Breadcumb</a>
                    </div>
                </li>
            </ol>
        </nav>
        <!-- Title  -->
        <div class="mt-5 w-full">
            <div class="flex justify-between">
                <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
                    Nima uchun mijozlar bizni tanlashadi
                </h1>
                <Modal :isImage="true" title="Qo'shish" subtitle="Yangi cartni tahrirlash" btnTextSubmit="Saqlash"
                    btnText="Launch Modal form">
                    <template v-slot:body>
                        <div class="space-y-5 pb-5">
                            <div class="space-y-3">
                                <p>Cart nomi</p>
                                <input type="text" placeholder=""
                                    class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none" />
                            </div>
                            <div class="space-y-3">
                                <p>Cart ikonkasi</p>
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file"
                                        class="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                                </path>
                                            </svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold">Click to upload</span> or
                                                drag and drop
                                            </p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <p>Holati</p>
                                <label class="relative inline-flex items-center mr-5 cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked />
                                    <div
                                        class="w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600">
                                    </div>
                                    <span
                                        class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none">Faol</span>
                                </label>
                            </div>
                            <div>
                                <label for="message"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cart
                                    tavsifi</label>
                                <textarea id="message" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Cart tavsifini shu yerga yozing"></textarea>
                            </div>
                        </div>
                    </template>
                    <template v-slot:button>
                        <span class="bg-green-500 pb-1 px-4 rounded-md text-4xl text-green-50">+</span>
                    </template>
                </Modal>
            </div>
        </div>
        <!-- Sarlavhani tahrirlash -->
        <div>
            <div class="overflow-x-auto">
                <div class="w-full">
                    <div class="bg-white shadow-md rounded my-6 py-3 px-6">
                        <div>
                            <h1 class="text-xl text-gray-900 font-medium dark:text-gray-200">
                                Sarlavhani tahrirlash
                            </h1>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex-1 mt-4">
                                <label for="default-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sarlavhani
                                    kiriting</label>
                                <input type="text" id="default-input"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Bannerni tahrirlash -->
        <div class="overflow-x-auto dark:bg-gray-800">
            <div class="w-full">
                <div class="bg-white flex justify-start items-center dark:bg-gray-800 shadow-md rounded my-6 p-4">
                    <div class="image">
                        <img src="@/assets/img/whychoose1.png" alt="img" />
                    </div>
                    <div class="mt-4 md:mt-0 flex items-center justify-center w-full p-4">
                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-54 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                    </path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">Click to upload <br></span> or drag and
                                    drop
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
