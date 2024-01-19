<template>
    <div class="w-screen h-screen overflow-hidden">
        <Navbar class="hidden lg:block" />
        <NavSidebar class="lg:hidden" />
        <div class="flex justify-between p-2">
            <router-link :to="{ name: 'dashboard' }" class="flex items-center gap-1 font-semibold">
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
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">user</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
        <div class="flex flex-col justify-center items-center my-20 max-h-screen">
            <div class="flex flex-col items-center my-5">
                <div class="p-0.5 rounded-full">
                    <img src="@/assets/img/Profile.png" alt="profile"
                        class="rounded-full w-20 items-center justify-center" />
                </div>
                <h2 class="text-2xl font-bold">LowTierGod</h2>
            </div>
            <div class="flex flex-col gap-3">
                <div class="relative flex gap-2">
                    <span>
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <EnvelopeIcon class="w-5" />
                        </div>
                        <input type="text" id="input-group-1"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Reset email" />
                    </span>
                    <div
                        class="flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-200 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2">
                        <PencilSquareIcon class="w-5" />
                    </div>
                </div>
                <div class="relative flex gap-2">
                    <span>
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <LockClosedIcon class="w-5" />
                        </div>
                        <input type="password" id="input-group-1"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Reset password" />
                    </span>
                    <div
                        class="flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-200 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2">
                        <PencilSquareIcon class="w-5" />
                    </div>
                </div>
                <div class="flex gap-2">
                    <span class="hidden lg:block">
                        <router-link :to="{ name: 'upload' }"
                            class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2">
                            <DocumentPlusIcon class="w-5" />
                            Upload Project
                        </router-link>
                    </span>
                    <button
                        class="inline-flex lg:mx-0 mx-auto items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2">
                        <ArrowRightStartOnRectangleIcon class="w-5" />
                        Log Out
                    </button>
                </div>
            </div>
        </div>
        <img src="@/assets/img/wave-profile.png" alt="Penyekat" class="w-full lg:relative absolute bottom-0 lg:-mt-40 -z-10" />
    </div>
</template>

<script setup>
    import {
        EnvelopeIcon,
        LockClosedIcon,
        DocumentPlusIcon,
        ArrowRightStartOnRectangleIcon,
        PencilSquareIcon,
        ArrowLeftIcon,
        HomeIcon,
        ChevronRightIcon,
    } from "@heroicons/vue/24/solid";
    import Navbar from "@/components/Navbar.vue";
    import NavSidebar from "@/components/NavSidebar.vue";
    import Hero from "@/components/Hero.vue";
</script>