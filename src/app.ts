import express from "express";
import cors from "cors";

import homeRoutes from "./routes/homeRoutes";
import helloRoutes from "./routes/helloRoutes";
import todoRoutes from "./routes/todoRoutes";
import bookRoutes from "./routes/bookRoutes";
import orderRoutes from "./routes/orderRoutes";

//v2
import v2HomeRoutes from "./routes/v2/homeRoutes";
import v2UserRoutes from "./routes/v2/userRoutes";

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
app.use(orderRoutes);

//v2
app.use("/v2", v2HomeRoutes);
app.use("/v2", v2UserRoutes);

app.use(errorMiddleware);

export default app;
