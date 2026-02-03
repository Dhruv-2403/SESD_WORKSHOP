import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Database from './config/database';
import productRoutes from './routes/productRoutes';
import { logger, errorHandler } from './middlewares/middleware';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.get('/', (req: Request, res: Response) => {
    res.json({
        success: true,
        message: 'Product Management API',
        endpoints: {
            products: '/api/products'
        }
    });
});

app.use('/api/products', productRoutes);


app.use(errorHandler);


async function startServer(): Promise<void> {
    try {
        await Database.connect();

        app.listen(PORT, () => {
            console.log(`\n✓ Server running on port ${PORT}`);
            console.log(`✓ API: http://localhost:${PORT}/api/products\n`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}


process.on('SIGINT', async () => {
    console.log('\nShutting down...');
    await Database.disconnect();
    process.exit(0);
});

startServer();
