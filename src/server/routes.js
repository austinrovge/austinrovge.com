export default (express) => {

	const app = express()
	const router = express.Router()

	router.route('/getProjects').get(
		(req, resp) => {
			resp.send('GET PROJECTS ROUTE MESSAGE')
		}
	)

	app.use('/api', router)
	app.use(router)
	return app
}
