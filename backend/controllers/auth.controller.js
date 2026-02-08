import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// פונקציית הרשמה
export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "פורמט אימייל לא תקין" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "שם המשתמש כבר תפוס" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "כתובת האימייל כבר קיימת במערכת" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "הסיסמה חייבת להכיל לפחות 6 תווים" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        followers: newUser.followers,
        following: newUser.following,
        profileImg: newUser.profileImg,
        coverImg: newUser.coverImg,
      });
    } else {
      res.status(400).json({ error: "נתוני משתמש לא תקינים" });
    }
  } catch (error) {
    console.log("שגיאה בקונטרולר ההרשמה:", error.message);
    res.status(500).json({ error: "שגיאת שרת פנימית" });
  }
};

// פונקציית התחברות
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "שם משתמש או סיסמה שגויים" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      followers: user.followers,
      following: user.following,
      profileImg: user.profileImg,
      coverImg: user.coverImg,
    });
  } catch (error) {
    console.log("שגיאה בקונטרולר ההתחברות:", error.message);
    res.status(500).json({ error: "שגיאת שרת פנימית" });
  }
};

// פונקציית התנתקות
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "התנתקת מהמערכת בהצלחה" });
  } catch (error) {
    console.log("שגיאה בקונטרולר ההתנתקות:", error.message);
    res.status(500).json({ error: "שגיאת שרת פנימית" });
  }
};

// פונקציה לקבלת פרטי המשתמש המחובר
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log("שגיאה בקונטרולר getMe:", error.message);
    res.status(500).json({ error: "שגיאת שרת פנימית" });
  }
};