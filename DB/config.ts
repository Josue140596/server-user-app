import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://bryan:${process.env.DB_PASSWORD}@bryan.qkjgw.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority&ssl=true`
    );
    console.log("==> DB is connected");
  } catch (error) {
    throw new Error("Doesn't have connect to DB");
  }
};