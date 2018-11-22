import path from 'path'
import { getProjects } from './controllers/projectController'

export default express => {

	const router = express.Router()

	router.route('/getAllProjects').get(
		getProjects
	)

	const app = express()
	app.use('/api', router)
	app.use(router)

	app.use('/', express.static(__dirname))
	app.use(express.static(path.join(__dirname, '/../client')))
	app.use('/favicon.ico', express.static(path.join(__dirname, '/../client/assets/favicons/favicon.ico')))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname + '/../client/index.html'))
	})

	return app
}
