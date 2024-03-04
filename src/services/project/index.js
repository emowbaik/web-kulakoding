import axios from "../axios";
import { ref } from "vue";

export default function useProject() {
  const project = ref([]);
  const tools = ref([]);

  async function StoreProject(payload) {
    try {
      const response = await axios.post("/api/v1/project", payload);
      success("Data berhasil ditambahkan");
      router.back()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
      }
    }
  }

  async function SingleProject(id) {
    const response = await axios.get(`/api/v1/project/${id}`);
    tools.value = JSON.parse(response.data.tool);
    project.value = response.data;
  }

  async function Index(limit = -6) {
    const response = await axios.get("/api/v1/project");
    const projectData = response.data;
    project.value = projectData.slice(limit);
  }

  async function IndexProject() {
    const response = await axios.get(`/api/v1/admin/allProject`);
    project.value = response.data;
  }

  return {
    project,
    StoreProject,
    Index,
    SingleProject,
    IndexProject,
    tools,
  };
}
