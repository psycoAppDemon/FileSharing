import express from "express";
import { uploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
const router = express.Router();

router.post("/upload",upload.single("file") , uploadImage); // or router.post('/upload',<some_middlewaare> ,uploadImage);
router.get("/file/:fileId", getImage);
export default router;