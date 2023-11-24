import {pool} from '../db.js';

export const getAllReports = async (req, res) => {   
    const result = await pool.query('SELECT * FROM production WHERE user_id = $1', [req.userId]);
    console.log(result);
    return res.json(result.rows)
};

export const getReportUser = async(req, res) => {
    const result = await pool.query('SELECT * FROM production WHERE id = $1', [req.params.id,]);

    if(result.rowCount == 0) {
        return res.status(404).json({
            message: 'Does not exist a user with that id',
        });
    }
    return res.json(result.rows[0]);
};

export const createReport = async (req, res, next) => {
    const { type, model, serial_number, category, comment } = req.body;
    // db insert

    try {
        const result =await pool.query('INSERT INTO production ("type", model, serial_number, category, comment, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [type, model, serial_number, category, comment, req.userId]);
        
        res.json(result.rows[0]);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({
                message: 'This user already exists with this title',
            });
        }
        next(error);
    }

};

export const updateReport = async (req, res) => {
    const id = req.params.id;
    const { type, model, serial_number, category, comment, date } = req.body;

    const result = await pool.query('UPDATE production SET "type" = $1, model = $2, serial_number = $3, category = $4, comment = $5 WHERE id = $6 RETURNING *', [type, model, serial_number, category, comment, id]);

    if(result.rowCount == 0){
        return res.status(404).json({
            message: 'Does not exist a user with that id',
        });
    }
    return res.json(result.rows[0]);
};

export const deleteReport = async (req, res) => {
    const result = await pool.query('DELETE FROM production WHERE id = $1 RETURNING *', [req.params.id]);

    if(result.rowCount == 0){
        return res.status(404).json({
            message: 'Does not exist a user with that id',
        });
    }
    return res.sendStatus(204);
};