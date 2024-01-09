<template>
    <nav class="bg-[#0096D1] px-6 shadow" :class="{ 'dark-mode': darkMode }">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-5 font-sans">
                <router-link :to="{ name: 'dashboard' }" class="pb-5">
                    <div
                        class="bg-[url(../assets/img/logo_kulakoding.png)] w-14 h-14 bg-center bg-contain bg-no-repeat">
                    </div>
                </router-link>
                <ul class="flex items-center mb-4 font-sans lg:ml-auto">
                    <li>
                        <router-link :to="{ name: 'about' }" class="text-xl ml-2 font-semibold hover:underline">About
                            us</router-link>
                    </li>
                </ul>
            </div>
            <ul class="flex items-center gap-5 font-sans mt-4 lg:mt-0">
                <li>
                    <router-link :to="{ name: 'about' }">
                        <div class="bg-white p-3 hover:bg-slate-100 mb-3 rounded-full shadow">
                            <logoProfil />
                        </div>
                    </router-link>
                </li>
                <!-- <li>
                    <div class="bg-white p-3 hover:bg-slate-100 rounded-full shadow" @click="toggleDarkMode">
                        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
                    </div>
                </li> -->
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    .dark-mode {
        background-color: #333;
        /* warna latar belakang mode gelap */
        color: #fff;
        /* warna teks mode gelap */
    }
</style>

<script setup>
    import { ref } from "vue";
    import logoProfil from "../components/icons/Profil.vue";

    const darkMode = ref(false);

    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
        // Add logic to toggle dark mode styles or classes
    };
</script>