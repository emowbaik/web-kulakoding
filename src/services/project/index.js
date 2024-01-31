import axios from "../axios";
import { ref } from "vue";

export default function useProject() {
  const project = ref([]);

  async function StoreProject(payload) {
    try {
      const response = await axios.post("/api/v1/project", payload);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
      }
    }
  }

  async function SingleProject(id) {
    const response = await axios.get(`/api/v1/project/${id}`);

    project.value = response.data;
  }

  async function Index() {
    const response = await axios.get("/api/v1/project");
    project.value = response.data;
  }

  return {
    project,
    StoreProject,
    Index,
    SingleProject,
  };
}
