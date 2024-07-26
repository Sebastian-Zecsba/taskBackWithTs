import express from 'express'
import { connectDB } from './config/db'
import taskRoutes from './routes/taskRoutes'
import cors from 'cors'
import corsConfig from './config/cors'

connectDB()

const app = express()

app.use(cors(corsConfig))

app.use(express.json())

app.use('/api/task', taskRoutes)
export default app