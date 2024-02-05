import axios from "../axios";
import { ref } from "vue";
import useSwal from "../swal";

export default function useProject() {
  const project = ref([]);
  const { accepted, failed, confirmed, success } = useSwal();

  async function StoreProject(payload) {
    try {
      const response = await axios.post("/api/v1/project", payload);
      console.log(response.data);
      success(response.data.message);
      router.back()
    } catch (error) {
      failed(error.response.data.message);
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
      }
    }
  }

  async function SingleProject(id) {
    try {
      const response = await axios.get(`/api/v1/project/${id}`);
      project.value = response.data;
      console.log(response.data);
    } catch (error) {
      failed(error.response.data.message);
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
      }
    }
  }

  async function Index(page = 1) {
    try {
      const response = await axios.get(`/api/v1/project?page=${page}`);
      project.value = response.data.data;
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
      }
    }
  }

  return {
    project,
    StoreProject,
    Index,
    SingleProject,
  };
}
