import Sequelize, { Op } from 'sequelize'

export default new Sequelize('rovgedb', 'root', 'password', {
	host: 'localhost',
	port: 3306,
	dialect: 'mysql',
	omitNull: true,
	define: {
		timestamps: false
	},
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	operatorsAliases: {
		$notIn: Op.notIn
	}
})
