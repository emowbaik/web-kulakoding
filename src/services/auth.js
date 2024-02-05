import { ref } from "vue";
import axios from "./axios";
import { useRouter } from "vue-router";
import useSwal from "./swal";

export default function useAuth() {
  const user = ref([]);
  const { accepted, failed, confirmed, success } = useSwal();
  const router = useRouter();

  async function LoggedIn() {
    const response = await axios.get("/api/user");
    console.log(response.data);
    user.value = response.data;
  }

  async function Login(payload) {
    try {
      const response = await axios.post("/api/v1/auth/login", payload);
      console.log(response.data);
      console.log(response.data.token);
      const token = response.data.token;
      StoreToken(token);
      setTimeout(() => {
        router.push({ name: "dashboard" });
        success("Login berhasil");
      }, 1200);
    } catch (error) {
      failed(error.response.data.message);
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
      }
    }
  }

  async function Register(payload) {
    try {
      const response = await axios.post("/api/v1/auth/register", payload);
      console.log(response.data);
      setTimeout(() => {
        router.push({ name: "login" });
        success("Register berhasil");
      }, 1200);
    } catch (error) {
      failed(error.response.data.message);
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
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

  async function Logout() {
    const response = confirmed("Logout?");

    if ((await response).isConfirmed) {
      try {
        await axios.post("/api/v1/auth/logout");
        RevokeToken();
        setTimeout(() => {
          router.push("/");
          success("Logout sukses");
        }, 1200);
      } catch (error) {
        failed(error.response.data.message);
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
        }
      }
    }
  }

  async function Edit(payload) {
    try {
      const status = await confirmed("Update data?");

      if (status.isConfirmed) {
        const response = await axios.post(`/api/v1/user`, payload);
        console.log(response.data);
        accepted(response.data.message);
        router.push("/user");
      }
    } catch (error) {
      failed(error.response.data.message);
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
      }
    }
  }

  return {
    Login,
    Register,
    Logout,
    LoggedIn,
    Edit,
    user,
  };
}
