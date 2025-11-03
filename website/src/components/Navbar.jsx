import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar(){
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  return (
    <nav className="bg-primary text-white fixed w-full top-0 z-40 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3">
          <Logo size={40} />
          <div className="font-semibold text-lg">BioMed4Youth</div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`hover:underline ${isActive('/') ? 'underline' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:underline ${isActive('/about') ? 'underline' : ''}`}>About</Link>
          <Link to="/mission" className={`hover:underline ${isActive('/mission') ? 'underline' : ''}`}>Mission</Link>
          <Link to="/team" className={`hover:underline ${isActive('/team') ? 'underline' : ''}`}>Team</Link>
          <Link to="/events" className={`hover:underline ${isActive('/events') ? 'underline' : ''}`}>Events</Link>
          <Link to="/contact" className={`font-medium px-4 py-2 rounded-md transition ${isActive('/contact') ? 'bg-white/20' : 'bg-white text-primary hover:bg-white/90'}`}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}