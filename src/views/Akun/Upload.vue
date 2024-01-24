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
                                <span
                                    class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">user</span>
                            </div>
                        </a>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <ChevronRightIcon class="text-gray-700 dark:text-gray-400 w-[18px]" />
                            <span
                                class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">upload</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
        <h2 class="text-center font-bold text-2xl mb-10">Upload Project</h2>
        <div class="flex flex-col gap-5 mx-auto max-w-2xl items-start">
            <form @submit.prevent="create" class="flex flex-col gap-5" enctype="multipart/form-data">
                <!-- Project Picture -->
                <div class="flex gap-20">
                    <label for="picture">Project Picture :</label>
                    <div
                        class="relative flex flex-col border border-gray-300 focus:outline-none rounded-md items-center p-2 gap-5">
                        <input type="file" @change="previewProjectPicture" name="my-input" id="picture"
                            class="text-gray-500 bg-gray-300 rounded-md" accept=".png, .jpg, .jpeg" />
                        <div class="w-64 h-64 rounded-md">
                            <img v-if="projectPicturePreview" :src="projectPicturePreview" alt="Project Preview"
                                class="w-full h-full object-contain p-5" />
                        </div>
                    </div>
                </div>

                <!-- Description Creator -->
                <div class="flex gap-10">
                    <label for="deskripsi">Description Project :</label>
                    <div class="relative flex flex-col gap-5">
                        <textarea name="my-input" id="deskripsi"
                            class="h-24 py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Kasih Deskripsi BANG SATE " />
                    </div>
                </div>

                <!-- Tools -->
                <div class="flex gap-36">
                    <label for="tools">Tools :</label>
                    <div class="flex flex-col gap-2">
                        <input type="text" id="tools"
                            class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Design: Figma" />
                        <input type="text" id="tools"
                            class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Code Editor: VS Code" />
                        <input type="text" id="tools"
                            class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bahasa Pemrograman: Tailwind CSS, dan Vue.js" />
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
<script setup>
    import { ref } from "vue";
    import {
        PencilSquareIcon,
        ArrowLeftIcon,
        HomeIcon,
        ChevronRightIcon,
    } from "@heroicons/vue/24/solid";
    import Navbar from "../../components/Navbar.vue";
    import NavSidebar from "../../components/NavSidebar.vue";

    const Tools = [
        { id: 1, name: "HTML", icon: "../../../src/assets/iconTools/html.svg" },
        { id: 2, name: "Laptop", icon: "../../../src/assets/iconTools/css.svg" },
        { id: 3, name: "a", icon: "../../../src/assets/iconTools/css.svg" },
        { id: 4, name: "b", icon: "../../../src/assets/iconTools/css.svg" },
        { id: 5, name: "c", icon: "../../../src/assets/iconTools/css.svg" },
        { id: 6, name: "d", icon: "../../../src/assets/iconTools/css.svg" },
        { id: 7, name: "e", icon: "../../../src/assets/iconTools/css.svg" },
        { id: 8, name: "f", icon: "../../../src/assets/iconTools/css.svg" },
    ];

    const projectPicturePreview = ref(null);

    const previewProjectPicture = (event) => {
        const allowedExtensions = ["png", "jpg", "jpeg"];
        const file = event.target.files[0];

        // Validasi ekstensi file
        const extension = file.name.split(".").pop().toLowerCase();
        if (!allowedExtensions.includes(extension)) {
            alert("File harus berupa gambar dengan ekstensi PNG, JPG, atau JPEG.");
            event.target.value = "";
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                projectPicturePreview.value = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
</script>