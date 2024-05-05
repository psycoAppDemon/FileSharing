import mongoose from "mongoose";
import dotenv from "dotenv";

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connetion established");
  } catch (error) {
    console.error(error.message);
  }
};

export default DBConnection;
