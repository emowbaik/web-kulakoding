import axios from "../axios";
import { ref } from "vue";

export default function useUser() {
  const project = ref([]);

  async function IndexProject(page = 1) {
    const response = await axios.get(`/api/v1/user/project?page=${page}`);
    console.log(response.data.data);
    project.value = response.data.data;
  }

  async function updateProfile(payload) {
    try {
      const response = await axios.put(`/api/v1/user/`, payload);
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  return {
    project,
    IndexProject,
    updateProfile,
  };
}
