import Sequelize from 'sequelize'

const databaseApi = new Sequelize('test', 'root', 'password', {
	host: 'localhost',
	port: 3306,
	dialect: 'mysql',
	define: {
		timestamps: false
	},
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
})

export default databaseApi
