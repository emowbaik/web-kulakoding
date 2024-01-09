<template>
  <div class="h-screen">
    <Navbar />
    <Hero />
    <div class="mt-5 sm:mt-10 md:mt-20">
      <img src="../assets/img/penyekat1.png" alt="Penyekat" class="w-full" />
    </div>
    <Daftar />
    <div class="">
        <!-- <img src="../assets/img/wave1.png" alt="Penyekat" class="w-full -mb-10" /> -->
        <img src="../assets/img/penyekat2.png" alt="Penyekat" class="w-full -mt-10" />
    </div>
    <Untung />
    <div class="mt-5 sm:mt-10 md:mt-20">
      <img src="../assets/img/penyekat3.png" alt="Penyekat" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Daftar from "../components/Daftar.vue";
import Untung from "../components/Keuntungan.vue";
</script>
