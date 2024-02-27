<template>
  <nav id="navbar" class="bg-light px-6 shadow dark:bg-dark text-kuning dark:text-light">
    <div class="flex items-center justify-between">
      <div class="flex items-center font-sans gap-2">
        <router-link :to="{ name: 'dashboard' }" class="p-2">
          <div class="bg-[url(@/assets/img/iconkula.png)] w-16 h-16 bg-center bg-contain bg-no-repeat"></div>
        </router-link>
        <ul class="flex items-center font-sans lg:ml-auto gap-5">
          <li>
            <router-link :to="{ name: 'about' }" class="text-xl ml-2 font-bold hover:underline">About Us</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'project' }" class="text-xl ml-2 font-bold hover:underline">Explore</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'blog' }" class="text-xl ml-2 font-bold hover:underline">Blog</router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-view />
      </div>
      <ul class="flex items-center gap-5 font-sans lg:mt-0">
        <li>
          <!-- Toggle untuk dark mode -->
          <button @click="toggleDark()" class="text-white mt-2">
            <img v-if="isDark" src="@/assets/img/Darkmode.png" alt="toggle" class="w-12" />
            <img v-else src="@/assets/img/Lightmode.png" alt="toggle" class="w-12" />
          </button>
        </li>
        <li class="flex gap-3 relative text-end items-center">
          <img @click="open" class="w-10 h-10 rounded-full cursor-pointer"
            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`" alt="" />
          <div v-if="isClicked == true"
            class="absolute rounded-md shadow flex flex-col bg-light dark:bg-dark top-[56px] right-0 p-3 gap-1 z-10">
            <div
              class="flex items-center gap-1 py-2 px-10 shadow bg-dark dark:bg-light text-light dark:text-dark rounded-md transition-colors duration-150">
              <h2 class="font-normal text-center">
                {{ user.username }}
              </h2>
            </div>
            <span class="flex flex-col mt-2 text-dark dark:text-light">
              <router-link :to="{ name: 'user' }"
                class="flex items-center gap-1 py-1 rounded-md transition-colors duration-150">
                <UserIcon class="w-5 h-5" />
                <span class="">Profile</span>
              </router-link>
              <hr style="
                  height: 1px;
                  border-width: 0;
                  color: #565656;
                  background-color: #565656;
                " />
              <button @click="Logout()" class="flex items-center gap-1 py-1 rounded-md transition-colors duration-150">
                <ArrowLeftStartOnRectangleIcon class="w-5 h-5" />
                <span class="">Logout</span>
              </button>
            </span>
          </div>
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
