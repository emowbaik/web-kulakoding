import axios from "../axios";
import { ref } from "vue";

export default function useLike() {
  const likes = ref([]);

  async function storeLike(payload) {
    try {
      const response = await axios.post("/api/v1/like", payload);
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  async function showLike(id) {
    const response = await axios.get(`/api/v1/like/${id}`);
    console.log(response.data);
    likes.value = response.data;
  }

  return {
    showLike,
    likes,
    storeLike,
  };
}
