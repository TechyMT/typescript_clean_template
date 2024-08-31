import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';

configDotenv();

const mongodb_uri = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongodb_uri, {

        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure code
    }
};

export default connectDB;
