import { TaskResponseI } from '@interfaces/task-response.interface'
import { TasksModel } from '@models/tasks.model'
import { Request, Response } from 'express'
import { taskZod } from 'src/zod/task.zod'

export class TasksController {
	private readonly model: TasksModel

	constructor({ model }: { model: TasksModel }) {
		this.model = model
	}

	getTasks = async (_req: Request, res: Response): Promise<void> => {
		let response: TaskResponseI
		try {
			const tasks = await this.model.getTasks()
			response = {
				message: 'Lista de tareas obtenida',
				tasks
			}
			res.status(200).json(response)
		} catch {
			response = {
				message: 'Error al obtener la lista de tareas'
			}
			res.status(500).json(response)
		}
	}

	createTask = async (req: Request, res: Response): Promise<void> => {
		let response: TaskResponseI
		try {
			// validar el body de la petición
			const result = taskZod.safeParse(req.body)
			// si hay errores en la validación
			if (!result.success) {
				response = {
					message:
						result.error.errors[0].message ??
						'Error en la validación de los datos'
				}
				res.status(400).json(response)
				return
			}
			// si los datos son validos
			const { title, expiration_date } = result.data
			// si la fecha de expiración no es nula, formatearla
			const expiration_date_formatted = expiration_date ?? null
			// crear la tarea
			await this.model.createTask(title, expiration_date_formatted)
			// enviar respuesta
			response = {
				message: 'Tarea creada satisfactoriamente'
			}
			res.status(201).json(response)
		} catch {
			response = {
				message: 'Error al crear la tarea'
			}
			res.status(500).json(response)
		}
	}
}
