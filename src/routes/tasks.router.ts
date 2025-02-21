import { TasksController } from '@controllers/tasks.controller'
import { TasksModel } from '@models/tasks.model'
import { Router } from 'express'

export const tasksRouter = Router()

const tasksController = new TasksController({ model: new TasksModel() })

tasksRouter.get('/', tasksController.getTasks)
