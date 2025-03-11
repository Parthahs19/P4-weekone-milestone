import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/dbconfig.js";
import authRoutes from "./routes/auth.js";
import transactionRoutes from "./routes/transaction.js";

dotenv.config();
connectDB();

const app = express();
<<<<<<< HEAD

// ✅ Proper CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL
  credentials: true, // Allow cookies & auth headers
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions)); // Apply CORS Middleware
app.use(express.json()); // Enable JSON parsing

// ✅ Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);


// ✅ Start Server
=======
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
