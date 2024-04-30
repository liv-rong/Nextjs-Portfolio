import ProjectsItem from '../projectsItem'

const ProjectsList = ({ projects }) => {
  return (
    <div className="w-full max-w-4xl p-4 space-y-8">
      {projects.map((item) => {
        return (
          <ProjectsItem
            key={item.id}
            {...item}
          />
        )
      })}
    </div>
  )
}

export default ProjectsList
