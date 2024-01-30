<script setup>
    import {
        EnvelopeIcon,
        LockClosedIcon,
        DocumentPlusIcon,
        ArrowRightStartOnRectangleIcon,
        ArrowLeftIcon,
        HomeIcon,
        ChevronRightIcon,
    } from "@heroicons/vue/24/solid";
    import useAuth from "../../services/auth";
    import Navbar from "@/components/Navbar.vue";
    import NavSidebar from "@/components/NavSidebar.vue";
    import Hero from "@/components/Hero.vue";
    import { onMounted } from "vue";

    const { user, LoggedIn, Logout } = useAuth();

    onMounted(() => {
        LoggedIn();
    });
</script>

<template>
    <div class="flex flex-col w-screen h-screen overflow-hidden">
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
                        <router-link :to="{ name: 'dashboard' }"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <HomeIcon class="text-gray-700 dark:text-gray-400 w-4 mr-1" />
                            Home
                        </router-link>
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
        <form @submit.prevent="save">
            <div class="flex-grow">
                <div class="flex flex-col justify-center items-center lg:my-5 my-20">
                    <div class="flex flex-col items-center my-5">
                        <div class="relative p-0.5 rounded-full">
                            <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`" alt="profile"
                                class="rounded-full w-20 items-center justify-center" />
                        </div>
                        <span class="flex flex-col gap-2">
                            <h2 class="text-2xl text-center font-bold">{{ user.username }}
                            </h2>
                            <button class="bg-primary py-1.5 px-4 rounded-md text-white shadow">
                                Edit Profile >
                            </button>
                        </span>
                    </div>
                    <div class="flex flex-col justify-center mx-auto gap-3">
                        <div class="relative flex gap-2">
                            <span>
                                <div class="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                                    <EnvelopeIcon class="w-5" />
                                </div>
                                <input disabled type="text" id="input-group-1"
                                    class="bg-transparent text-gray-900 text-sm w-[270px] ps-8 p-2.5 border-transparent border-b-black border-2 h-9 dark:border-transparent dark:border-b-gray-400 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                                    :value="user.email" />
                            </span>
                        </div>
                        <div class="relative flex gap-2">
                            <span>
                                <div class="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                                    <LockClosedIcon class="w-5" />
                                </div>
                                <input disabled type="text" id="input-group-1"
                                    class="bg-transparent text-gray-900 text-sm w-[270px] ps-8 p-2.5 border-transparent border-b-black border-2 h-9 dark:border-transparent dark:border-b-gray-400 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                                    placeholder="Password" :value="user.password" />
                            </span>
                        </div>
                        <div class="flex gap-2">
                            <span class="hide lg:block">
                                <router-link :to="{ name: 'upload' }"
                                    class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-400 border hover:border-gray-400 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2">
                                    <DocumentPlusIcon class="w-5" />
                                    Upload Project
                                </router-link>
                            </span>
                            <button @click="Logout()"
                                class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-400 border hover:border-gray-400 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2">
                                <ArrowRightStartOnRectangleIcon class="w-5" />
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <img src="@/assets/img/wave-profile.png" alt="Penyekat" class="w-full" />
    </div>
</template>