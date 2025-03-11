import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure it matches the backend
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include credentials for authentication
});

export default axiosInstance;
