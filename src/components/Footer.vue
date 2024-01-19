<template>
    <div class="mt-20 mb-5 sm:mb-10 md:mb-20">
        <img src="../assets/img/penyekatdark5.png" v-if="isDark === true" alt="Penyekat" class="relative z-0 w-full" />
        <img src="@/assets/img/Penyekat5.png" v-else alt="Penyekat" class="relative z-0 w-full" />
    </div>
    <!-- footer -->
    <footer>
        <div class="mx-4 lg:mx-10 mb-5">
            <h2 class="text-4xl text-center font-bold m-2">Our Team</h2>
            <div class="shadow rounded-xl grid lg:grid-cols-3 gap-4 bg-[#FFE4B0] dark:bg-[#277894]">
                <div class="relative flex lg:hidden items-end justify-end m-2 z-0">
                    <button class="bg-slate-100 dark:bg-slate-900 rounded-full shadow">
                        <a href="#navbar">
                            <ArrowUpIcon class="w-10" />
                        </a>
                    </button>
                </div>
                <!-- Contact Section -->
                <div class="relative flex lg:flex-col gap-3 text-center ml-2 lg:ml-0 -mt-14 lg:-mt-0 z-10">
                    <span class="flex flex-col gap-2">
                        <span class="hidden lg:block text-2xl text-black font-bold">Contact Us</span>
                        <span class="flex items-center gap-1 lg:justify-center text-2xl text-black font-bold">
                            <PhoneIcon class="w-6" />082221313
                        </span>
                        <span class="flex items-center gap-1 justify-center text-2xl text-black font-bold">
                            <EnvelopeIcon class="w-6" />kulakoding@gmail.com
                        </span>
                    </span>
                </div>

                <!-- Visit Us Section -->
                <div class="flex flex-col  text-left lg:text-center ml-1 lg:ml-0 lg:mt-5">
                    <span class="hidden lg:block text-2xl text-black font-bold">Visit Us</span>
                    <a href="https://maps.app.goo.gl/rKqVuTc3mHENQmiQA" target="_blank">
                        <p class="flex items-center lg:items-start text-base text-black font-bold">
                            <MapPinIcon class="w-24 lg:w-20 lg:mt-1" />Jl. Brig Jend. Hasan Basri
                            No.6, Sungai Miai, Kec. Banjarmasin Utara, Kota Banjarmasin,
                            Kalimantan Selatan.
                        </p>
                    </a>
                </div>

                <!-- Logo Section -->
                <div class="flex flex-col text-center">
                    <div class="flex items-end justify-end mb-7 mx-2 lg:m-2 z-10">
                        <button class="hidden lg:block bg-slate-100 dark:bg-slate-900 rounded-full shadow">
                            <a href="#navbar">
                                <ArrowUpIcon class="w-10" />
                            </a>
                        </button>
                    </div>
                    <div class="flex items-center lg:justify-end -mt-10 mb-10">
                        <img v-if="currentMaskot === 'maskot1'" src="@/assets/img/maskot1.png" alt="logo_kulakoding"
                            class="hidden lg:block lg:w-1/2 z-0" @click="changeMaskot" />
                        <img v-else-if="currentMaskot === 'maskot2'" src="@/assets/img/maskot2.png"
                            alt="logo_kulakoding" class="hidden lg:block lg:w-1/2 z-0" @click="changeMaskot" />
                        <img v-else src="@/assets/img/maskot3.png" alt="logo_kulakoding"
                            class="hidden lg:block lg:w-1/2 z-0" @click="changeMaskot" />
                    </div>
                </div>
            </div>
            <div class="flex justify-between -mt-5 bg-[#0096D1] dark:bg-[#C1C1C1] text-slate-900 rounded-b-xl py-1">
                <p class="ml-2 font-bold">© Copy Right - KulaKoding</p>
                <div class="flex gap-3 mr-2">
                    <a href="https://github.com" target="_blank"><i class="bi bi-github text-xl"></i></a>
                    <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook text-xl"></i></a>
                    <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram text-xl"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter-x text-xl"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- footer end -->
</template>
<script setup>
    import { ref } from "vue";
    import {
        ArrowUpIcon,
        PhoneIcon,
        EnvelopeIcon,
        MapPinIcon
    } from "@heroicons/vue/24/solid";
    import { useDark, useToggle } from "@vueuse/core";

    const isDark = useDark(false);
    const currentMaskot = ref("maskot1");

    const changeMaskot = () => {
        if (currentMaskot.value === "maskot1") {
            currentMaskot.value = "maskot2";
        } else if (currentMaskot.value === "maskot2") {
            currentMaskot.value = "maskot3";
        } else if (currentMaskot.value === "maskot3") {
            currentMaskot.value = "maskot1";
        }
    };
</script>