import express from "express";
import {createStudent,getAllStudent} from '../controllers/studentController.js'


const router = express.Router();
router.post('/data',createStudent);
router.get('/data',getAllStudent);
export default router;