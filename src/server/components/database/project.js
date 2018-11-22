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
	html_url: {
		type: Sequelize.STRING(500),
		field: 'html_url'
	},
	created_at: {
		type: Sequelize.DATE,
		field: 'created_at'
	},
	updated_at: {
		type: Sequelize.DATE,
		field: 'updated_at'
	},
	homepage: {
		type: Sequelize.STRING(500),
		field: 'homepage'
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
