import React from 'react'

const events = [
  {
    title: "LabLeak Podcast Series",
    date: "New Episodes Weekly",
    time: "Podcast",
    location: "",
    description: "Introducing Biomed4Youth's new Podcast: LabLeak! Tune in and listen to insights from High School Students, University Students, and Professionals, where they explain their takes and perspectives on Biomedical Fields/Careers! Follow to learn more and be the first to know when a new episode drops!"
  }
]

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Our Podcast</h1>
        
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4 text-center">{event.title}</h3>
                <div className="text-center text-gray-600 mb-4">
                  <p className="text-lg">{event.date}</p>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{event.description}</p>
                <div className="text-center">
                  <a href="https://www.instagram.com/biomed4youth/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition font-medium">
                    Follow on Instagram for more info →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}