import React from 'react'

export default function Mission() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Mission</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to inspire and educate the next generation of biomedical professionals through innovative digital programs, virtual mentorship, and global research initiatives.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6">Our Programs</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Workshops</h3>
            <p className="text-gray-700">
              Online workshops covering topics from fundamental biology to advanced biomedical research concepts, designed to engage students worldwide.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Research Initiatives</h3>
            <p className="text-gray-700">
              Digital programs and collaborations that allow students to engage with current biomedical research projects remotely.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}