export default function SubPagesLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative py-20 px-16">
      <button>Home</button>
      {children}
    </div>
  )
}
