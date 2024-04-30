const Card = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50 "
      style={{
        transform: `translate(${x}, ${y}) `
      }}
    >
      <div
        className="text-foreground rounded-lg flex justify-center
        items-center custom-bg "
      >
        <span className="p-4 w-14 h-14  m-5 relative   hover:text-accent">22222</span>
      </div>
    </div>
  )
}

export default Card
