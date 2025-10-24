import React from 'react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: "Neha Gopisetty",
    role: "Co-Founder/Co-President",
    affiliation: "BioMed4Youth",
    bio: "I am a sophomore passionate about biology and healthcare, excited to create a platform to help others!",
    image: "/images/Screenshot 2025-10-07 180840.png"
  },
  {
    name: "Avishi Jain",
    role: "Co-Founder/Co-President",
    affiliation: "BioMed4Youth",
    bio: "I am a rising sophomore passionate about medical innovation and research with real-world impact, wanting to build opportunities for students interested in biomed!",
    image: "/images/Screenshot 2025-10-07 180852.png"
  }
]

export default function Team() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Our Team</h1>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay: index * 0.1}}
              className="bg-white rounded-xl shadow-lg p-6 text-center w-80 relative overflow-hidden"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2fe' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }}
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Photo</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
              <p className="text-gray-600 font-medium mb-1">{member.role}</p>
              <p className="text-sm text-gray-500 mb-3">{member.affiliation}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Advisory Board</h2>
          <div 
            className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e8f5e8' fill-opacity='0.08'%3E%3Cpath d='M20 20h-8v-8h8v8zm0 0h8v8h-8v-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}
          >
            <p className="text-gray-700 text-center relative z-10">
              BioMed4Youth is a student-led organization by students, for students. Our mission is to 
              create accessible opportunities and mentorship for young minds passionate about biomedical 
              sciences and healthcare innovation.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}