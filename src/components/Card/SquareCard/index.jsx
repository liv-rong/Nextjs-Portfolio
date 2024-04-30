import clsx from 'clsx'

const SquareCard = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'custom-bg rounded-xl  flex items-center justify-center space-y-8 p-8',
        className
      )}
    >
      {children}
    </div>
  )
}

export default SquareCard
