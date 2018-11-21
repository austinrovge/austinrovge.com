import { getAllProjects } from '../store/projectStore'
import 'babel-polyfill'

export default async (req, res) => {

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
