import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import reportsRoutes from './routes/reports.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';
import { pool } from "./db.js";
import { ORIGIN } from './config.js';

const app = express();

//Statics file
app.use(express.static('public'));

// Middlewares
app.use(cors({
    origin: ORIGIN,
    credentials: true
}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/api', (req, res) => res.json({message: "Welcome to my API"}));
app.get('/api/ping', async (req, res) => {
    const result = pool.query('SELECT NOW()');
    return res.json((await result).rows[0]);
});
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