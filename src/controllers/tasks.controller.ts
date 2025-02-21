import { TasksModel } from '@models/tasks.model'
import { Request, Response } from 'express'

export class TasksController {
	private readonly model: TasksModel

	constructor({ model }: { model: TasksModel }) {
		this.model = model
	}

	getTasks = async (req: Request, res: Response) => {
		try {
			const tasks = await this.model.getTasks()
			res.json(tasks)
		} catch {
			res.status(500).json({ error: 'Error al obtener la lista de tareas' })
		}
	}
}
