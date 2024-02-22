import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../../services/axios";

export default defineStore("page", () => {
  const page = ref(1);
  const project = ref([]);

  async function getproject(page = 1) {
    const response = await axios.get(`/api/v1/user/project?page=${page}`);
    project.value = response.data.data;
    console.log(project.value);
  }

  return { page, getproject, project };
});
