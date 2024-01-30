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
        <li
          v-if="current.path !== '/dashboard' && current.path !== '/user' && current.path !== '/upload' && current.path !== '/detail' && current.path !== '/about'"
          class="flex -ml-3">
          <router-link :to="{ name:'login' }" class="py-2 px-5">
            Login
          </router-link>
          <router-link :to="{ name:'register' }" class="py-2 px-5 rounded-md bg-white text-slate-900 shadow">
            Get Started
          </router-link>
        </li>
        <li v-else>
          <router-link :to="{ name: 'user' }">
            <div class="bg-white p-0.5 hover:bg-slate-100 rounded-full shadow">
              <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`" alt="profile"
                class="rounded-full w-10 items-center justify-center" />
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  import logoProfil from "@/components/icons/Profil.vue";
  import useAuth from "../services/auth";
  import { useDark, useToggle } from "@vueuse/core";
  import { onMounted, computed } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const current = router.currentRoute;
  const isDark = useDark(false);
  const toggleDark = useToggle(isDark);

  const { user, LoggedIn } = useAuth();

  onMounted(() => {
    LoggedIn();
  });
</script>