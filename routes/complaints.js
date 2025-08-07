import express from "express";
import {
  submitComplaint,
  checkAdmin,
} from "../controllers/complaintController.js";

const router = express.Router();

router.post("/submit", submitComplaint);
router.post("/admin-login", checkAdmin);

export default router;
