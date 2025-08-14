import axios from "axios";

const API = axios.create({
  baseURL:"https://backend-project-api.vercel.app",
  withCredentials: true
});

export default API;
