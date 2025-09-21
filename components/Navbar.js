import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-28 bg-purple-700 flex justify-between px-3 items-center text-white '>
      <div className="logo text-lg font-bold">
        ShortCircuit
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Shorten</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
