import axios from 'axios'
import { scheduleJob }  from 'node-schedule'

scheduleJob('*/1 * * * *', (time) => {

	axios.get('https://api.github.com/users/austinrovge/repos')
		.then((results) => {
			console.log(results)
		}).catch((error) => {
			console.log(error.response)
		})
})
