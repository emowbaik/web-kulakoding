import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// axios.defaults.withCredentials = true;

const token = localStorage.getItem("auth_token");

if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default axios;
