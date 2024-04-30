import Link from 'next/link'

const ProjectsItem = ({ name, description, data, demoLink }) => {
  return (
    <Link
      href={demoLink}
      target={'_blank'}
      className="flex gap-2 justify-center items-center"
    >
      <div
        className="flex  justify-center items-center w-full relative rounded-lg overflow-hidden p-6
      custom-bg"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground">{name}</h2>
          <p className="text-muted">{description}</p>
        </div>
        <div className="self-end flex-1 mx-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-foreground">{new Date(data).toLocaleDateString()}</p>
      </div>
    </Link>
  )
}

export default ProjectsItem
