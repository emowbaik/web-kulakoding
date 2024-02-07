import { ref } from "vue";
import axios from "./axios";
import { useRouter } from "vue-router";

export default function useAuth() {
  const user = ref([]);
  const router = useRouter();

  async function LoggedIn() {
    const response = await axios.get("/api/v1/user");

    user.value = response.data;
  }

  async function Login(payload) {
    try {
      const response = await axios.post("/api/v1/auth/login", payload);

      const token = response.data.token;
      StoreToken(token);
      setTimeout(() => {
        router.push({ name: "index" });
      }, 1200);
    } catch (error) {
      if (axios.isAxiosError(error)) {
      }
    }
  }

  async function Register(payload) {
    try {
      const response = await axios.post("/api/v1/auth/register", payload);

      setTimeout(() => {
        router.push({ name: "login" });
      }, 1200);
    } catch (error) {
      if (axios.isAxiosError(error)) {
      }
    }
  }

  function StoreToken(token) {
    localStorage.setItem("auth_token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  function RevokeToken(token) {
    localStorage.removeItem("auth_token");
    axios.defaults.headers.common.Authorization = "";
  }

  return {
    Login,
    Register,
    LoggedIn,
    user,
  };
}
