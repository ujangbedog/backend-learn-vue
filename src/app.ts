import express from "express";
import helloRoutes from "./routes/helloRoutes";
import errorMiddleware from "./middlewares/errorMiddleware";

const app = express();

app.use(express.json());
app.use(helloRoutes);
app.use(errorMiddleware);

export default app;
