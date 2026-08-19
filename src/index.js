import cors from 'cors';
import adminRouter from './routes/adminRouter.js'
import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv({
    path: '.env'
});
const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(adminRouter)

app.listen(process.env.APP_PORT, () => {
    console.log(`Process is running on ${process.env.APP_URL}:${process.env.APP_PORT}`);

})