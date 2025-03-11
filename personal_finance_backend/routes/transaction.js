import express from "express";
import {
  addTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  deleteMultipleTransactions,
} from "../controllers/transactionController.js";
import {protect} from "../middlewares/authMiddleware.js";
import { validateTransaction } from "../middlewares/validationMiddleware.js";

const router = express.Router();

// ✅ Add a new transaction (Protected Route)
router.post("/", protect, validateTransaction, addTransaction);

// ✅ Get all transactions for a user with filters & pagination
router.get("/", protect, getAllTransactions);

// ✅ Get a single transaction by ID
router.get("/:id", protect, getTransactionById);

// ✅ Update a transaction (Protected & Validated)
router.put("/:id", protect, validateTransaction, updateTransaction);

// ✅ Delete a single transaction
router.delete("/:id", protect, deleteTransaction);

// ✅ Delete multiple transactions
router.post("/delete-multiple", protect, deleteMultipleTransactions);

export default router;

