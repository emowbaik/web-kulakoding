<template>
  <div class="flex flex-col w-screen h-full lg:h-screen overflow-hidden">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <Hero class="flex-grow" />
  </div>
</template>

<script setup>
import useAuth from "../services/auth";
import Navbar from "@/components/Navbar.vue";
import NavSidebar from "@/components/NavSidebar.vue";
import Hero from "@/components/Hero.vue";
import { onMounted } from "vue";

const { user, LoggedIn } = useAuth();

onMounted(() => {
  LoggedIn();
});
</script>
