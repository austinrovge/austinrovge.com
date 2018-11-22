import { scheduleJob } from 'node-schedule';
import axios from 'axios';
import 'babel-polyfill'
import { deleteInvalidProjects, getAllProjects, storeProject } from '../components/store/projectStore';

export const getProjects = async (req, res) => {

	const allProjects = await getAllProjects()

	let data = []

	allProjects.forEach(project => {
		data.push({
			name: project.name,
			html_url: project.html_url,
			description: project.description,
			languages_url: project.languages_url,
			homepage: project.homepage,
			language: project.language
		})
	})

	res.send(data)
}

export const updateProjects = time => {
	console.log('Projects updating at: ' + time)
	axios.get('https://api.github.com/users/austinrovge/repos')
		.then(results => {
			let validProjectNames = results.data.map(project => project.name)

			deleteInvalidProjects(validProjectNames)

			results.data.forEach(project => {
				storeProject(project)
			})
		}).catch(error => {
			console.log(error.response)
		})
}

scheduleJob('0 */1 * * *', time => {
	updateProjects(time)
})
