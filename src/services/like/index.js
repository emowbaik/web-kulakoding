import axios from "../axios";
import { ref } from "vue";

export default function useLike() {
  const likes = ref([]);

  async function storeLike(payload) {
    try {
      const response = await axios.post("/api/v1/like", payload);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  async function showLike(id) {
    const response = await axios.get(`/api/v1/like/${id}`);
    likes.value = response.data;
  }

  return {
    showLike,
    likes,
    storeLike,
  };
}
