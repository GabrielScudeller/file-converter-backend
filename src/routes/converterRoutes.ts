import { Router } from "express";
import { upload } from "../config/multer";
import { handleUpload } from "../controllers/converterController";

export const converterRoutes = Router();

// POST /converter/upload
converterRoutes.post("/upload", upload.single("file"), handleUpload);
