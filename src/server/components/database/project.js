import Sequelize from 'sequelize'
import databaseApi from './databaseApi'

export default databaseApi.define('projects', {
	name: {
		primaryKey: true,
		type: Sequelize.STRING(500),
		field: 'name'
	},
	description: {
		type: Sequelize.STRING(500),
		field: 'description'
	},
	homepage: {
		type: Sequelize.STRING(500),
		field: 'homepage'
	},
	html_url: {
		type: Sequelize.STRING(500),
		field: 'html_url'
	},
	language: {
		type: Sequelize.STRING(500),
		field: 'language'
	},
	languages_url: {
		type: Sequelize.STRING(500),
		field: 'languages_url'
	}},
{
	freezeTableName: true
})
