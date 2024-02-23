<template>
  <Navbar></Navbar>
  <div v-for="item in blog" class="flex pb-12 flex-col mx-[361px]">
    <h3 class="font-extrabold text-[35px]">{{ item.judul }}</h3>
    <p class="dark:text-[#B1B1B1] font-bold text-[24px] mt-[36px] line-clamp-2">
      {{ item.konten }}
    </p>
    <div class="flex mt-[27px] items-center gap-3">
      <img
        :src="`https://api.dicebear.com/7.x/initials/svg?seed=${item.user?.username}`"
        alt="profile"
        class="rounded-full cursor-pointer w-10 items-center justify-center"
      />
      <div class="flex flex-col">
        <p class="">{{ item.user?.username }}</p>
        <div class="flex gap-1 dark:text-[#B1B1B1]">
          <p class="">
            {{
              new Date(item.created_at).toLocaleString("id-ID", {
                weekday: "long",
              })
            }}
          </p>
          <p class="">
            {{
              new Date(item.created_at).toLocaleString("id-ID", {
                month: "short",
              })
            }}
          </p>
          <p class="">
            {{ new Date(item.created_at).getDate() }}
          </p>
          <p class="">
            {{ new Date(item.created_at).getFullYear() }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-[77px]">
      <img
        :src="BASE_URL + '/' + item.thumbnail"
        alt=""
        class="w-[715px] h-[279px]"
      />
    </div>
    <div class="mt-[103px]">
      <p class="">
        {{ item.konten }}
      </p>
    </div>
    <footer class="mt-[61px] flex justify-center items-center">
      &copy; Copyright {{ new Date().getFullYear() }} - Kula Koding
    </footer>
  </div>
</template>

<script setup>
import Navbar from "../../components/navbar.vue";
import { useRoute } from "vue-router";
import useBlog from "../../services/blog";
import { onMounted } from "vue";

const router = useRoute();
const BASE_URL = import.meta.env.VITE_API_URL;

const { ShowBlog, blog } = useBlog();

onMounted(() => {
  ShowBlog(router.params.slug);
});
</script>
