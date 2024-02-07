import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../../services/axios";

export const usePages = defineStore("page", () => {
  const page = ref(1);
  const project = ref([]);

  async function getproject(page = 1) {
    const response = await axios.get(`/api/v1/admin/project?page=${page}`);
    console.log(response.data);
    project.value = response.data;
  }

  return { page, getproject, project };
});
