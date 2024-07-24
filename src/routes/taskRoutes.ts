import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

const router = Router()


router.get('/', TaskController.getAllTasks)

router.post('/', TaskController.createTask)

router.get('/:id', TaskController.getTaskById)

router.put('/updated/:id', TaskController.updatedById)

router.delete('/deleteTask/:id', TaskController.deleteByIdd)


export default router