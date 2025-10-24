import React from 'react'
import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-primary mb-8">Our Mission</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to inspire and educate the next generation of biomedical professionals through innovative digital programs, virtual mentorship, and global research initiatives.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6">Our Programs</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{opacity:0, x:-20}} 
            animate={{opacity:1, x:0}} 
            transition={{delay:0.1}}
            className="rounded-xl shadow-lg p-6"
            style={{backgroundColor: '#ffffff', backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e8f5e8' fill-opacity='0.15'%3E%3Cpath d='M20 20h-8v-8h8v8zm0 0h8v8h-8v-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '25px 25px'}}
          >
            <h3 className="text-xl font-semibold text-primary mb-3">Workshops</h3>
            <p className="text-gray-700">
              Online workshops covering topics from fundamental biology to advanced biomedical research concepts, designed to engage students worldwide.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity:0, x:20}} 
            animate={{opacity:1, x:0}} 
            transition={{delay:0.2}}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">Research Initiatives</h3>
            <p className="text-gray-700">
              Digital programs and collaborations that allow students to engage with current biomedical research projects remotely.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  )
}