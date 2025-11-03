import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} BioMed4Youth. All rights reserved.</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://linktr.ee/biomed4youth" target="_blank" rel="noopener noreferrer" className="hover:underline">Linktree</a>
          <a href="https://www.instagram.com/biomed4youth/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  )
}