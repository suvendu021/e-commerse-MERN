import mongoose from "mongoose";
import { MY_DB_NAME } from "../utils/constant.js";

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${MY_DB_NAME}`
    );
    console.log(
      "db connection istablish at host: ",
      dbConnection.connection.host
    );
  } catch (error) {
    console.log("error during connection of database", error.message);
  }
};

export { connectDB };
