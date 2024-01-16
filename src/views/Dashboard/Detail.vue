<template>
    <div class="w-full h-full overflow-hidden">
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
                        <div class="flex items-center">
                            <ChevronRightIcon class="text-gray-700 dark:text-gray-400 w-[18px]" />
                            <span
                                class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">detail</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
        <div class="flex justify-between">
            <div class="text-center mx-auto">
                <div class="m-5">
                    <img src="../../assets/img/work-2.png" alt="foto_project"
                        class="max-w-full h-auto mx-auto object-contain rounded-md shadow">
                </div>
                <p v-show="showAbout" class="text-base font-medium text-center mx-10 max-w-[800px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, beatae odit? Accusantium
                    omnis, commodi mollitia quam iste totam! Iure quam tempore itaque nam exercitationem reprehenderit
                    enim! Ipsum excepturi omnis similique magnam tempora libero est labore nostrum accusamus tenetur
                    doloremque laboriosam natus incidunt molestias maxime ad consequatur, ea quia sapiente? Nobis!
                </p>
                <div v-show="showTools" class="flex gap-5 mx-40">
                    <div v-for="item in Tools" :key="item.id" class="mx-auto">
                        <img :src="item.image" class="w-20 lg:w-20 object-cover rounded-md" alt="tools">
                        <h2 class="text-center text-sm">{{ item.name }}</h2>
                    </div>
                </div>
            </div>
            <div class="text-center my-10">
                <div class="flex flex-col gap-5 bg-slate-300 dark:bg-[#D9D9D9] shadow rounded-md mx-5 py-10">
                    <img src="../../assets/img/Profile.png" alt="foto_project"
                        class="w-[70%] h-auto lg:w-[50%] lg:h-[50%] mx-auto bg-center bg-cover bg-no-repeat p-2">
                    <p class="font-bold text-lg dark:text-black">Profile pembuat project</p>
                </div>
                <div class="flex flex-col gap-5 mx-24 my-10">
                    <button @click="toggleContent('about')"
                        class="py-2 px-5 rounded-full shadow bg-[#FF9900] dark:bg-[#5B246A]">About</button>
                    <button @click="toggleContent('tools')"
                        class="py-2 px-5 rounded-full shadow bg-[#FFCC69] dark:bg-[#9E64AD]">Tools</button>
                </div>
            </div>
        </div>
        <Footer class="mt-20" />
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue'
    import {
        EnvelopeIcon,
        LockClosedIcon,
        DocumentPlusIcon,
        ArrowLeftStartOnRectangleIcon,
        PencilSquareIcon,
        ArrowLeftIcon,
        HomeIcon,
        ChevronRightIcon,
    } from '@heroicons/vue/24/solid'
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    
    const showAbout = ref(true);
    const showTools = ref(false);
    
    const toggleContent = (content) => {
        if (content === 'about') {
            showAbout.value = true;
            showTools.value = false;
        } else if (content === 'tools') {
            showAbout.value = false;
            showTools.value = true;
        }
    };
    
    const Tools = [
        { id: 1, name: 'VS CODE', image: '../../../src/assets/img/vscode.png' },
        { id: 2, name: 'FIGMA', image: '../../../src/assets/img/figma.png' },
        { id: 3, name: 'LAPTOP', image: '../../../src/assets/img/laptop.jpg' },
    ];
    
    onMounted(() => {
        scrollToTop();
    });
    
    function scrollToTop() {
        window.scrollTo(0, 0);
    }
    </script>
    