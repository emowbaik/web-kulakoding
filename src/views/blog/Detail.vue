<template>
  <div>
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <div class="mx-2">
      <TopBar :toolbar="'blog'"></TopBar>
    </div>
    <div v-for="item in blog" :key="item.id"
      class="flex pb-12 flex-col mx-7 mt-4 lg:mx-[361px] text-[#424242] dark:text-[#F5F8FD]">
      <h3 class="font-extrabold text-[35px] text-slate-900">{{ item.judul }}</h3>
      <div class="flex mt-[27px] items-center gap-3">
        <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${item.user?.username}`" alt="profile"
          class="rounded-full cursor-pointer w-10 items-center justify-center" />
        <div class="flex flex-col">
          <p>{{ item.user?.username }}</p>
          <div class="flex gap-1">
            <p>{{
              new Date(item.created_at).toLocaleString("id-ID", {
              weekday: "long",
              })
              }}</p>
            <p>{{
              new Date(item.created_at).toLocaleString("id-ID", {
              month: "short",
              })
              }}</p>
            <p>{{ new Date(item.created_at).getDate() }}</p>
            <p>{{ new Date(item.created_at).getFullYear() }}</p>
          </div>
        </div>
      </div>
      <div class="mt-[77px]">
        <img :src="`${BASE_URL}/${item.thumbnail}`" alt="" class="w-[715px] h-[279px]" />
        <p class="text-xs indent-8">{{ item.slug }}</p>
      </div>
      <div class="mt-[60px]">
        <p class="text-base indent-8">{{ item.konten }}</p>
      </div>
      <footer class="mt-[61px] flex justify-center items-center">
        &copy; Copyright {{ new Date().getFullYear() }} - Kula Koding
      </footer>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  import useBlog from "../../services/blog";
  import Navbar from "../../components/Navbar.vue";
  import NavSidebar from "../../components/NavSidebar.vue";
  import TopBar from "../../components/TopBar.vue";
  // import { formattedDate, getCurrentYear } from "../../utils/helpers";

  const router = useRoute();
  const BASE_URL = import.meta.env.VITE_API_URL;

  const { ShowBlog, blog } = useBlog();

  onMounted(() => {
    ShowBlog(router.params.slug);
  });
</script>