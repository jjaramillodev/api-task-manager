import { State } from '@schemas/state.schema'

export const createStates = async (): Promise<void> => {
	const states = await State.findAll()
	if (states.length !== 0) return
	await State.bulkCreate([
		{ title: 'pending', description: 'Tarea pendiente' },
		{ title: 'progress', description: 'Tarea en progreso' },
		{ title: 'complete', description: 'Tarea completada' },
		{ title: 'late', description: 'Tarea atrasada' }
	])
}
