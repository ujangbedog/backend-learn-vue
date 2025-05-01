import { Router } from "express";
import { createBook } from "../controllers/bookController";
import multer from "multer";

const storage = multer.memoryStorage(); // atau diskStorage untuk simpan file di disk
const upload = multer({ storage });

const router = Router();

router.post("/books", upload.single("cover"), createBook);
// router.post("/books", createBook);

export default router;
