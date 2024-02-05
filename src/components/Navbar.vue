<template>
  <nav
    id="navbar"
    class="bg-[#0096D1] px-6 shadow dark:bg-[#C1C1C1] text-white dark:text-slate-900"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center font-sans">
        <router-link :to="{ name: 'dashboard' }" class="p-2">
          <div
            class="bg-[url(@/assets/img/logo_kulakoding.png)] w-14 h-14 bg-center bg-contain bg-no-repeat"
          ></div>
        </router-link>
        <ul class="flex items-center font-sans lg:ml-auto">
          <li>
            <router-link
              :to="{ name: 'project' }"
              class="text-xl ml-2 font-bold hover:underline"
              >Project</router-link
            >
            <router-link
              :to="{ name: 'about' }"
              class="text-xl ml-2 font-bold hover:underline"
              >About Us</router-link
            >
            <router-link
              :to="{ name: 'project' }"
              class="text-xl ml-2 font-bold hover:underline"
              >Project</router-link
            >
          </li>
        </ul>
      </div>
      <div class="flex gap-5">
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
        <router-link :to="{ name: 'user' }">
          <img
            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`"
            alt="profile"
            class="rounded-full w-10 items-center justify-center"
          />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logoProfil from "@/components/icons/Profil.vue";
import useAuth from "../services/auth";
import { useDark, useToggle } from "@vueuse/core";
import { onMounted } from "vue";

const isDark = useDark(false);
const toggleDark = useToggle(isDark);

const { user, LoggedIn } = useAuth();

onMounted(() => {
  LoggedIn();
});
</script>
