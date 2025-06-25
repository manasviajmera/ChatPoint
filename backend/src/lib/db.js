import mongoose from "mongoose";
// Connect to MongoDB using Mongoose
// This function connects to the MongoDB database using Mongoose and logs the connection status.
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
     console.log('MongoDB connected : ${conn.connection.host}'); 
    } catch (error) {
    console.log("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
}