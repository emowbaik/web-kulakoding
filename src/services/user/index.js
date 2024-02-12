import axios from "../axios";
import { ref } from "vue";

export default function useUser() {
  const project = ref([]);

  async function IndexProject() {
    const response = await axios.get("/api/v1/user/project");
    console.log(response.data);
    project.value = response.data.data;
  }

  return {
    project,
    IndexProject,
  };
}
