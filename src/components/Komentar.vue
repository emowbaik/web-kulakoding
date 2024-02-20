<template>
  <div class="flex justify-center items-center pb-12">
    <div
      class="p-6 flex flex-col gap-5 bg-tertiary rounded-md border border-primary text-primary"
    >
      <h3 class="text-[#ABABAB] text-[20px]">Komentar</h3>
      <div class="flex gap-12 flex-col">
        <div class="flex justify-between gap-5 items-center">
          <img
            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`"
            alt="profile"
            class="rounded-full cursor-pointer w-10 items-center justify-center"
          />
          <form @submit.prevent="save">
            <label for="" class="relative flex items-center gap-5">
              <div class="relative">
                <input
                  v-model="payload.komentar"
                  type="text"
                  class="bg-secondary z-10 text-white placeholder:text-primary w-96 border-2 border-primary rounded-full py-4 pl-8"
                  placeholder="Masukkan komentar anda..."
                />
                <button
                  type="submit"
                  class="absolute inset-y-0 right-0 flex items-center justify-center w-7 mx-4 h-full text-white"
                >
                  <PaperAirplaneIcon
                    class="w-8 h-8 -rotate-45"
                  ></PaperAirplaneIcon>
                </button>
              </div>
            </label>
          </form>
        </div>
        <div
          v-for="item in komentar"
          class="flex gap-5 items-center border-t-2 border-t-primary"
        >
          <img
            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${item.user?.username}`"
            alt="profile"
            class="rounded-full cursor-pointer w-10 items-center justify-center"
          />
          <div class="flex flex-col">
            <div class="flex gap-4 items-center">
              <h3 class="">{{ item.user?.username }}</h3>
              <h3 class="text-primary bg-secondary p-2 rounded-md">
                {{ item.user?.kelas }}
              </h3>
            </div>
            <input
              disabled
              type="text"
              class="bg-tertiary text-white placeholder:text-primary w-96 border-none py-4"
              :value="item.komentar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PaperAirplaneIcon } from "@heroicons/vue/24/solid";
import { defineProps, reactive, onMounted } from "vue";
import useKomentar from "../services/komentar/index";
import { useRoute } from "vue-router";

const { StoreKomentar, komentar, IndexKomentar } = useKomentar();
const props = defineProps(["user", "project"]);
const router = useRoute();

const payload = reactive({
  komentar: "",
});

async function save() {
  await StoreKomentar(props.project, payload);
}

onMounted(() => {
  IndexKomentar(router.params.id);
});
</script>
