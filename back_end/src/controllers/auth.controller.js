import bcrypt from 'bcrypt';
import { pool } from '../db.js';
import { createAccessToken } from '../libs/jwt.js';

export const login = async (req, res) => {
    const { user, user_password } = req.body;

    const result = await pool.query('SELECT * FROM users WHERE "user" = $1', [user,]);

    if (result.rowCount === 0) {
        return res.status(400).json({
            message: 'The user is not register',
        });
    }

    const validPassword = await bcrypt.compare(user_password, result.rows[0].user_password);

    if (!validPassword) {
        return res.status(400).json({
            message: 'The password is wrong'
        });
    }

    const token = await createAccessToken({id: result.rows[0].id});

    res.cookie('token', token, {
        httpOnly: true,
        // secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    return res.json(result.rows[0]);
};

export const signup = async (req, res, next) => {
    const { full_name, user, user_password } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(user_password, 10);

        const result = await pool.query('INSERT INTO users(full_name, "user", user_password) VALUES($1, $2, $3) RETURNING *', 
        [full_name, user, hashedPassword]);
        
        const token = await createAccessToken({id: result.rows[0].id});
        
        res.cookie('token', token, {
            httpOnly: true,
            // secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        return res.json(result.rows[0]);
    } catch (error) {
        if (error.code == "23505") {
            return res.status(400).json({
                message: "The user is already register"
            });
        }

        next(error);
    }
};

export const logout = (req, res) => {
    res.clearCookie('token');
    res.sendStatus(200);
};

export const register = (req, res) => res.send('registro de datos');

export const report = (req, res) => res.send('reporte de de productividad');