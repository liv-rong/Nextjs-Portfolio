import { getIcon } from '@/utils'
const RoundCard = ({ icon, children }) => {
  return (
    <div
      className="text-foreground  rounded-full flex justify-center
        items-center  custom-bg cursor-pointer z-20"
    >
      <span className=" p-4 w-16 h-16  relative  hover:text-accent">
        {getIcon(icon)}
        {children}
      </span>
    </div>
  )
}

export default RoundCard
