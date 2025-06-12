import express from "express"
const app = express()

import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3000

import connectDB from "./config/config"
connectDB()

app.use(express.json());
import { appRoute } from "./appRoute"
appRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
