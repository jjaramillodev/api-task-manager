import { PORT } from '@core/config'
import { express } from '@core/express'
import { sequelize } from '@core/sequelize'

async function main(): Promise<void> {
	try {
		// iniciar la conexión con la base de datos
		await sequelize.sync({ force: false })
		// iniciar el servidor de express
		express.listen(PORT, () => {
			console.log(`Server running on port http://localhost:${PORT}`)
		})
	} catch (error) {
		console.error(error)
	}
}

main()
