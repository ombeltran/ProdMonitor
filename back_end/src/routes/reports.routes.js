import Router from 'express-promise-router';
import {
    createReport,
    deleteReport,
    getAllReports,
    getReportUser,
    updateReport
} from '../controllers/reports.controller.js';
import { isAuth } from '../middlewares/auth.middleware.js';
import { validateSchema } from '../middlewares/validate.middleware.js';
import { createReportsSchema, updateReportSchema } from '../schemas/reports.schema.js';

const router = Router();

router.get('/reports', isAuth, getAllReports);

router.get('/reports/:id', isAuth, getReportUser);

router.post('/reports', isAuth, validateSchema(createReportsSchema), createReport);

router.put('/reports/:id', isAuth, validateSchema(updateReportSchema), updateReport);

router.delete('/reports/:id', isAuth, deleteReport);

export default router;