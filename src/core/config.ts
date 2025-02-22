import { config } from 'dotenv'

config()

export const {
	PORT = 80,
	DB_HOST = '',
	DB_NAME = '',
	DB_USER = '',
	DB_PASSWORD = ''
} = process.env
