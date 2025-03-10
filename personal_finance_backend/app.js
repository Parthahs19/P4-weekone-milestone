import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/dbconfig.js";
import authRoutes from "./routes/auth.js";
import transactionRoutes from "./routes/transaction.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
