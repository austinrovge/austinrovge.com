import Projects from '../database/project'
import Promise from 'bluebird'

const getAllProjects = () => {
	return new Promise((resolve, reject) => {
		Projects.findAll()
			.then((results) => {
				resolve(results)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default getAllProjects
