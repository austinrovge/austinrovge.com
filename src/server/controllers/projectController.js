import { scheduleJob } from 'node-schedule'
import axios from 'axios'
import 'babel-polyfill'
import { deleteInvalidProjects, getAllProjects, storeProject } from '../components/store/projectStore'

export const getProjects = async (req, res) => {

	const projects = await getAllProjects()

	res.send(projects)
}

export const updateProjects = time => {
	console.log('Projects updating at: ' + time)
	axios.get('https://api.github.com/users/austinrovge/repos')
		.then(results => {
			let validProjectNames = []

			results.data.forEach(project => {
				storeProject(project)
				validProjectNames.push(project.name)
			})

			deleteInvalidProjects(validProjectNames)

		}).catch(error => {
			console.log(error.response)
		})
}

scheduleJob('0 */1 * * *', time => {
	updateProjects(time)
})
