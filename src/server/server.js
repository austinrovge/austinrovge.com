import express from 'express'
import routes from './routes'
import { updateProjects } from './controllers/projectController'

const app = routes(express)
let PORT = process.env.PORT || 8080

app.listen(PORT, () => {
	console.log('Server listening on port: ' + PORT)
	updateProjects(new Date())
})
