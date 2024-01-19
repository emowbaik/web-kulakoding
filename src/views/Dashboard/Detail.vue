<template>
    <div class="w-full h-full overflow-hidden">
        <Navbar class="hidden lg:block" />
        <NavSidebar class="lg:hidden" />
        <!-- Start BreadCrumb -->
        <div class="flex justify-between p-2">
            <router-link :to="{ name: 'dashboard' }" class="flex items-center gap-1 font-semibold mb-4 lg:mb-0">
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
        <!-- End BreadCrumb -->

        <div class="flex flex-col lg:flex-row justify-between">
            <div class="text-center mx-auto lg:w-1/2">
                <div class="m-5">
                    <img src="../../assets/img/project1.jpg" alt="foto_project"
                        class="max-w-full h-auto mx-auto object-contain rounded-md shadow" />
                </div>
                <p v-show="showAbout" class="hidden lg:block text-base font-medium text-center mx-5 max-w-[800px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
                    beatae odit? Accusantium omnis, commodi mollitia quam iste totam! Iure
                    quam tempore itaque nam exercitationem reprehenderit enim! Ipsum
                    excepturi omnis similique magnam tempora libero est labore nostrum
                    accusamus tenetur doloremque laboriosam natus incidunt molestias
                    maxime ad consequatur, ea quia sapiente? Nobis!
                </p>
                <div v-show="showTools" class="hidden lg:block gap-5 mx-5">
                    <div class="flex flex-col mx-auto">
                        <p class="text-left text-sm">
                            Design: Figma<br />Editor Code: VS Code<br />Bahasa Pemrograman:
                            HTML, Tailwind CSS, dan Vue.js
                        </p>
                    </div>
                </div>
            </div>
            <!-- Start Profile -->
            <div class="hidden lg:block text-center mt-20">
                <div class="flex flex-col gap-5 bg-slate-300 dark:bg-[#D9D9D9] shadow rounded-md mx-5 py-10">
                    <img src="../../assets/img/Profile.png" alt="foto_project"
                        class="w-[70%] h-auto lg:w-[50%] lg:h-[50%] mx-auto bg-center bg-cover bg-no-repeat p-2" />
                    <p class="font-bold text-lg dark:text-black">
                        Decy Alam Santoso<br />XII PPLG B
                    </p>
                </div>
                <div class="flex flex-col justify-center lg:flex-row lg:gap-5 my-10">
                    <button @click="toggleContent('about')" :class="{
              'bg-transparent dark:bg-transparent': showTools,
              'bg-slate-300 dark:bg-slate-900': !showTools,
            }" class="py-2 px-5 rounded-full font-normal shadow border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 mb-4 lg:mb-0">
                        About
                    </button>
                    <button @click="toggleContent('tools')" :class="{
              'bg-transparent dark:bg-transparent': showAbout,
              'bg-slate-300 dark:bg-slate-900': !showAbout,
            }" class="py-2 px-5 rounded-full font-normal shadow border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400">
                        Tools
                    </button>
                </div>
            </div>
            <div class="lg:hidden text-center">
                <span class="flex mx-5 gap-5 items-center">
                    <div class="bg-slate-300 dark:bg-[#D9D9D9] shadow rounded-lg">
                        <img src="../../assets/img/Profile.png" alt="foto_project"
                            class="w-32 bg-center bg-cover bg-no-repeat p-2" />
                    </div>
                    <p class="font-bold text-lg dark:text-white">
                        Decy Alam Santoso<br />XII PPLG B
                    </p>
                </span>
                <div class="flex justify-center my-10 gap-5">
                    <button @click="toggleContent('about')" :class="{
              'bg-transparent dark:bg-transparent': showTools,
              'bg-slate-300 dark:bg-slate-900': !showTools,
            }" class="py-2 px-10 rounded-full font-normal shadow border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400">
                        About
                    </button>
                    <button @click="toggleContent('tools')" :class="{
              'bg-transparent dark:bg-transparent': showAbout,
              'bg-slate-300 dark:bg-slate-900': !showAbout,
            }" class="py-2 px-10 rounded-full font-normal shadow border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400">
                        Tools
                    </button>
                </div>
            </div>
            <!-- End Profile -->
            <p v-show="showAbout" class="lg:hidden text-base font-medium text-center mx-5 max-w-[800px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
                beatae odit? Accusantium omnis, commodi mollitia quam iste totam! Iure
                quam tempore itaque nam exercitationem reprehenderit enim! Ipsum
                excepturi omnis similique magnam tempora libero est labore nostrum
                accusamus tenetur doloremque laboriosam natus incidunt molestias maxime
                ad consequatur, ea quia sapiente? Nobis!
            </p>
            <div v-show="showTools" class="lg:hidden flex gap-5 mx-5 lg:mx-40">
                <div class="flex flex-col mx-5">
                    <p class="text-left text-sm">
                        Design: Figma<br />Editor Code: VS Code<br />Bahasa Pemrograman:
                        HTML, Tailwind CSS, dan Vue.js
                    </p>
                </div>
            </div>
        </div>
        <Footer class="mt-20" />
    </div>
</template>
<script setup>
    import { ref, onMounted } from "vue";
    import {
        ArrowLeftIcon,
        HomeIcon,
        ChevronRightIcon,
    } from "@heroicons/vue/24/solid";
    import Navbar from "@/components/Navbar.vue";
    import NavSidebar from "@/components/NavSidebar.vue";
    import Footer from "@/components/Footer.vue";

    const showAbout = ref(true);
    const showTools = ref(false);

    const toggleContent = (content) => {
        if (content === "about") {
            showAbout.value = true;
            showTools.value = false;
        } else if (content === "tools") {
            showAbout.value = false;
            showTools.value = true;
        }
    };

    const Tools = [
        { id: 1, name: "VS CODE" },
        { id: 2, name: "FIGMA" },
        { id: 3, name: "LAPTOP" },
    ];

    onMounted(() => {
        scrollToTop();
    });

    function scrollToTop() {
        window.scrollTo(0, 0);
    }
</script>