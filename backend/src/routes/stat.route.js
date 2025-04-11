import express from "express";
import { getStats } from "../controllers/stat.controller.js";
import { portectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", portectRoute, getStats);

export default router;
