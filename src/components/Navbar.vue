<template>
    <nav class="bg-[#0096D1] px-6 shadow" :class="{ 'dark-navbar': darkMode }">
        <div class="flex items-center justify-between">
            <div class="flex items-center font-sans">
                <router-link :to="{ name: 'dashboard' }" class="p-2">
                    <div
                        class="bg-[url(../assets/img/logo_kulakoding.png)] w-14 h-14 bg-center bg-contain bg-no-repeat">
                    </div>
                </router-link>
                <ul class="flex items-center font-sans lg:ml-auto">
                    <li>
                        <router-link :to="{ name: 'index' }" class="text-xl ml-2 font-bold hover:underline">About
                            us</router-link>
                    </li>
                </ul>
            </div>
            <ul class="flex items-center gap-5 font-sans lg:mt-0">
                <li>
                    <router-link :to="{ name: 'index' }">
                        <div class="bg-white p-0.5 hover:bg-slate-100 rounded-full shadow">
                            <img src="../assets/img/Profile.png" alt="profile" class="rounded-full w-10 items-center justify-center">
                        </div>
                    </router-link>
                </li>
                <li>
                    <!-- Toggle untuk dark mode -->
                    <button @click="toggleDarkMode" class="text-white">
                        <i v-if="darkMode" class="bi bi-moon"></i>
                        <i v-else class="bi bi-sun"></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    .dark-navbar {
        background-color: #C1C1C1;
        color: white;
    }
</style>

<script setup>
    import { ref, computed } from "vue";
    import logoProfil from "../components/icons/Profil.vue";
    import { useAppStore } from '../services/store.js';

const appStore = useAppStore();

const darkMode = computed(() => appStore.darkMode);
const toggleDarkMode = () => appStore.toggleDarkMode();
</script>