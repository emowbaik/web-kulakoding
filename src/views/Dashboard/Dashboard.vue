<template>
  <div class="h-full">
    <Navbar />
    <Hero />
    <div class="mt-5 sm:mt-10 md:mt-20">
      <img src="@/assets/img/Penyekat1.png" alt="Penyekat" class="w-full" />
    </div>
    <div class="-mb-20 relative z-10">
      <div class="m-5 lg:m-20">
        <h2 class="font-bold text-xl lg:text-4xl mb-5 lg:mb-10">Daftar Isi</h2>
        <div class="flex flex-col lg:flex-row lg:justify-around">
          <div v-for="item in daftar" :key="item.id" class="mx-auto lg:mx-5 mb-5 lg:mb-0">
            <div class="bg-[#0096D1] rounded-md shadow">
              <a :href="item.link" rel="noopener noreferrer">
                <img :src="item.image" class="w-full h-48 lg:h-64 object-contain rounded-md" alt="shortcut" />
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
      <img src="@/assets/img/Penyekatdark2.png" v-if="isDark === true" alt="Penyekat" class="relative z-0 w-full" />
      <img src="@/assets/img/Penyekat2.png" v-else alt="Penyekat" class="relative z-0 w-full" />
    </div>
    <Untung id="untung" />
    <div class="mt-5 sm:mt-10 md:mt-20">
      <img src="@/assets/img/Penyekatdark3.png" v-if="isDark === true" alt="Penyekat" class="relative z-0 w-full" />
      <img src="@/assets/img/Penyekat3.png" v-else alt="Penyekat" class="relative z-0 w-full" />
    </div>
    <Member id="member" />
    <div class="mt-5 sm:mt-10 md:mt-20">
      <img src="@/assets/img/Penyekatdark4.png" v-if="isDark === true" alt="Penyekat" class="relative z-0 w-full" />
      <img src="@/assets/img/Penyekat4.png" v-else alt="Penyekat" class="relative z-0 w-full" />
    </div>
    <Project id="project" />
    <div class="mt-5 sm:mt-10 md:mt-20">
      <img src="@/assets/img/Penyekatdark4.png" v-if="isDark === true" alt="Penyekat" class="relative z-0 w-full" />
      <img src="@/assets/img/Penyekat4.png" v-else alt="Penyekat" class="relative z-0 w-full" />
    </div>


  </div>
  <!-- footer -->
  <footer>
    <div class="mx-10 mb-5">
      <h2 class="text-4xl text-center font-bold m-2">Our Team</h2>
      <div class="shadow rounded-xl">
        <div class="flex bg-[#FFE4B0] dark:bg-[#277894] justify-start rounded-t-xl">
          <!-- Contact Section -->
          <div class="flex flex-col gap-3 text-center p-10">
            <span class="text-2xl text-black mx-auto font-bold">Contact Us</span>
            <span class="flex gap-2 text-2xl text-black mx-auto font-bold"><i
                class="bi bi-telephone-fill"></i>082221313</span>
            <span class="flex gap-2 text-2xl text-black mx-auto font-bold"><i
                class="bi bi-envelope-at-fill"></i>kulakoding@gmail.com</span>
          </div>

          <!-- Visit Us Section -->
          <div class="flex flex-col gap-3 text-center p-10">
            <span class="text-2xl text-black mx-auto font-bold">Visit Us</span>
            <a href="https://maps.app.goo.gl/rKqVuTc3mHENQmiQA" target="_blank">
              <p class="text-lg text-black mx-auto font-bold"><i class="bi bi-geo-alt-fill"></i>Jl. Brig Jend. Hasan
                Basri
                No.6, Sungai Miai, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan.</p>
            </a>
          </div>

          <!-- Logo Section -->
          <div class="flex flex-col gap-3 m-2 text-center">
            <div class="flex justify-end">
              <!-- <img src="@/assets/img/maskot.png" alt="maskot"> -->
              <button class="bg-slate-100 dark:bg-slate-900 rounded-full shadow"><a href="#navbar" class=""><i
                    class="bi bi-arrow-up-short text-5xl dark:text-white"></i></a></button>
            </div>
            <div class="flex justify-center">
              <img src="@/assets/img/logo_kulakoding.png" alt="logo_kulakoding" class="w-1/2">
            </div>
          </div>
        </div>
        <div class="flex justify-between bg-[#0096D1] dark:bg-[#C1C1C1] text-slate-900 rounded-b-xl py-1">
          <p class="ml-2 font-bold">© Copy Right - KulaKoding</p>
          <div class="flex gap-3 mr-2">
            <a href="https://github.com" target="_blank"><i class="bi bi-github text-xl"></i></a>
            <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook text-xl"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram text-xl"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter-x text-xl"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer end -->
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
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark(false);
  const daftar = [
    {
      id: 1,
      name: "Keuntungan",
      image: "../src/assets/img/work-2.png",
      link: '#untung',
    },
    {
      id: 2,
      name: "Member",
      image: "../src/assets/img/work-2.png",
      link: '#member',
    },
    {
      id: 3,
      name: "Project",
      image: "../src/assets/img/work-2.png",
      link: '#project',
    },
  ];
</script>