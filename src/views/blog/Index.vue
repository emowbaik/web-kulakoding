<template>
  <div class="flex flex-col">
    <header class="">
      <Navbar></Navbar>
      <div class="mx-5">
        <TopBar :toolbar="'Blog'"></TopBar>
      </div>
    </header>
    <main class="flex mx-12 mt-5 flex-col">
      <h3 class="font-semibold text-3xl">Blog</h3>
      <div
        class="grid grid-cols-3 justify-center place-items-center mt-12 gap-12"
      >
        <div
          v-for="item in blog"
          class="w-72 h-56 relative rounded-md group flex justify-center items-center dark:text-black"
        >
          <img
            class="absolute w-full h-full"
            :src="route + '/' + item.thumbnail"
            alt=""
          />

          <div
            class="absolute flex justify-center items-center z-10 group-hover:z-30 opacity-0 group-hover:opacity-100 bg-[#6e6d6d8a] w-full h-full rounded-md duration-300 transition-opacity"
          >
            <RouterLink :to="{ name: 'blog.detail', params: { slug: item.slug } }">
              <div class="flex flex-col gap-5 justify-center items-center">
                <h3 class="text-white font-bold text-3xl">
                  {{ item.judul }}
                </h3>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "../../components/Navbar.vue";
import TopBar from "../../components/TopBar.vue";
import useBlog from "../../services/blog/index";

const route = import.meta.env.VITE_API_URL;

const { IndexBlog, blog } = useBlog();

onMounted(() => {
  IndexBlog();
});
</script>
