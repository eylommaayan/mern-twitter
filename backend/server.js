import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // 1. ייבוא של cookie-parser

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // 2. שימוש ב-cookieParser (חובה לפני ה-routes)

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectMongoDB();
});