<template>
  <nav
    id="navbar"
    class="bg-primary px-6 dark:bg-secondary lg:mx-6 text-white dark:text-slate-900"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center font-sans">
        <router-link :to="{ name: 'dashboard' }" class="p-2">
          <div
            class="bg-[url(@/assets/img/iconkula.png)] w-20 h-20 bg-center bg-contain bg-no-repeat"
          ></div>
        </router-link>
        <ul class="lg:flex hidden items-center font-sans lg:ml-auto">
          <li>
            <router-link
              :to="{ name: 'about' }"
              class="text-lg ml-2 text-secondary dark:text-primary font-semibold hover:underline"
              >About Us</router-link
            >
            <router-link
              :to="{ name: 'project' }"
              class="text-lg text-secondary dark:text-primary ml-2 font-semibold hover:underline"
              >Project</router-link
            >
            <router-link
              :to="{ name: 'blog' }"
              class="text-lg text-secondary dark:text-primary ml-2 font-semibold hover:underline"
              >Blog</router-link
            >
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex gap-5">
        <ul class="flex items-center gap-5 font-sans lg:mt-0">
          <li>
            <!-- Toggle untuk dark mode -->
            <button @click="toggleDark()" class="text-white mt-1">
              <img
                v-if="isDark"
                src="@/assets/img/Darkmode.png"
                alt="toggle"
                class="w-12"
              />
              <img
                v-else
                src="@/assets/img/Lightmode.png"
                alt="toggle"
                class="w-12"
              />
            </button>
          </li>
          <!-- <li>
          <router-link :to="{ name: 'user' }">
            <div class="bg-white p-0.5 hover:bg-slate-100 rounded-full shadow">
              <img
                :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`"
                alt="profile"
                class="rounded-full w-10 items-center justify-center"
              />
            </div>
          </router-link>
        </li> -->
        </ul>
        <img
          @click="show"
          :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`"
          alt="profile"
          class="rounded-full cursor-pointer w-10 items-center justify-center"
        />
        <div class="flex justify-end">
          <div
            v-if="isShow == true"
            class="bg-secondary z-20 dark:bg-primary absolute right-8 flex top-20 justify-center p-6 items-center rounded-lg w-36 aspect-[3/2] shadow-md"
          >
            <div class="flex flex-col justify-center items-center">
              <div
                class="bg-primary mb-5 dark:bg-secondary text-secondary dark:text-primary w-28 flex justify-center items-center p-2 rounded-full"
              >
                <h3 class="">{{ user.username }}</h3>
              </div>
              <router-link class="flex" :to="{ name: 'user' }">
                <UserIcon class="w-5 h-5 text-primary dark:text-secondary">
                </UserIcon>
                <h3 class="font-bold">Profile</h3>
              </router-link>
              <div class="bg-primary dark:bg-secondary py-0.5 mt-2 w-20"></div>
              <button class="flex mt-2">
                <arrow-right-start-on-rectangle-icon
                  class="w-5 h-5 text-primary dark:text-secondary"
                >
                </arrow-right-start-on-rectangle-icon>
                <h3 class="font-bold">Logout</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logoProfil from "@/components/icons/Profil.vue";
import useAuth from "../services/auth";
import { useDark, useToggle } from "@vueuse/core";
import {
  UserIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/vue/24/solid";
import { onMounted, ref } from "vue";

const isDark = useDark(false);
const toggleDark = useToggle(isDark);
const isShow = ref(false);

const { user, LoggedIn } = useAuth();

function show() {
  isShow.value = !isShow.value;
}

onMounted(() => {
  LoggedIn();
});
</script>
