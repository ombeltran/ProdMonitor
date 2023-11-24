import { Router } from "express";
import { 
    report,
    register, 
    login, 
    logout, 
    signup 
} from "../controllers/auth.controller.js";
import { validateSchema } from '../middlewares/validate.middleware.js';
import { signupSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/login', validateSchema(loginSchema), login);

router.post('/signup', validateSchema(signupSchema), signup);

router.post('/logout', logout);

router.get('/report', report);

router.get('/register', register);



export default router;