import axios from "../axios";
import { ref } from "vue";

export default function useKomentar() {
  const komentar = ref([]);

  async function StoreKomentar(id, payload) {
    try {
      const response = await axios.post(
        `/api/v1/project/komentar/${id}`,
        payload
      );
      console.log(response.data);

      setTimeout(() => {
        IndexKomentar(id);
      }, 1200);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  async function IndexKomentar(id) {
    const response = await axios.get(`/api/v1/project/komentar/${id}`);
    console.log(response.data);
    komentar.value = response.data.komentar;
  }

  return {
    StoreKomentar,
    komentar,
    IndexKomentar,
  };
}
