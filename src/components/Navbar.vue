<template>
  <nav id="navbar" class="bg-primary px-6 shadow dark:bg-[#C1C1C1] text-white dark:text-slate-900">
    <div class="flex items-center justify-between">
      <div class="flex items-center font-sans">
        <router-link :to="{ name: 'dashboard' }" class="p-2">
          <div class="bg-[url(@/assets/img/logo_kulakoding.png)] w-14 h-14 bg-center bg-contain bg-no-repeat"></div>
        </router-link>
        <ul class="flex items-center font-sans lg:ml-auto">
          <li>
            <router-link :to="{ name: 'about' }" class="text-xl ml-2 font-bold hover:underline">About Us</router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-view />
      </div>
      <ul class="flex items-center gap-5 font-sans lg:mt-0">
        <li v-show="current.path !== '/'">
          <!-- Toggle untuk dark mode -->
          <button @click="toggleDark()" class="text-white mt-2">
            <img v-if="isDark" src="@/assets/img/Darkmode.png" alt="toggle" class="w-12" />
            <img v-else src="@/assets/img/Lightmode.png" alt="toggle" class="w-12" />
          </button>
        </li>
        <li v-if="!allowedPaths.includes(current.path)" class="flex -ml-3">
          <router-link :to="{ name: 'login' }" class="py-2 px-5">
            Login
          </router-link>
          <router-link :to="{ name: 'register' }" class="py-2 px-5 rounded-md bg-white text-slate-900 shadow">
            Get Started
          </router-link>
        </li>
        <li v-else class="flex gap-3 relative text-end items-center">
          <img @click="open" class="w-10 h-10 rounded-full cursor-pointer"
            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`" alt="" />
          <div v-if="isClicked == true"
            class="absolute rounded-md shadow-md flex flex-col bg-white top-12 right-0 p-3 gap-1">
            <div class="flex items-center gap-1 p-2 shadow bg-primary rounded-md transition-colors duration-150">
              <h2 class="text-nowrap font-normal">{{ user.username }} | {{ user.role }}</h2>
            </div>
            <span class="flex flex-col mt-2">
              <router-link :to="{ name: 'user' }"
                class="flex items-center gap-1 py-1 hover:bg-slate-200 rounded-md transition-colors duration-150">
                <UserIcon class="w-5 h-5 text-black" />
                <span class="text-black">Profile</span>
              </router-link>
              <hr style="height:1px;border-width:0;color:#565656;background-color:#565656">
              <button @click="Logout()"
                class="flex items-center gap-1 py-1 hover:bg-slate-200 rounded-md transition-colors duration-150">
                <ArrowLeftStartOnRectangleIcon class="w-5 h-5 text-black" />
                <span class="text-black">Logout</span>
              </button>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  import {
    ArrowLeftStartOnRectangleIcon,
  } from "@heroicons/vue/24/solid";
  import {
    UserIcon,
  } from "@heroicons/vue/24/outline";
  import useAuth from "../services/auth";
  import { useDark, useToggle } from "@vueuse/core";
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";

  const isClicked = ref(false);
  const router = useRouter();
  const current = router.currentRoute;
  const isDark = useDark(false);
  const toggleDark = useToggle(isDark);
  const { user, LoggedIn, Logout } = useAuth();

  const number = Array.from({ length: 10000 }, (_, index) => index + 1);
  const allowedPaths = [
    "/",
    "/dashboard",
    "/user",
    "/upload",
    "/detail",
    "/about",
    "/user/edit",
    ...number.map(n => `/detail/${n}`)
  ];


  function open() {
    isClicked.value = !isClicked.value;
  }

  onMounted(() => {
    LoggedIn();
  });
</script>