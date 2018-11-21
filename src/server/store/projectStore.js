import Projects from '../database/project'
import Promise from 'bluebird'

export const storeProject = projectData => {
	return new Promise((resolve, reject) => {
		Projects.findOrCreate({
			where: {
				name: projectData.name
			},
			defaults: projectData
		}).spread((project, created) => {
			if (created) {
				console.log('Project Created')
				resolve(project)
			} else {
				Projects.update(projectData, { where: { name: projectData.name }})
					.then(updatedProject => {
						console.log('Project Updated')
						resolve(updatedProject)
					}).catch(error => {
						reject(error)
					})
			}
		})
	})
}

export const getAllProjects = () => {
	return new Promise((resolve, reject) => {
		Projects.findAll()
			.then(results => {
				resolve(results)
			})
			.catch(error => {
				reject(error)
			})
	})
}
