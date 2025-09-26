import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <nav className='h-16 bg-gray-900 flex justify-between px-3 items-center text-white '>
      <div className="logo text-2xl font-bold">
        
         <Link href="/">ShortCircuit</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten"><button className="bg-gray-800 shadow-lg p-3 rounded-lg py-1 font-bold text-white">Try Now</button></Link>
          <Link href="/github"><button className="bg-gray-800 shadow-lg p-3 rounded-lg py-1 font-bold text-white">GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
