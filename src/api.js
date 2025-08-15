// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:2000", // yahan tumhara backend ka base URL
//   withCredentials: true, // agar cookies/auth chahiye
// });

// export default API;

// api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:2000"
    : "https://backend-project-dotl.vercel.app",
  withCredentials: true,
});

export default API;





