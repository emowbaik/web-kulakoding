<template>
    <main class="h-full">
        <Navbar class="hidden lg:block" />
        <NavSidebar class="lg:hidden" />
        <div class="flex justify-between p-2">
            <button @click="$router.back()" class="flex items-center gap-1 font-semibold mb-4 lg:mb-0">
                <ArrowLeftIcon class="w-5" />
                Back
            </button>
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
        <Project class="flex-grow" />
        <Footer />
    </main>
</template>

<script setup>
    import {
        ArrowLeftIcon,
        HomeIcon,
        ChevronRightIcon,
    } from "@heroicons/vue/24/solid";
    import Navbar from "@/components/Navbar.vue";
    import Footer from "@/components/Footer.vue";
    import NavSidebar from "@/components/NavSidebar.vue";
    import Project from "@/components/Project.vue";
    import { useDark } from "@vueuse/core";

    const isDark = useDark(false);

</script>