import { useState } from 'react'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
 <header className="relative w-full h-screen bg-cover bg-center text-white bg-[url('./assets/Header.png')]">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-6 z-10">
        <div className="text-2xl font-semibold">Escape.</div>
        <ul className="flex space-x-8 text-sm tracking-wide">
          <li><a href="#" className="hover:underline">HOME</a></li>
          <li><a href="#" className="hover:underline">CATEGORIES</a></li>
          <li><a href="#" className="hover:underline">ABOUT</a></li>
          <li><a href="#" className="hover:underline">CONTACT</a></li>
        </ul>
      </nav>

      {/* Centered Text */}
      <div className="flex flex-col items-center justify-center h-full text-center z-10 relative">
        <h1 className="text-5xl font-bold mb-4">Let's do it together.</h1>
        <p className="mb-6">We travel the world in search of stories. Come along for the ride.</p>
        <button className="bg-[#DD783F] hover:bg-orange-600 text-white py-2 px-4 rounded">
          View Latest Posts
        </button>
      </div>
    </header>
    </>
  )
}

export default Header;
