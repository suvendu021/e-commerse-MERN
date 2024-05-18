import "dotenv/config";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`server is listen at http://localhost:${port}`);
    });
    app.on("error", (error) => {
      console.log("express can't interact with db", error);
      throw error;
    });
  })
  .catch((e) => {
    console.log("error during connection to db");
  });
