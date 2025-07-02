import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center items-center mt-6">
      <div className="bg-white rounded-full px-6 py-2 flex items-center shadow-lg max-w-[90%] w-full md:w-[80%] justify-between">
        
        {/* Logo */}
        <div className="font-bold text-lg rounded-full px-4 py-1" style={{ backgroundColor: '#BBF246', color: '#192126' }}>
          SOFTNIUM
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-black">
          <li className="relative hover:text-lime-500">
            ABOUT US
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-lime-500 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative hover:text-lime-500">
            FEATURES
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-lime-500 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative hover:text-lime-500">
            HOW IT WORKS
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-lime-500 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative hover:text-lime-500">
            CONTACTS
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-lime-500 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="ml-4 text-white bg-black rounded-full px-4 py-2 text-sm hover:bg-lime-500 hover:text-black transition">
          CONTACT US !
        </button>
      </div>
    </nav>
  )
}
