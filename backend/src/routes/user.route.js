import express from "express";
import { portectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", portectRoute, getAllUsers);
// todo: getMessages

export default router;
