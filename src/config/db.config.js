import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connectMongooseDB = async () => {
    const dbURI = process.env.DB_Link;
    try {
      // Establish the connection
      await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (err) {
      console.error('Error connecting to MongoDB', err.message);
      process.exit(1); // Exit process with failure
    }
  };
  
  export default connectMongooseDB;