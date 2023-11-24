import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import reportsRoutes from './routes/reports.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/api', (req, res) => res.json({message: "Welcome to my API"}));
app.use('/api', reportsRoutes);
app.use('/api', authRoutes);

// Error Hander
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
})

export default app;