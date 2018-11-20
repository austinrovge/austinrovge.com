import path from 'path'
import favicon from 'serve-favicon'
import express from 'express'
import routes from './routes'

const app = express()
const router = express.Router()
let PORT = process.env.PORT || 8080

routes(app, router)
app.use(router)
app.use('/', express.static(__dirname))
app.use(express.static(path.join(__dirname, '/../client')))
// app.use(favicon(path.join(__dirname, 'src', '/assets/favicons/favicon.ico')))
app.use('/favicon.ico', express.static(path.join(__dirname, '/../client/assets/favicons/favicon.ico')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/index.html'))
})

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT)
})