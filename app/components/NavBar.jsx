import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <header className="w-full">
    <nav className="w-full h-16 flex justify-between bg-sky-600 px-3 ">
      <div className="flex items-center gap-3 ">
        <h1 className="text-white">DEMO Streaming</h1>
        <Link href="/">
        <p className='text-white hover:underline cursor-pointer'>Home</p>
        </Link>
        
      </div>
      <div className="flex gap-5 items-center">
        <button className="text-white">
          Log in
        </button>
        <button className="bg-slate-600 w-36 h-fit text-white">
          Start your free trial
        </button>
      </div>
    </nav>
    <div className="w-full bg-slate-600 px-6 py-4">
      <h2 className="text-white">
        Popular Titles
      </h2>
    </div>
  </header>
  )
}
