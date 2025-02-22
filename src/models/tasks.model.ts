import { TaskI } from '@interfaces/task-response.interface'
import { Op } from 'sequelize'
import { State } from 'src/schemas/state.schema'
import { Task } from 'src/schemas/task.schema'
import { transformStringToDate } from 'src/utils/string-to-date.util'

export class TasksModel {
	getTasks = async (): Promise<TaskI[]> => {
		const tasks = await Task.findAll({
			attributes: ['id', 'title', 'expiration_date', 'state_id'],
			include: {
				model: State,
				attributes: ['title', 'description'],
				as: 'state'
			},
			order: [['id', 'ASC']]
		})
		return tasks as unknown as TaskI[]
	}

	createTask = async (
		title: string,
		expiration_date: string | null | undefined
	): Promise<TaskI> => {
		const formatted_date = transformStringToDate(expiration_date)
		return await Task.create({
			title,
			expiration_date: formatted_date,
			state_id: 1
		})
	}

	updateNextTaskState = async (id: number): Promise<TaskI> => {
		// Buscar la tarea por id
		const task = await Task.findByPk(id)
		// Si no existe la tarea, lanzar un error
		if (!task) {
			throw new Error('Tarea no encontrada')
		}
		// Si la tarea ya está finalizada, lanzar un error
		if (task.state_id === 3) {
			throw new Error('La tarea ya está finalizada')
		}
		// Actualizar el estado de la tarea
		const next_state_id = task.state_id + 1
		return await task.update({ state_id: next_state_id })
	}

	markTasksLate = async (): Promise<void> => {
		const now = new Date()
		await Task.update(
			{ state_id: 4 }, // 4 es el id del estado "late"
			{
				where: {
					expiration_date: {
						[Op.lte]: now, // menor o igual que la fecha actual
						[Op.ne]: null // que no sea nulo
					},
					state_id: {
						[Op.ne]: 3 // que no esté ya completada
					}
				}
			}
		)
	}
}
