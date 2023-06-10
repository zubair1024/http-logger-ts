import mongoose, { ConnectionStates } from "mongoose";
import { variables } from "./variables";

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === ConnectionStates.connected) {
      return console.log("Already connected to MongoDB");
    }
    await mongoose.connect(variables.DB_URL as string);
    console.log("Connected to DB ✅");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export function disconnectDB() {
  return mongoose.disconnect();
}
