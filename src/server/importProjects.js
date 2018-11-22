import axios from 'axios'
import { scheduleJob }  from 'node-schedule'
import { storeProject } from './store/projectStore'

export const updateProjects = time => {
	console.log('Projects updating at: ' + time)
	axios.get('https://api.github.com/users/austinrovge/repos')
		.then(results => {
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
