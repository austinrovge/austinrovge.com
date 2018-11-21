import path from 'path'
import express from 'express'
import routes from './routes'
import './importProjects'

const app = routes(express)
let PORT = process.env.PORT || 8080

app.use('/', express.static(__dirname))
app.use(express.static(path.join(__dirname, '/../client')))
app.use('/favicon.ico', express.static(path.join(__dirname, '/../client/assets/favicons/favicon.ico')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../client/index.html'))
})

app.listen(PORT, () => {
	console.log('Server listening on port: ' + PORT)
})
