import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:2000", // yahan tumhara backend ka base URL
  withCredentials: true, // agar cookies/auth chahiye
});

export default API;




