import { Router } from "express";
import { sayHello } from "../controllers/helloController";

const router = Router();

// Endpoint /hello
router.get("/hello", sayHello);

export default router;
