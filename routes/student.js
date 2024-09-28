import express from "express";
import {createStudent,getAllStudent} from '../controllers/studentcontroller.js'


const router = express.Router();
router.post('/data',createStudent);
router.get('/data',getAllStudent);
export default router;