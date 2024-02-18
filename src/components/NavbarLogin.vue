<template>
    <nav id="navbar" class="bg-primary px-6 shadow dark:bg-secondary text-kuning">
        <div class="flex items-center justify-between">
            <div class="flex items-center font-sans gap-2">
                <router-link :to="{ name: 'dashboard' }" class="p-2">
                    <div class="bg-[url(@/assets/img/iconkula.png)] w-16 h-16 bg-center bg-contain bg-no-repeat"></div>
                </router-link>
                <ul class="flex items-center font-sans lg:ml-auto gap-5">
                    <li>
                        <router-link :to="{ name: 'about' }" class="text-xl ml-2 font-bold hover:underline">About
                            Us</router-link>
                    </li>
                </ul>
            </div>
            <div>
                <router-view />
            </div>
            <ul class="flex items-center gap-5 font-sans lg:mt-0">
                <li class="flex -ml-3">
                    <router-link :to="{ name: 'login' }" class="py-2 px-5">
                        Login
                    </router-link>
                    <router-link :to="{ name: 'register' }" class="py-2 px-5 rounded-md bg-kuning text-white shadow">
                        Get Started
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    import { ArrowLeftStartOnRectangleIcon } from "@heroicons/vue/24/solid";
    import { UserIcon } from "@heroicons/vue/24/outline";
    import useAuth from "../services/auth";
    import { useDark, useToggle } from "@vueuse/core";
    import { onMounted, ref } from "vue";

    const isClicked = ref(false);
    const isDark = useDark(false);
    const toggleDark = useToggle(isDark);
    const { user, LoggedIn, Logout } = useAuth();

    function open() {
        isClicked.value = !isClicked.value;
    }

    onMounted(() => {
        LoggedIn();
    });
</script>