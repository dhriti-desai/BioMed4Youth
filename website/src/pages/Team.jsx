import React from 'react'

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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Our Team</h1>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center w-80"
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
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Advisory Board</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 text-center relative z-10">
              BioMed4Youth is a student-led organization by students, for students. Our mission is to 
              create accessible opportunities and mentorship for young minds passionate about biomedical 
              sciences and healthcare innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}