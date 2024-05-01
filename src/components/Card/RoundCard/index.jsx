'use client'
import { motion } from 'framer-motion'
import { getIcon } from '@/utils'

const RoundCard = ({ icon, children }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-foreground  rounded-full flex justify-center
        items-center  custom-bg cursor-pointer z-20 "
    >
      <span className=" p-4 w-16 h-16  relative  hover:text-accent">
        {getIcon(icon)}
        {children}
      </span>
    </motion.div>
  )
}

export default RoundCard
