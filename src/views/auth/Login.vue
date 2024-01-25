<template>
  <div class="bg">
    <div
      class="flex flex-col w-screen h-full lg:h-screen overflow-hidden text-white"
    >
      <div class="flex-grow">
        <div class="flex justify-center items-center min-h-screen">
          <div
            class="bg-white rounded-l-md bg-[url(@/assets/Login/pita-kiri-atas.png)] bg-no-repeat w-[450px] h-[500px]"
          >
            <div class="relative">
              <a target="_blank" href="https://smkn2-bjm.sch.id/">
                <img
                  src="../../assets/Login/profile-sekolah.png"
                  alt="logo-sekolah"
                  class="p-5"
                />
              </a>
              <img
                src="../../assets/Login/Ilustrasi.png"
                alt="Ilustrasi"
                class="p-5"
              />
            </div>
          </div>
          <div
            v-if="showMaskot"
            @click="toggleMaskot"
            class="maskot absolute z-0"
          >
            <img
              src="../../assets/Login/maskot-login.png"
              alt="maskot"
              class=""
            />
            <img
              src="../../assets/Login/maskot-login.png"
              alt="maskot"
              v-show="!showMaskot"
              class="opacity-0"
            />
          </div>
          <div
            class="relative flex flex-col justify-center items-center bg-[#22668D] rounded-r-md bg-[url(@/assets/Login/pita-kanan-bawah.png)] bg-right-bottom bg-no-repeat w-[450px] h-[500px] z-40"
          >
            <form @submit.prevent="doLogin" class="m-5">
              <h2 class="text-center font-bold text-2xl mb-2">Login</h2>
              <span class="flex flex-col gap-3">
                <div class="flex flex-col w-[250px]">
                  <label for="input-group-1" class="font-semibold"
                    >Username</label
                  >
                  <span>
                    <div
                      class="absolute flex items-center p-2.5 pointer-events-none"
                    >
                      <EnvelopeIcon class="w-5 text-slate-900" />
                    </div>
                    <input
                      v-model="payload.email"
                      type="email"
                      id="input-group-1"
                      class="bg-white border border-slate-900 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-900"
                      placeholder="Email"
                    />
                  </span>
                </div>
                <div class="flex flex-col w-[250px]">
                  <span>
                    <div
                      class="absolute flex items-center py-[33px] px-3 pointer-events-none"
                    >
                      <LockClosedIcon class="w-5 text-slate-900" />
                    </div>
                    <label for="input-group-2" class="font-semibold"
                      >Password</label
                    >
                    <input
                      v-model="payload.password"
                      type="password"
                      id="input-group-2"
                      class="bg-white border border-slate-900 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-900"
                      placeholder="Password"
                    />
                  </span>
                </div>
                <button
                  class="inline-flex mt-5 lg:mx-0 mx-auto justify-center items-center gap-1 font-semibold rounded-md bg-[#3E9ACF] focus:bg-slate-300 border border-slate-900 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2 hover:bg-slate-400 text-slate-900"
                >
                  Login
                </button>
              </span>
              <div class="flex justify-between text-sm mt-1">
                <div class="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-slate-800 bg-gray-100 border-gray-300 rounded focus:ring-slate-500 dark:focus:ring-slate-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="red-checkbox"
                    class="ms-2 text-sm font-medium text-white dark:text-gray-300"
                    >Ingat saya</label
                  >
                </div>
                <div>
                  <a href="/verifikasi"> Lupa Password? </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import useAuth from "../../services/auth";
import {
  EnvelopeIcon,
  LockClosedIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/vue/24/solid";

const showMaskot = ref(true);

const toggleMaskot = () => {
  showMaskot.value = !showMaskot.value;
  if (!showMaskot.value) {
    setTimeout(() => {
      showMaskot.value = true;
    }, 1000);
  }
};

const payload = reactive({
  email: "",
  password: "",
});

const { Login } = useAuth();

async function doLogin() {
  await Login(payload);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet');

.bg {
  background: url(@/assets/Login/bg.png) center no-repeat;
  font-family: "Inter", sans-serif;
}

.maskot {
  position: absolute;
  bottom: 70%;
  right: 48.7.5%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  transition: opacity 1s ease-out;
  animation: fadeInFromRight 1s ease-in-out;
}

@keyframes fadeInFromRight {
  0% {
    opacity: 1;
    transform: translateX(10%);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
