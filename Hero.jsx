import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section id="home" className="pt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Empowering the next generation of biomedical leaders
          </motion.h1>
          <motion.p initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.25}} className="mt-6 text-lg text-gray-700 max-w-xl">
            Biomed4Youth provides students with online resources, mentorship, and interactive digital programs to inspire curiosity and understanding in biomedical science.
          </motion.p>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.45}} className="mt-8 flex gap-4">
            <Link to="/events" className="inline-block bg-primary text-white px-6 py-3 rounded-md shadow hover:scale-105 transform transition">See Events</Link>
            <Link to="/about" className="inline-block bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-gray-50 transition shadow">Learn More</Link>
          </motion.div>
        </div>
        <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.3}} className="flex justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/biomedicine.jpg" 
                alt="Biomedicine" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-600">Programs · Workshops · Mentorship</div>
              <div className="mt-3 font-semibold">Get hands-on biomedical experience and mentorship.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}