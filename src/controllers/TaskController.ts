import {Request, Response } from 'express'
import Task from '../models/Task'

export class TaskController {

    static getAllTasks = async (req: Request, res: Response) => {
        try {
            const result = await Task.findAll()
            
            return res.json(result)
        } catch (error) {
            console.error('Error al traer los datos', error)
            res.status(500).json({error: 'Hubo un error'})
        }

    }
    
    static createTask = async ( req: Request, res: Response) => {

        try {
            const createTask = await Task.create(req.body)
            console.log('Task create succefully')
            res.json(createTask)

        } catch (error) {
            res.json({error: 'Hubo un error al crear la tarea'})
        }
    }

    static getTaskById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const taskById = await Task.findByPk(id)

        if(!taskById){
            const error = new Error('Task not found')
            return res.json({error: error.message})
        }

        try{
            
            return res.json(taskById)
        }catch(error){
            res.json({error: 'Has been an error to find the task'})
        }
    }

}