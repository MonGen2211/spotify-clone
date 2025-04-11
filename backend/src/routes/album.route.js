import express from "express";
import { getAlbumId, getAllAlbums } from "../controllers/album.controller.js";

const router = express.Router();

router.get("/getAllAlbums", getAllAlbums);
router.get("/:albumId", getAlbumId);

export default router;
