import axios from "../axios";
import { ref } from "vue";

export default function useProject() {
  const project = ref([]);
  const tools = ref([]);

  async function StoreProject(payload) {
    try {
      console.log(payload);
      const response = await axios.post("/api/v1/project", payload);
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
      }
    }
  }

  async function SingleProject(id) {
    const response = await axios.get(`/api/v1/project/${id}`);
    console.log(response.data.tool);
    tools.value = JSON.parse(response.data.tool);
    console.log(response.data);
    project.value = response.data;
  }

  async function Index() {
    const response = await axios.get("/api/v1/project");
    project.value = response.data;
  }

  async function IndexProject() {
    const response = await axios.get(`/api/v1/admin/allProject`);
    console.log(response.data);
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
