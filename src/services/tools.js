import axios from "./axios";
import { ref } from "vue";

export default function useTools() {
  const tools = ref([]);

  async function IndexTools() {
    const response = await axios.get("/api/v1/tool");
    tools.value = response.data.tools;
  }

  return {
    tools,
    IndexTools,
  };
}
