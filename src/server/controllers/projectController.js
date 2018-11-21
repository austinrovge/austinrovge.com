import { getAllProjects } from '../store/projectStore'
import 'babel-polyfill'

export default async (req, res) => {

	const projects = await getAllProjects()

	let allProjects = []

	projects.forEach(project => {
		allProjects.push({
			name: project.name,
			html_url: project.html_url,
			description: project.description,
			languages_url: project.languages_url,
			homepage: project.homepage,
			language: project.language
		})
	})

	res.send(allProjects)
}
