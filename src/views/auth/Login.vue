<!-- <template>
    <div class="bg-[#22668D] w-1/2">
        <div class="w-screen h-screen overflow-hidden">
            <img src="../../assets/Login/kiri.png" alt="" class="bg-contain bg-no-repeat w-">
        </div>
    </div>
</template> -->
<!-- <template>
    <div class="w-screen h-screen overflow-hidden">
        <div class="bg-[#22668D] max-w-xl">
            <img src="../../assets/Login/kiri.png" alt="" class="bg-cover bg-no-repeat w-full h-full">
        </div>
    </div>
</template> -->
<!-- <template>
    <div class="w-full h-full bg-[#22668D]">
        <div class="">
            <img src="../../assets/Login/segitiga-kiri-atas.png" alt="" class="relative bg-left-top bg-cover bg-no-repeat">
            <img src="../../assets/Login/segitiga-kiri-bawah.png" alt="" class="relative bg-left-bottom bg-cover bg-no-repeat">
        </div>
    </div>
</template> -->
<template>
    <div class="flex flex-col w-screen h-full lg:h-screen overflow-hidden text-white">
        <div class="flex-grow">
            <div class="flex justify-center items-center min-h-screen">
                <div
                    class="bg-white rounded-l-md bg-[url(@/assets/Login/pita-kiri-atas.png)] bg-no-repeat w-[450px] h-[500px]">
                    <img src="../../assets/Login/maskot-login.png" alt="" class="absolute ml-[416px]">
                    <img src="../../assets/Login/profile-sekolah.png" alt="" class="p-5">
                    <img src="../../assets/Login/Ilustrasi.png" alt="" class="p-5">
                    <!-- <div class="bg-[url(@/assets/Login/maskot-login.png)] bg-right-top bg-no-repeat">
                    </div> -->
                </div>
                <div
                    class="flex flex-col justify-center items-center bg-[#22668D] rounded-r-md bg-[url(@/assets/Login/pita-kanan-bawah.png)] bg-right-bottom bg-no-repeat w-[450px] h-[500px]">
                    <div class="m-5">
                        <h2 class="text-center font-bold text-2xl mb-2">Login</h2>
                        <span class="flex flex-col gap-3">
                            <div class="flex flex-col w-[250px]">
                                <label for="input-group-1" class="font-semibold">Username</label>
                                <span>
                                    <div class="absolute flex items-center p-2.5 pointer-events-none">
                                        <EnvelopeIcon class="w-5" />
                                    </div>
                                    <input type="email" id="input-group-1"
                                        class="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-400"
                                        placeholder="Email" />
                                </span>
                            </div>
                            <div class="flex flex-col w-[250px]">
                                <span>
                                    <div class="absolute flex items-center py-[33px] px-3 pointer-events-none">
                                        <LockClosedIcon class="w-5" />
                                    </div>
                                    <label for="input-group-2" class="font-semibold">Password</label>
                                    <input type="password" id="input-group-2"
                                        class="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-400"
                                        placeholder="Password" />
                                </span>
                            </div>
                            <button
                                class="inline-flex lg:mx-0 mx-auto justify-center items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2">
                                <!-- <ArrowRightStartOnRectangleIcon class="w-5" /> -->
                                Login
                            </button>
                        </span>
                        <div class="flex justify-between text-sm mt-1">
                            <div class="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value=""
                                    class="w-4 h-4 text-slate-800 bg-gray-100 border-gray-300 rounded focus:ring-slate-500 dark:focus:ring-slate-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="red-checkbox"
                                    class="ms-2 text-sm font-medium text-white dark:text-gray-300">Ingat saya</label>
                            </div>
                            <div>
                                <a href="../auth/Register.vue">
                                    Lupa Password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
        EnvelopeIcon,
        LockClosedIcon,
        ArrowRightStartOnRectangleIcon,
    } from "@heroicons/vue/24/solid";
</script>