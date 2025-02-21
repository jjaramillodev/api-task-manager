import { Router, type Request, type Response } from 'express'
import { tasksRouter } from './tasks.router'

export const managerRouter = Router()

managerRouter.get('/', (_req: Request, res: Response) => {
	res.send('ApiTaskManager running')
})

managerRouter.use('/tasks', tasksRouter)
