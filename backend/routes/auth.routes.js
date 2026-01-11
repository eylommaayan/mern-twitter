import express from "express";

const router = express.Router();

router.get("/signup", singnup);

router.get("/login", (req, res) => {
  res.json({
    data: "Signup route",
  });
});

router.get("/logout", (req, res) => {
  res.json({
    data: "Signup route",
  });
});

export default router;
