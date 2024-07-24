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

    static updatedById = async (req: Request, res: Response) => {

        try {
            const { id } = req.params;
            const { title, description} = req.body;
    
            const taskToUpdate = await Task.findByPk(id)

            await taskToUpdate?.update({title, description})
    
            return res.json(taskToUpdate)
        } catch (error) {
            console.log({error: 'Hubo un error'})
        }
    }

    static deleteByIdd = async (req: Request, res: Response) => {
        const { id } = req.params;

        if(!id){
            const error = new Error('Task not found')
            return res.json({error: error.message})
        }

        try {
            
            const taskDeleted = await Task.destroy({
                where: {
                    id: Number(id)
                }
            })

            if (taskDeleted === 0) {
                return res.status(404).json({ error: 'Task not found' });
            }

            return res.json(`Correctly deleted task with id = ${taskDeleted} `)

        } catch (error) {
            console.log({error: 'Hubo un error'})
        }
    }

}