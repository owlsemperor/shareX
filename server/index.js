import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import imageRouter from './routes/route.js'
import cors from 'cors'
import { DBConnection } from './database/db.js'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', imageRouter)

const port = process.env.PORT || 3000
DBConnection()
app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`)
})
