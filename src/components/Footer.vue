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
                    <a href="#navbar">
                        <button class="bg-slate-100 dark:bg-slate-900 rounded-full shadow">
                            <ArrowUpIcon class="w-10" />
                        </button>
                    </a>
                </div>
                <!-- Contact Section -->
                <div class="relative flex lg:flex-col text-center ml-2 lg:ml-0 -mt-14 lg:mt-5 z-10">
                    <span class="flex flex-col gap-2">
                        <span class="hidden lg:block text-2xl text-black font-bold">Contact Us</span>
                        <span>
                            <span
                                class="flex items-center gap-1 lg:justify-center text-xl lg:text-2xl text-black font-bold">
                                <PhoneIcon class="w-6" />08123456789
                            </span>
                            <span
                                class="flex items-center gap-1 justify-center text-xl lg:text-2xl text-black font-bold">
                                <EnvelopeIcon class="w-6" />kulakoding@gmail.com
                            </span>
                        </span>
                    </span>
                </div>

                <!-- Visit Us Section -->
                <div class="flex flex-col text-center lg:mt-4">
                    <label for="visit"
                        class="hidden lg:flex items-center text-center mx-auto text-2xl text-black font-bold">
                        <MapPinIcon class="w-24 lg:w-7" />Visit
                        Us
                    </label>
                    <a id="visit" href="https://maps.app.goo.gl/rKqVuTc3mHENQmiQA" target="_blank">
                        <p
                            class="flex items-start lg:items-center text-left lg:text-center text-lg text-black font-bold">
                            <MapPinIcon class="w-24 lg:mt-0 mt-1 lg:w-7 lg:hidden" />
                            Jl. Brig Jend. Hasan Basri
                            No.6, Sungai Miai, Kec. Banjarmasin Utara, Kota Banjarmasin,
                            Kalimantan Selatan.
                        </p>
                    </a>
                </div>

                <!-- Logo Section -->
                <div class="flex m-3 justify-between">
                    <div class="hidden gap-3 mr-2 lg:flex lg:flex-col dark:text-slate-900">
                        <a href="https://github.com" target="_blank" class="flex gap-2 font-semibold"><i
                                class="bi bi-github text-xl"></i>@KulaKoding</a>
                        <a href="https://facebook.com" target="_blank" class="flex gap-2 font-semibold"><i
                                class="bi bi-facebook text-xl"></i>@KulaKoding</a>
                        <a href="https://instagram.com" target="_blank" class="flex gap-2 font-semibold"><i
                                class="bi bi-instagram text-xl"></i>@Kula.Koding</a>
                        <a href="https://twitter.com" target="_blank" class="flex gap-2 font-semibold"><i
                                class="bi bi-twitter-x text-xl"></i>@Kula.Koding</a>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-end justify-end z-10 transition ease-in-out delay-10o0 hover:-translate-y-1 hover:scale-110 duration-300">
                            <button class="hidden lg:block bg-slate-100 dark:bg-slate-900 rounded-full shadow">
                                <a href="#navbar">
                                    <ArrowUpIcon class="w-10" />
                                </a>
                            </button>
                        </div>
                        <Maskot class="relative -mt-10 mb-5 hidden lg:block z-0" />
                    </div>
                </div>
            </div>
            <div
                class="flex lg:justify-center justify-between -mt-5 bg-[#0096D1] dark:bg-[#C1C1C1] text-slate-900 rounded-b-xl py-1">
                <p class="ml-2 font-bold">© Copy Right - KulaKoding</p>
                <div class="flex gap-3 mr-2 lg:hidden">
                    <a href="https://github.com" target="_blank" class="flex gap-2 font-semibold"><i
                            class="bi bi-github text-xl"></i></a>
                    <a href="https://facebook.com" target="_blank" class="flex gap-2 font-semibold"><i
                            class="bi bi-facebook text-xl"></i></a>
                    <a href="https://instagram.com" target="_blank" class="flex gap-2 font-semibold"><i
                            class="bi bi-instagram text-xl"></i></a>
                    <a href="https://twitter.com" target="_blank" class="flex gap-2 font-semibold"><i
                            class="bi bi-twitter-x text-xl"></i></a>
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
        MapIcon,
        MapPinIcon,
    } from "@heroicons/vue/24/solid";
    import {
    } from "@heroicons/vue/24/outline";
    import { useDark, useToggle } from "@vueuse/core";
    import Maskot from '../components/Maskot.vue'

    const isDark = useDark(false);
</script>