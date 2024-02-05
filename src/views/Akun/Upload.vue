<script setup>
  import { reactive } from "vue";
  import {
    PencilSquareIcon,
    ArrowLeftIcon,
    HomeIcon,
    ChevronRightIcon,
  } from "@heroicons/vue/24/solid";
  import useProject from "../../services/project/index";
  import Navbar from "../../components/Navbar.vue";
  import NavSidebar from "../../components/NavSidebar.vue";

  const payload = reactive({
    preview: [],
    image: [],
    nama_project: "",
    deskripsi: "",
    tools: "",
  });

  const image = [];
  const { StoreProject } = useProject();

  const getImage = ($event) => {
    const file = $event.target.files;

    payload.image = Array.from(file);
    const gambar = Array.from(file);
    console.log(file);
    console.log(gambar);

    for (let i = 0; i < payload.image.length; i++) {
      const files = payload.image[i];
      const url = URL.createObjectURL(files);
      console.log(url);

      payload.preview.push(url);
      console.log(files);
      console.log(payload.preview);
    }
  };

  const click = (params) => {
    const index = payload.preview.indexOf(params);
    console.log("clicked");
    console.log(index);
    console.log(payload.preview);
    if (index !== -1) {
      payload.preview.splice(index, 1);
      payload.image.splice(index, 1);
      console.log(payload.preview);
    }
    console.log(params);
  };

  async function Upload() {
    const formData = new FormData();
    formData.append("nama_project", payload.nama_project);
    formData.append("deskripsi", payload.deskripsi);
    formData.append("tools", payload.tools);
    for (let i = 0; i < payload.image.length; i++) {
      formData.append("image[]", payload.image[i]);
    }
    console.log(payload.tools);
    console.log(payload);
    console.log(formData.value);
    await StoreProject(formData);
    console.log(payload.image);
  }
</script>
<template>
  <div class="w-full h-full">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <div class="flex justify-between p-2">
      <router-link :to="{ name: 'user' }" class="flex items-center gap-1 font-semibold">
        <ArrowLeftIcon class="w-5" />
        Back
      </router-link>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a href="/dashboard"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <HomeIcon class="text-gray-700 dark:text-gray-400 w-4 mr-1" />
              Home
            </a>
          </li>
          <li aria-current="page">
            <a href="/user">
              <div class="flex items-center">
                <ChevronRightIcon class="text-gray-700 dark:text-gray-400 w-[18px]" />
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">user</span>
              </div>
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <ChevronRightIcon class="text-gray-700 dark:text-gray-400 w-[18px]" />
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">upload</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <h2 class="text-center font-bold text-2xl mb-10">Upload Project</h2>
    <div class="flex flex-col gap-5 mx-auto max-w-2xl items-start">
      <form @submit.prevent="Upload" class="flex flex-col gap-5" enctype="multipart/form-data">
        <!-- Project Picture -->
        <div class="flex gap-16 col-span-6 sm:col-span-6">
          <label for="picture" class="text-nowrap">Project Picture :</label>
          <div
            class="relative flex flex-col border border-gray-300 focus:outline-none rounded-md items-center p-2 gap-5">
            <div class="flex px-4 py-4 my-2 rounded-md items-center text-sm bg-yellow-300 text-slate-900">
              Pastikan gambar menggunakan Warna dan informasi yang jelas.
            </div>
            <input type="file" id="image" name="image[]" @change="getImage($event)" multiple
              class="text-gray-500 bg-gray-300 rounded-md" accept=".png, .jpg, .jpeg" />
            <div class="flex items-center">
              <div v-if="payload.preview" class="flex flex-wrap w-full bg-slate-200 rounded-md p-5 gap-5">
                <div class="relative" v-for="(item, index) in payload.preview" :key="index">
                  <button
                    class="bg-primary relative top-2 right-5 w-7 font-bold h-7 rounded-full text-white flex justify-center items-center"
                    @click="click(item)">
                    X
                  </button>
                  <img class="w-full border border-black flex mx-auto" :src="item" alt="" v-if="payload.preview" />
                  <!-- <div class="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div class="absolute flex py-2 px-5 bg-slate-500 justify-center">Decy Alam Santoso</div>
                  </div> -->
                </div>
              </div>
              <div v-else class="mx-auto">
                <div v-if="payload.image" class="">
                  <img v-for="(index, item) in payload.preview" :key="index" class="w-full border flex mx-auto" :src="item"
                    :alt="item" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Name -->
        <div class="flex gap-[70px]">
          <label for="deskripsi">Nama Project :</label>
          <div class="relative flex flex-col gap-5">
            <input v-model="payload.nama_project" name="my-input" id="deskripsi"
              class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Nama Project" />
          </div>
        </div>

        <!-- Description Creator -->
        <div class="flex gap-[30px]">
          <label for="deskripsi">Description Project :</label>
          <div class="relative flex flex-col gap-5">
            <textarea v-model="payload.deskripsi" name="my-input" id="deskripsi"
              class="h-24 py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Deskripsi" />
          </div>
        </div>

        <!-- Tools -->
        <div class="flex gap-[140px]">
          <label for="tools">Tools :</label>
          <div class="flex flex-col gap-2">
            <textarea v-model="payload.tools" name="tools" id="tools"
              class="h-24 py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder=" 'Design: Figma\nCode Editor: VS Code\nBahasa Pemrograman: Tailwind CSS, dan Vue.js'" />
          </div>
        </div>

        <div class="flex justify-end my-5">
          <button type="submit"
            class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2">
            <PencilSquareIcon class="h-4 w-4" aria-hidden="false" />
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>