import { isAxiosError } from "axios";
import axios from "../axios";
import { ref } from "vue";

export default function useBlog() {
  const blog = ref([]);

  async function IndexBlog() {
    const response = await axios.get("/api/v1/admin/blog");
    console.log(response.data);
    blog.value = response.data;
  }

  return {
    blog,
    IndexBlog,
  };
}
