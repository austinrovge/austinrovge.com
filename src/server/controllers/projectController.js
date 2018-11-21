import { getAllProjects } from '../store/projectStore'
import 'babel-polyfill'

export default async (req, res) => {

	const data = await getAllProjects()

	res.send(JSON.stringify(data))
}
