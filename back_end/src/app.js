import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//middlewares
app.use(
  cors({
    origin: process.env.CROSS_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json({ limit: "12kb" }));

app.use(express.urlencoded({ limit: "12kb", extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("server start");
});

//routes
import { userRouter } from "./routes/user.router.js";

app.use("/api/v1/user", userRouter);

export { app };
