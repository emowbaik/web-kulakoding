<template>
    <div class="mt-5 sm:mt-10 md:mt-20">
        <img src="../assets/img/penyekatdark1.png" v-if="isDark === true" alt="Penyekat" class="relative z-0 w-full" />
        <img src="@/assets/img/Penyekat1.png" v-else alt="Penyekat" class="relative z-0 w-full" />
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
                            <p class="text-lg text-black mx-auto font-bold">
                                <i class="bi bi-geo-alt-fill"></i>Jl. Brig Jend. Hasan Basri
                                No.6, Sungai Miai, Kec. Banjarmasin Utara, Kota Banjarmasin,
                                Kalimantan Selatan.
                            </p>
                        </a>
                    </div>

                    <!-- Logo Section -->
                    <div class="flex gap-3 m-2 text-center">
                        <div class="flex justify-end items-end">
                            <img v-if="currentMaskot === 'maskot1'" src="@/assets/img/maskot1.png" alt="logo_kulakoding"
                                class="relative z-10 w-1/2" @click="changeMaskot" />
                            <img v-else-if="currentMaskot === 'maskot2'" src="@/assets/img/maskot2.png"
                                alt="logo_kulakoding" class="relative z-10 w-1/2" @click="changeMaskot" />
                            <img v-else src="@/assets/img/maskot3.png" alt="logo_kulakoding" class="relative z-10 w-1/2"
                                @click="changeMaskot" />
                        </div>
                        <div class="absolute right-14">
                            <button class="bg-slate-100 dark:bg-slate-900 rounded-full shadow">
                                <a href="#navbar">
                                    <ArrowUpIcon class="w-10" />
                                </a>
                            </button>
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
<script setup>
    import { ref } from "vue";
    import { ArrowUpIcon } from "@heroicons/vue/24/solid";
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