import Projects from '../database/project'

export const storeProject = async projectData => {
	const [project, wasCreated] = await Projects.findOrCreate({
		where: {
			name: projectData.name
		},
		defaults: projectData
	});

	if (wasCreated) {
		return project
	} else {
		 return await Projects.update(projectData, { where: { name: projectData.name  }})
	}
}

export const deleteInvalidProjects = validProjectNames => {
	Projects.destroy({
		where: {
			name: {
				$notIn: validProjectNames
			}
		}
	})
}

export const getAllProjects = async () => {
	return await Projects.findAll()
}
