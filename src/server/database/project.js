import Sequelize from 'sequelize'
import databaseApi from './databaseApi'

const Project = databaseApi.define('projects', {
	name: {
		primaryKey: true,
		type: Sequelize.STRING,
		field: 'name'
	},
	language: {
		type: Sequelize.STRING,
		field: 'language'
	},
	description: {
		type: Sequelize.STRING,
		field: 'description'
	}},
{
	freezeTableName: true
})

export default Project
