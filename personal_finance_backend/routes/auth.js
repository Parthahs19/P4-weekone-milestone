import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  forgotPassword,
  resetPassword,
  logoutUser,
  getAllUsers,
  deleteUser,
} from "../controllers/authController.js";
import {
  addTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  deleteMultipleTransactions,
} from "../controllers/transactionController.js";
import { protect,isAdmin } from "../middlewares/authMiddleware.js";
import { validateRegister, validateLogin, validateTransaction } from "../middlewares/validationMiddleware.js";

const router = express.Router();

// ✅ AUTH ROUTES
router.post("/register", validateRegister, registerUser);  // Register user
router.post("/login", validateLogin, loginUser);  // Login user
router.post("/logout", protect, logoutUser);  // Logout user
router.post("/forgot-password", forgotPassword);  // Forgot password
router.post("/reset-password/:token", resetPassword);  // Reset password

// ✅ USER PROFILE ROUTES
router.get("/profile", protect, getUserProfile);  // Get logged-in user profile
router.put("/profile", protect, updateUserProfile);  // Update user profile

// ✅ ADMIN ROUTES (Only Admins can access these)
router.get("/users", protect, isAdmin, getAllUsers);  // Get all users
router.delete("/users/:id", protect, isAdmin, deleteUser);  // Delete a user (Admin Only)

// ✅ TRANSACTION ROUTES
router.post("/transactions", protect, validateTransaction, addTransaction);  // Add transaction
router.get("/transactions", protect, getAllTransactions);  // Get all transactions
router.get("/transactions/:id", protect, getTransactionById);  // Get a single transaction
router.put("/transactions/:id", protect, validateTransaction, updateTransaction);  // Update transaction
router.delete("/transactions/:id", protect, deleteTransaction);  // Delete single transaction
router.post("/transactions/delete-multiple", protect, deleteMultipleTransactions);  // Delete multiple transactions

export default router;
