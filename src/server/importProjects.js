import axios from 'axios'
import { scheduleJob }  from 'node-schedule'
import { storeProject } from './store/projectStore'

const updateProjects = () => {
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
	updateProjects()
})

updateProjects()
