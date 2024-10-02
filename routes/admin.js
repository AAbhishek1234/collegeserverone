// routes/adminRoutes.js
import express from 'express';
import { registerAdmin, loginAdmin, } from '../controllers/adminController.js';
import { getAllStudent } from '../controllers/studentController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Register Admin (first-time setup)
router.post('/register', registerAdmin);

// Admin Login
router.post('/login', loginAdmin);

// Secure Route to Get All Students (Requires JWT authentication)
router.get('/students', verifyToken, getAllStudent);

export default router;
