import express from "express";
import cors from "cors";

import homeRoutes from "./routes/homeRoutes";
import helloRoutes from "./routes/helloRoutes";
import todoRoutes from "./routes/todoRoutes";
import bookRoutes from "./routes/bookRoutes";

import errorMiddleware from "./middlewares/errorMiddleware";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(homeRoutes);
app.use(helloRoutes);
app.use(todoRoutes);
app.use(bookRoutes);
app.use(errorMiddleware);

export default app;
