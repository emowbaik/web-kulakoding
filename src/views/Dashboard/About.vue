<template>
  <div class="w-full h-full overflow-hidden">
    <Navbar v-if="isLoggedIn == true" class="hidden lg:block" />
    <NavLogin v-else class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <TopBar :toolbar="'About'"></TopBar>
    <div class="flex flex-col">
      <h2 class="text-center font-bold text-3xl my-5">About Us</h2>
      <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:-my-5">
        <img src="@/assets/img/code-typing.png" alt="bg_hero"
          class="w-[80%] lg:w-[50%] lg:h-[100%] bg-center bg-cover bg-no-repeat" />
        <div class="flex lg:m-10 items-center mx-auto">
          <div v-if="isDark == true"
            class="rounded-lg bg-no-repeat lg:m-0 m-5 bg-right-top bg-[#FFBC43] bg-opacity-25 bg-[url(@/assets/img/aset-hero1-dark.png)]">
            <div class="bg-no-repeat bg-center lg:bg-cover bg-[url(@/assets/img/aset-hero2-dark.png)]">
              <div class="bg-no-repeat bg-left-bottom bg-[url(@/assets/img/aset-hero3-dark.png)]">
                <div class="relative w-[100%] lg:w-[748px] min-h-[400px] overflow-hidden">
                  <h2 class="text-center mt-5 font-bold text-2xl text-black dark:text-white">
                    Our Purpose
                  </h2>
                  <p class="text-lg m-5 text-center font-bold lg:text-2xl text-black dark:text-white">
                    Selamat datang di Kula Koding! Kami menjadi mitra Anda dalam
                    perjalanan
                    teknologi informasi yang terus berkembang. Dengan dedikasi pada inovasi, kami membawa Anda ke dunia
                    solusi IT
                    yang adaptif, memungkinkan transformasi dan pertumbuhan perusahaan Anda di era digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-else
            class="rounded-lg bg-no-repeat lg:m-0 m-5 bg-right-top bg-[#FFBC43] bg-opacity-25 bg-[url(@/assets/img/aset-hero1.png)]">
            <div class="bg-no-repeat bg-center lg:bg-cover bg-[url(@/assets/img/aset-hero3.png)]">
              <div class="bg-no-repeat bg-left-bottom bg-[url(@/assets/img/aset-hero2.png)]">
                <div class="relative w-[100%] lg:w-[748px] min-h-[400px] overflow-hidden">
                  <h2 class="text-center mt-5 font-bold text-2xl text-black dark:text-white">
                    Our Purpose
                  </h2>
                  <p class="text-lg m-5 text-center font-bold lg:text-2xl text-black dark:text-white">
                    Selamat datang di Kula Koding! Kami menjadi mitra Anda dalam
                    perjalanan
                    teknologi informasi yang terus berkembang. Dengan dedikasi pada inovasi, kami membawa Anda ke dunia
                    solusi IT
                    yang adaptif, memungkinkan transformasi dan pertumbuhan perusahaan Anda di era digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img v-if="isDark == true" src="@/assets/img/wave-light.png" alt="Penyekat" class="w-full relative z-10" />
    <img v-else src="@/assets/img/wave-dark.png" alt="Penyekat" class="w-full relative z-10" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    ArrowLeftIcon,
    HomeIcon,
    ChevronRightIcon,
  } from "@heroicons/vue/24/solid";
  import TopBar from "../../components/TopBar.vue";
  import Navbar from "@/components/Navbar.vue";
  import NavLogin from "@/components/NavbarLogin.vue";
  import NavSidebar from "@/components/NavSidebar.vue";
  import Hero from "@/components/Hero.vue";
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark(false);
  const isLoggedIn = ref(localStorage.getItem("auth_token") !== null);
</script>