# mern---twitter

<img width="562" height="926" alt="image" src="https://github.com/user-attachments/assets/73ddd610-5af7-4124-a6f8-4ee750a6c878" />


MERN - X Twitter Clone

אפליקציית רשת חברתית Full-Stack בהשראת X (טוויטר), שנבנתה מאפס ב-MERN Stack, מותאמת לסביבת Production, וכוללת לוקליזציה מלאה לעברית ותמיכה בכיווניות מימין לשמאל (RTL).

A full-stack social media web application inspired by X (Twitter), built from scratch with the MERN stack, optimized for production, and fully localized into Hebrew with RTL support.

🌐 **אתר חי / Live Demo:** https://mern-twitter-5uri.onrender.com

---

### ✨ פיצ'רים מרכזיים | Key Features
* **אימות והרשאות (Authentication):** הרשמה והתחברות מאובטחת באמצעות JWT השמור ב-HTTP-only cookies והצפנת סיסמאות עם bcrypt.
* **פיד חברתי ופוסטים (Social Feed):** יצירת פוסטים, העלאת תמונות, לייקים, תגובות ומחיקת פוסטים.
* **מערכת מעקבים והצעות (Follow System):** אפשרות מעקב/הסרת מעקב והצעת משתמשים חדשים למעקב (Suggested Users).
* **ניהול פרופיל (Profile Management):** עריכת פרטי משתמש, העלאת תמונת פרופיל ותמונת נושא (באמצעות Cloudinary).
* **התראות (Notifications):** עדכונים על לייקים חדשים ומעקבים בזמן אמת.
* **תמיכה מלאה בעברית (RTL):** התאמת כלל רכיבי הממשק לקריאה וכתיבה מימין לשמאל.

---

### 🛠️ סביבה טכנולוגית | Tech Stack
* **צד לקוח (Frontend):** React, Vite, Tailwind CSS, DaisyUI, TanStack Query (React Query), React Icons.
* **צד שרת (Backend):** Node.js, Express v5, JWT.
* **מסד נתונים ומדיה (Database & Cloud):** MongoDB Atlas (Mongoose), Cloudinary API.
* **פריסה וניהול חבילות (DevOps & Tooling):** Render, pnpm.

---

### 🚀 הפעלה מקומית | Quick Start

1. **שכפול ה-Repository:**
   ```bash
   git clone [https://github.com/eylommaayan/mern-twitter.git](https://github.com/eylommaayan/mern-twitter.git)
   cd mern-twitter
