import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <a href="/"><h1 className="text-lg font-semibold">Rule Engine</h1></a>
    </div>
  </header>
  )
}

export default Navbar