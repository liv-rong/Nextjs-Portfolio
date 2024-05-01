// 'use client'
import ProjectsItem from '../projectsItem'

// import { motion } from 'framer-motion'
// const itemtest = {
//   hidden: { opacity: 0, y: 100 },
//   show: { opacity: 1, y: 0 }
//   // hidden: { scale: 0 },
//   // show: { scale: 1 }
// }
const ProjectsList = ({ projects }) => {
  return (
    <div className="w-full max-w-4xl p-4 space-y-8 z-20">
      {projects.map((item) => {
        return (
          <ProjectsItem
            key={item.id}
            {...item}
          />
        )
      })}
      {/*
      {projects.map((item) => {
        return (
          <motion.div
            variants={itemtest}
            key={item.id}
            className="p-2 border m-2"
          >
            <div>{item.id}</div>
          </motion.div>
        )
      })} */}
    </div>
  )
}

export default ProjectsList
