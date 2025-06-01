import React from 'react'
import bed from '../assets/bed.jpg'

function Head() {
  return (
    <div className="relative h-screen w-full">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bed})` }}
      >
        <div className="absolute inset-0 bg-[#0f1118]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 font-playfair italic">
            France
          </h1>
          <p className="text-2xl text-gray-300 mb-12 font-playfair">
            Elegant furniture for your home.<br />
            Quality meets style in every detail.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-lg font-playfair transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105">
              Browse Products
            </button>
            <button className="px-8 py-4 bg-[#1a1c25] text-white rounded-full text-lg font-playfair transition-all duration-300 hover:bg-[#252730] transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 mb-2 font-playfair">Scroll Down</p>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Head 