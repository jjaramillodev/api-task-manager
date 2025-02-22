import { express } from '@core/express'
import { Task } from 'src/schemas/task.schema'
import { transformStringToDate } from 'src/utils/string-to-date.util'
import request from 'supertest'

const api = request(express)

const initialTasks = [
	{
		title: 'Task 1',
		expiration_date: null // sin fecha de vencimiento
	},
	{
		title: 'Task 2',
		expiration_date: transformStringToDate('2025-02-21') // atrasada
	},
	{
		title: 'Task 3',
		expiration_date: transformStringToDate('2025-02-30') // próximo
	}
]

beforeEach(async () => {
	await Task.destroy({ where: {} })
	for (const note of initialTasks) {
		await api.post('/tasks').send(note)
	}
})

describe('GET /tasks', () => {
	it('should return 200 OK', async () => {
		const response = await api.get('/tasks').send()
		expect(response.status).toBe(200)
	})

	it('should return a list of tasks', async () => {
		const response = await api.get('/tasks').send()
		expect(response.body.tasks).toHaveLength(initialTasks.length)
	})

	it('should return a list of tasks verifying the expiration_date', async () => {
		const response = await api.get('/tasks').send()
		expect(response.body.tasks[0].state_id).toBe(1) // pending
		expect(response.body.tasks[1].state_id).toBe(4) // late
		expect(response.body.tasks[2].state_id).toBe(1) // pending
	})
})
