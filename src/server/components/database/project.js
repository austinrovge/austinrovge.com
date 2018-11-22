import Sequelize from 'sequelize'
import databaseApi from './databaseApi'

export default databaseApi.define('projects', {
	name: {
		primaryKey: true,
		type: Sequelize.STRING,
		field: 'name'
	},
	description: {
		type: Sequelize.STRING,
		field: 'description'
	},
	homepage: {
		type: Sequelize.STRING,
		field: 'homepage'
	},
	html_url: {
		type: Sequelize.STRING,
		field: 'html_url'
	},
	language: {
		type: Sequelize.STRING,
		field: 'language'
	},
	languages_url: {
		type: Sequelize.STRING,
		field: 'languages_url'
	}},
{
	freezeTableName: true
})
