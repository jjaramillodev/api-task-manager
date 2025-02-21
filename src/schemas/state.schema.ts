import { sequelize } from '@core/sequelize'
import { DataTypes, Model } from 'sequelize'
import { Task } from './task.schema'

export class State extends Model {
	public id!: number
	public title!: string
	public description!: string
}

State.init(
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
		description: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: 'states',
		timestamps: false
	}
)

State.hasMany(Task, {
	foreignKey: 'state_id',
	sourceKey: 'id'
})

Task.belongsTo(State, {
	foreignKey: 'state_id',
	targetKey: 'id',
	as: 'state'
})
