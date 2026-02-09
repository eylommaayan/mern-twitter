import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
    try {
        // ניסיון לחלץ את הטוקן מהעוגיות (Cookies)
        const token = req.cookies.jwt;
        
        if (!token) {
            return res.status(401).json({ error: "לא מורשה: לא סופק טוקן אימות" });
        }

        // אימות הטוקן מול המפתח הסודי
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "לא מורשה: טוקן לא תקין" });
        }

        // חיפוש המשתמש במסד הנתונים לפי ה-ID שבטוקן (ללא הסיסמה)
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "משתמש לא נמצא" });
        }

        // שמירת פרטי המשתמש על גבי האובייקט req כדי שהנתיב הבא יוכל להשתמש בהם
        req.user = user;
        
        // מעבר לפונקציה הבאה (הקונטרולר)
        next();
    } catch (err) {
        console.log("שגיאה ב-Middleware של protectRoute:", err.message);
        return res.status(500).json({ error: "שגיאת שרת פנימית" });
    }
};