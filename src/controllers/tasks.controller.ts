import { TaskResponseI } from '@interfaces/task-response.interface'
import { TasksModel } from '@models/tasks.model'
import { Request, Response } from 'express'

export class TasksController {
	private readonly model: TasksModel

	constructor({ model }: { model: TasksModel }) {
		this.model = model
	}

	getTasks = async (_req: Request, res: Response): Promise<void> => {
		try {
			const tasks = await this.model.getTasks()
			const response: TaskResponseI = {
				message: 'Lista de tareas obtenida',
				tasks
			}
			res.status(200).json(response)
		} catch {
			const response: TaskResponseI = {
				message: 'Error al obtener la lista de tareas'
			}
			res.status(500).json(response)
		}
	}
}
