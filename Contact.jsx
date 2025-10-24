import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-12 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to hear from you! Reach out to us through any of the following channels:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div 
              initial={{opacity:0, x:-20}} 
              animate={{opacity:1, x:0}} 
              transition={{delay:0.2}}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📧</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-700 text-lg font-medium">
                biomed4youth@gmail.com
              </p>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, x:20}} 
              animate={{opacity:1, x:0}} 
              transition={{delay:0.3}}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
              <a 
                href="https://www.instagram.com/biomed4youth/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-lg font-medium"
              >
                @biomed4youth
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.4}}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-xl font-semibold text-primary mb-4">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linktr.ee/biomed4youth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition font-medium"
            >
              Visit Our Linktree
            </a>
            <a 
              href="https://www.instagram.com/biomed4youth/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/5 transition font-medium"
            >
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}