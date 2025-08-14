// api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // environment se URL
  withCredentials: true
});

export default API;

