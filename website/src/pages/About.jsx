import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">About BioMed4Youth</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
          <p className="text-gray-700">
            BioMed4Youth is a student-led global organization committed to empowering youth through accessible opportunities in research, outreach, and innovation. As an official branch of Medicine4Youth, we aim to inspire the next generation of biomedical leaders by providing platforms for students to engage in meaningful scientific exploration and leadership development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To create a world where every young person has access to quality biomedical education and mentorship opportunities, fostering a diverse and inclusive community of future innovators in health and biotechnology.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Our Impact</h3>
            <p className="text-gray-700">
              Over 500 students have participated in our programs, with a significant percentage pursuing STEM careers in college and beyond. Through our initiatives, we continue to inspire and prepare the next generation of biomedical professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}