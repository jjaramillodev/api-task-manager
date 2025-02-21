import { TaskWithStateI } from '@interfaces/task-response.interface'
import { State } from 'src/schemas/state.schema'
import { Task } from 'src/schemas/task.schema'

export class TasksModel {
	getTasks = async (): Promise<TaskWithStateI[]> => {
		const tasks = await Task.findAll({
			attributes: ['id', 'title', 'expiration_date'],
			include: {
				model: State,
				attributes: ['title', 'description'],
				as: 'state'
			}
		})
		return tasks as unknown as TaskWithStateI[]
	}
}
