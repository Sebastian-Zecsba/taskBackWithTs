import express from 'express'
import { connectDB } from './config/db'
import taskRoutes from './routes/taskRoutes'

connectDB()

const app = express()

app.use(express.json())

app.use('/api/task', taskRoutes)
export default app