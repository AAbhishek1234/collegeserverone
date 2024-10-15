import express from 'express'
import {createImage,fetchAllImages,  getImagesByCategory} from '../controllers/imagesController.js'
import multer from 'multer'

const storage = multer.memoryStorage();
const upload = multer({storage:storage})

const router = express.Router()

router.post('/create',upload.single("file"),createImage);
router.get('/fetchallimages',fetchAllImages);
router.get('/getcategory',getImagesByCategory)

export default router