import { z } from 'zod'

export const taskValidator = z.object({
	title: z
		.string()
		.max(255, 'El título no puede superar los 255 caracteres')
		.nonempty('El título no puede estar vacío'),
	expiration_date: z.string().nullable().optional()
})
