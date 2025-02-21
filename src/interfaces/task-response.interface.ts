import { Task } from 'src/schemas/task.schema'

export interface TaskResponseI {
	message: string
	task?: Task
	tasks?: Task[]
}
