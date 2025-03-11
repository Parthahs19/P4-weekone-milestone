<<<<<<< HEAD
import axiosInstance from "./axiosInstance"; // ✅ Import Axios instance

// ✅ Register API Function
export const registerAPI = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};

// ✅ Login API Function
export const loginAPI = async (email, password) => {
    try {
      console.log("🔥 Sending Login Request:", { email, password });
  
      const response = await axiosInstance.post("/auth/login", { email, password });
  
      console.log("✅ Response Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Login Error Details:", error.response?.data || error.message);
      throw error;
    }
  };
  

// ✅ Logout API Function
export const logoutAPI = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

// ✅ Get User Profile API Function
export const userProfileAPI = async () => {
  const response = await axiosInstance.get("/auth/profile");
  return response.data;
};
=======
const host = "http://localhost:4000";
export const setAvatarAPI = `${host}/api/auth/setAvatar`;
export const registerAPI = `${host}/api/auth/register`;
export const loginAPI = `${host}/api/auth/login`;
export const addTransaction = `${host}/api/v1/addTransaction`;
export const getTransactions = `${host}/api/v1/getTransaction`;
export const editTransactions = `${host}/api/v1/updateTransaction`;
export const deleteTransactions = `${host}/api/v1/deleteTransaction`;
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
