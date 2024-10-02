import express from "express";
import {createStudent,getAllStudent} from '../controllers/studentController.js'
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();
router.post('/data',createStudent);
router.get('/data',verifyToken,getAllStudent);
export default router;