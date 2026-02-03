import mongoose from 'mongoose';

class Database {
    static async connect(): Promise<void> {
        try {
            await mongoose.connect(process.env.MONGODB_URI as string);
            console.log('✓ Connected to MongoDB');
        } catch (error) {
            console.error('MongoDB connection error:', error);
            process.exit(1);
        }
    }

    static async disconnect(): Promise<void> {
        await mongoose.disconnect();
        console.log('✓ Disconnected from MongoDB');
    }
}

export default Database;
