import express from "express";
import homeRoutes from "./routes/homeRoutes";
import helloRoutes from "./routes/helloRoutes";
import todoRoutes from "./routes/todoRoutes";
import errorMiddleware from "./middlewares/errorMiddleware";

const app = express();

app.use(express.json());
app.use(homeRoutes);
app.use(helloRoutes);
app.use(todoRoutes);
app.use(errorMiddleware);

export default app;
