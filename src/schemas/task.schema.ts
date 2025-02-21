import { sequelize } from '@core/sequelize'
import { DataTypes, Model } from 'sequelize'

export class Task extends Model {
	public id!: number
	public title!: string
	public expiration_date!: Date
	public state_id!: number
}

Task.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		expiration_date: {
			type: DataTypes.DATE
		},
		state_id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		}
	},
	{
		sequelize,
		tableName: 'tasks',
		timestamps: false
	}
)
