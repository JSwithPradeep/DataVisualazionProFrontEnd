import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Data Visualazation </h1>
      <nav className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/entry" className="text-white hover:text-gray-300">Entry</Link>
        <Link to="/table" className="text-white hover:text-gray-300">Table</Link>
        <Link to="/chart" className="text-white hover:text-gray-300">Chart</Link>
        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
       
      
      </nav>
    </div>
  </header>
  )
}

export default Header