import axios from "../axios";
import { ref } from "vue";

export default function useUser() {
  const project = ref([]);

  async function IndexProject(page = 1) {
    const response = await axios.get(`/api/v1/user/project?page=${page}`);
    console.log(response.data.data);
    project.value = response.data.data;
  }

  return {
    project,
    IndexProject,
  };
}
