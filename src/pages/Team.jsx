import React from 'react'

const teamMembers = [
  {
    name: "Jiya Prajapati",
    role: "President",
    affiliation: "BioMed4Youth",
    bio: "19 years old and inspiring the next generation of biomedical changemakers, helping bridge the gap between high school curiosity and university level discovery.",
    image: null
  },
  {
    name: "Ayan",
    role: "President",
    affiliation: "BioMed4Youth",
    bio: "Passionate about empowering young minds in biomedical sciences, dedicated to creating pathways for students to explore cutting-edge research and innovation.",
    image: null
  },
  {
    name: "Neha Gopisetty",
    role: "Co-Founder & Socials Team",
    affiliation: "BioMed4Youth",
    bio: "I am a sophomore passionate about biology and healthcare, excited to create a platform to help others!",
    image: "/images/Screenshot 2025-10-07 180840.png"
  },
  {
    name: "Avishi Jain",
    role: "Co-Founder & Director of Operations",
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
        
        <div className="grid grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 text-center"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary/70">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 font-medium mb-1">{member.role}</p>
              <p className="text-xs text-gray-500 mb-2">{member.affiliation}</p>
              <p className="text-gray-700 text-xs leading-relaxed">{member.bio}</p>
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