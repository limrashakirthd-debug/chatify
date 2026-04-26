import express from "express";
// import multer from "multer";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();


// temporarily commented chatgpt suggestion
router.use(arcjetProtection);


// chatgpt
// Multer setup
// const storage = multer.memoryStorage();
// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
// });
// chatgpt

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put(
  "/update-profile",
  protectRoute,
//   upload.single("profilePic"),
  updateProfile,
);

router.get("/check", protectRoute, (req, res) =>
  res.status(200).json(req.user),
);

export default router;
