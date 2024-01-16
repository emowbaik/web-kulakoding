<template>
    <div class="w-full h-full">
        <Navbar />
        <div class="flex justify-between p-2">
            <router-link :to="{ name:'dashboard' }" class="flex items-center gap-1 font-semibold">
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
                    <label for="">Project Picture :</label>
                    <div
                        class="relative flex flex-col border border-gray-300 focus:outline-none rounded-md items-center p-2 gap-5">
                        <input type="file" @change="previewProjectPicture" name="my-input"
                            class="text-gray-500 bg-gray-300 rounded-md" />
                        <div class="w-64 h-64 rounded-md">
                            <img v-if="projectPicturePreview" :src="projectPicturePreview" alt="Project Preview"
                                class="w-full h-full object-contain p-5" />
                        </div>
                    </div>
                </div>

                <!-- Description Creator -->
                <div class="flex gap-10">
                    <label for="">Description Project :</label>
                    <div class="relative flex flex-col gap-5">
                        <textarea name="my-input"
                            class="rounded-md h-24 py-2 w-[365px] border border-gray-300 text-gray-500 bg-transparent"
                            placeholder="Kasih Deskripsi BANG SATE " />
                    </div>
                </div>

                <!-- Tools -->
                <div class="flex gap-40">
                    <h2>Tools :</h2>
                    <div class="max-w-xl w-full px-2">
                        <label for="input-group-search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <MagnifyingGlassIcon class="w-5 text-gray-500 dark:text-gray-400" />
                            </div>
                            <input type="text" v-model="searchQuery" id="input-group-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Tools...">
                        </div>
                        <dl style="max-height: 200px; overflow-y: auto;" class="grid grid-cols-1 gap-2 my-2">
                            <div class="bg-white shadow-md rounded-md p-3" v-for="item in filteredTools" :key="item.id">
                                <div class="flex items-start w-full">
                                    <div class="flex items-center">
                                        <input id="checkbox-item-11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <img class="rounded-md w-16" :src="item.icon" alt="photo_wisata"
                                            loading="lazy" />
                                        <div>
                                            <h3
                                                class="ml-2 font-bold text-ellipsis whitespace-nowrap overflow-hidden w-44 text-slate-900 text-base">
                                                {{ item.icon }}
                                            </h3>
                                            <p
                                                class="ml-3 text-sm text-ellipsis whitespace-nowrap overflow-hidden text-slate-600 w-52">
                                                {{ item.name }}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </dl>
                    </div>
                </div>

                <div class="flex justify-end my-5">
                    <button type="submit"
                        class="inline-flex items-center font-semibold rounded-md border border-gray-300 bg-transparent dark:border-gray-600 hover:bg-slate-200 shadow p-2">
                        <PencilSquareIcon class="mr-2 h-4 w-4" aria-hidden="false" />
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
    import { ref, computed } from 'vue';
    const searchQuery = ref('');
    import {
        MagnifyingGlassIcon,
        LockClosedIcon,
        DocumentPlusIcon,
        ArrowLeftStartOnRectangleIcon,
        PencilSquareIcon,
        ArrowLeftIcon,
        HomeIcon,
        ChevronRightIcon,
    } from '@heroicons/vue/24/solid'
    import Navbar from '../../components/Navbar.vue'

    const Tools = [
        { id: 1, name: 'HTML', icon: '../../../src/assets/iconTools/html.svg' },
        { id: 2, name: 'Laptop', icon: '../../../src/assets/iconTools/css.svg' },
        { id: 3, name: 'a', icon: '../../../src/assets/iconTools/css.svg' },
        { id: 4, name: 'b', icon: '../../../src/assets/iconTools/css.svg' },
        { id: 5, name: 'c', icon: '../../../src/assets/iconTools/css.svg' },
        { id: 6, name: 'd', icon: '../../../src/assets/iconTools/css.svg' },
        { id: 7, name: 'e', icon: '../../../src/assets/iconTools/css.svg' },
        { id: 8, name: 'f', icon: '../../../src/assets/iconTools/css.svg' },
    ];

    const projectPicturePreview = ref(null);
    const creatorPicturePreview = ref(null);

    const previewProjectPicture = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                projectPicturePreview.value = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const previewCreatorPicture = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                creatorPicturePreview.value = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const filteredTools = computed(() => {
        return Tools.filter(item =>
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
</script>