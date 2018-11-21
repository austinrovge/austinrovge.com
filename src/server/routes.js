import projectController from './controllers/projectController'

export default (express) => {

	const router = express.Router()

	router.route('/getAllProjects').get(
		projectController
	)

	const app = express()
	app.use('/api', router)
	app.use(router)

	return app
}
