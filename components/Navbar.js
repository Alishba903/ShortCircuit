import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white '>
      <div className="logo text-lg font-bold">
        ShortCircuit
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/"><li>About</li></Link>
        <Link href="/"><li>Shorten</li></Link>
        <Link href="/"><li>Contact Us</li></Link>
        <li>
          <button>Try Now</button>
          <button>GitHub</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
