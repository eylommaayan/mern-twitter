import express from "express";
// הוספנו את getMe לייבוא מהקונטרולר
import { signup, login, logout, getMe } from "../controllers/auth.controller.js"; 
// הוספנו את הייבוא של ה-Middleware שיצרנו
import { protectRoute } from "../middleware/protectRoute.js"; 

const router = express.Router();

// עכשיו protectRoute ו-getMe מוכרים לקוד
router.get("/me", protectRoute, getMe); 
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;