import express from "express";
import {
  getAllSongs,
  getFeaturedSongs,
  getMadeForYouSongs,
  getTrendingSongs,
} from "../controllers/song.controller.js";
import { portectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", portectRoute, requireAdmin, getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/mage-for-you", getMadeForYouSongs);
router.get("/trending", getTrendingSongs);

export default router;
