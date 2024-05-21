import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

//middlewares
app.use(
  cors({
    origin: process.env.CROSS_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());

app.use(morgan("dev"));

app.use(express.json({ limit: "12kb" }));

app.use(express.urlencoded({ limit: "12kb", extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("server start");
});

//routes
import { userRouter } from "./routes/user.router.js";
import { productRouter } from "./routes/product.router.js";
import { categoryRouter } from "./routes/category.router.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/category", categoryRouter);

export { app };
