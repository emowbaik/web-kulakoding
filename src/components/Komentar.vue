<template>
  <div class="flex lg:mx-45 mx-12 justify-center items-center pb-12 lg:px-36">
    <div
      class="p-6 w-full flex flex-col gap-5 bg-light dark:bg-dark rounded-md border border-dark text-dark dark:border-light dark:text-light shadow">
      <h3 class="text-[#ABABAB] text-[20px]">Komentar</h3>
      <div class="flex gap-12 flex-col">
        <div class="flex flex-col lg:flex-row justify-between gap-5 items-center">
          <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`" alt="profile"
            class="rounded-full cursor-pointer w-10 items-center justify-center" />
          <form @submit.prevent="save">
            <label for="" class="relative flex items-center gap-5">
              <div class="">
                <input v-model="payload.komentar" type="text"
                  class="bg-transparent z-10 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light w-[15rem] lg:w-[54rem] border border-dark dark:border-light rounded-full py-4 pl-8"
                  placeholder="Masukkan komentar anda..." />
                <button type="submit"
                  class="absolute inset-y-0 right-0 flex items-center justify-center w-7 mr-6 pb-1 h-full text-dark dark:text-light">
                  <PaperAirplaneIcon class="w-8 h-8 -rotate-45"></PaperAirplaneIcon>
                </button>
              </div>
            </label>
          </form>
        </div>
        <div v-for="item in komentar" class="flex gap-5 items-end border-t-2 border-t-dark dark:border-t-light">
          <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${item.user?.username}`" alt="profile"
            class="rounded-full cursor-pointer w-10 items-end justify-end" />
          <div class="flex flex-col relative">
            <div class="flex gap-4 items-center mt-1">
              <h3 class="">{{ item.user?.username }}</h3>
              <h3 class="text-light bg-dark p-1 rounded-md">
                {{ item.user?.kelas }}
              </h3>
            </div>
            <input disabled type="text"
              class="bg-light dark:bg-dark text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light lg:w-96 border-none p-0"
              :value="item.komentar" />
            <!-- <div class="flex gap-2">
              <button @click="like(item.id)" class="text-dark w-6 flex">
                <span v-if="liked == false">
                  <HeartIcon class="w-6 h-6 text-dark"></HeartIcon>
                </span>
                <span v-else>
                  <HeartIcon class="w-6 h-6 text-[#eb000e]"></HeartIcon>
                </span>
              </button>
              <h3>0</h3>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PaperAirplaneIcon, HeartIcon } from "@heroicons/vue/24/solid";
import { defineProps, reactive, onMounted, ref } from "vue";
import useKomentar from "../services/komentar/index";
import useLike from "../services/like";
import { useRoute } from "vue-router";

const { StoreKomentar, komentar, IndexKomentar } = useKomentar();
const props = defineProps(["user", "project"]);
const router = useRoute();

const { storeLike, showLike, likes } = useLike();

const payload = reactive({
  komentar: "",
});

const likePayload = reactive({
  user_id: props.user?.id,
  komentar_id: "",
  project_id: props.project,
});

const liked = ref(false);

function like(id) {
  likePayload.komentar_id = id;
  storeLike(likePayload);
}

async function save() {
  await StoreKomentar(props.project, payload);
}

onMounted(() => {
  showLike(router.params.id);
  IndexKomentar(router.params.id);
});
</script>