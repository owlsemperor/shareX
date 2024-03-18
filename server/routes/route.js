import express from 'express'
const router = express.Router()
import upload from '../utils/upload.js'

import { uploadImage, downloadImage } from '../controllers/image-controller.js'

router.post('/upload', upload.single('file'), uploadImage)
router.get('/file/:fileId', downloadImage)

export default router
