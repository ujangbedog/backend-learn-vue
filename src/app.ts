import express from "express";
import helloRoutes from "./routes/helloRoutes";
import errorMiddleware from "./middlewares/errorMiddleware";

const app = express();
app.use(express.json());

// Menggunakan rute
app.use(helloRoutes);

// Middleware untuk menangani kesalahan
app.use(errorMiddleware);

export default app;
