<template>
  <div class="flex flex-col w-full h-full">
    <NavLogin class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <Hero class="flex-grow" />
    <div class="mt-10 lg:mt-0">
      <img src="@/assets/img/Wave-light.png" v-if="isDark === true" alt="Penyekat" class="relative w-full" />
      <img src="@/assets/img/Wave-dark.png" v-else alt="Penyekat" class="relative w-full" />
    </div>
  </div>
</template>

<script setup>
import useAuth from "../services/auth";
import NavLogin from "@/components/NavbarLogin.vue";
import NavSidebar from "@/components/NavSidebar.vue";
import Hero from "@/components/Hero.vue";
import { onMounted } from "vue";
import { useDark } from "@vueuse/core";

const isDark = useDark(false);

const { user, LoggedIn } = useAuth();

onMounted(() => {
  LoggedIn();
});
</script>
