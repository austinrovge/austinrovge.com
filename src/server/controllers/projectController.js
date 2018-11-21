import getAllProjects from '../store/projectStore'
require('babel-polyfill')

export default async (req, res) => {

	const data = await getAllProjects()

	res.send(JSON.stringify(data))
}
