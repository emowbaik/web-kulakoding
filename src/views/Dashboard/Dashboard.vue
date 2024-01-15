<template>
  <div class="h-full">
    <Navbar />
    <Hero />
    <div class="mt-5 sm:mt-10 md:mt-20">
        <img src="@/assets/img/Penyekatdark1.png" v-if="isDark === true" alt="Penyekat" class="relative z-0 w-full" />
        <img src="@/assets/img/Penyekat1.png" v-else alt="Penyekat" class="relative z-0 w-full" />
    </div>
    <div class="-mb-20 relative z-10">
      <div class="m-5 lg:m-20">
        <h2 class="font-bold text-xl lg:text-4xl mb-5 lg:mb-10">Daftar Isi</h2>
        <div class="flex flex-col lg:flex-row lg:justify-around">
          <div
            v-for="item in daftar"
            :key="item.id"
            class="mx-auto lg:mx-5 mb-5 lg:mb-0"
          >
            <div class="bg-[#0096D1] rounded-md shadow">
              <a :href="item.link" rel="noopener noreferrer">
                <img
                  :src="item.image"
                  class="w-full h-48 lg:h-64 object-contain rounded-md"
                  alt="shortcut"
                />
              </a>
            </div>
            <p class="text-center m-2 text-base font-medium">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 sm:mb-10 md:mb-20">
      <img
        src="@/assets/img/Penyekatdark2.png"
        v-if="isDark === true"
        alt="Penyekat"
        class="relative z-0 w-full"
      />
      <img
        src="@/assets/img/Penyekat2.png"
        v-else
        alt="Penyekat"
        class="relative z-0 w-full"
      />
    </div>
    <Untung id="untung" />
    <div class="mt-5 sm:mt-10 md:mt-20">
      <img
        src="@/assets/img/Penyekatdark3.png"
        v-if="isDark === true"
        alt="Penyekat"
        class="relative z-0 w-full"
      />
      <img
        src="@/assets/img/Penyekat3.png"
        v-else
        alt="Penyekat"
        class="relative z-0 w-full"
      />
    </div>
    <Member id="member" />
    <div class="mt-5 sm:mt-10 md:mt-20">
      <img
        src="@/assets/img/Penyekatdark4.png"
        v-if="isDark === true"
        alt="Penyekat"
        class="relative z-0 w-full"
      />
      <img
        src="@/assets/img/Penyekat4.png"
        v-else
        alt="Penyekat"
        class="relative z-0 w-full"
      />
    </div>
    <Project id="project" />
    <Footer />
  </div>
</template>

<style scoped>
.dark-mode {
  background-color: #212538;
  color: #fff;
}
</style>

<script setup>
import { ref } from 'vue';
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Untung from "@/components/Keuntungan.vue";
import Member from "@/components/Member.vue";
import Project from "@/components/Project.vue";
import Footer from "@/components/Footer.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark(false);
const daftar = [
  {
    id: 1,
    name: "Keuntungan",
    image: "../src/assets/img/work-2.png",
    link: "#untung",
  },
  {
    id: 2,
    name: "Member",
    image: "../src/assets/img/work-2.png",
    link: "#member",
  },
  {
    id: 3,
    name: "Project",
    image: "../src/assets/img/work-2.png",
    link: "#project",
  },
];
</script>
