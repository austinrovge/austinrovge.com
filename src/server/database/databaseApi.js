import Sequelize, { Op } from 'sequelize'

export default new Sequelize('test', 'root', 'password', {
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
	},
	operatorsAliases: {
		$and: Op.and,
		$or: Op.or,
		$eq: Op.eq,
		$gt: Op.gt,
		$lt: Op.lt,
		$lte: Op.lte,
		$like: Op.like
	}
})
