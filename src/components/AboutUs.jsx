import React from 'react'

function AboutUs() {
  return (
    <div className="w-full bg-[#0f1118] py-16 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full filter blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/5 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 font-playfair italic relative">
          About Us
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 md:w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h1>

        <div className="bg-[#0f1118]/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-16 border border-[#1a1c25] relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient"></div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 relative font-playfair italic">
            "France.. Where Quality Meets Elegance in Every Detail"
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 md:w-64 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full"></div>
          </h2>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed text-center max-w-4xl mx-auto font-playfair">
            In a rapidly competitive market, France stands out as a leading Egyptian brand in furniture manufacturing, offering a unique blend of high quality, innovative design, and competitive prices, making it the ideal choice for lovers of elegance and comfort.
          </p>

          <p className="text-lg md:text-2xl text-gray-300 mb-12 md:mb-16 leading-relaxed text-center max-w-4xl mx-auto font-playfair">
            At France, we believe that home is not just a place to live, but a reflection of your personality and refined taste. Therefore, we ensure:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-20">
            <div className="bg-[#1a1c25] p-6 md:p-12 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-1.5 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 md:mb-10 transform transition-all duration-500 group-hover:w-32 md:group-hover:w-40"></div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-white group-hover:text-blue-200 transition-colors duration-300 font-playfair italic">High Quality</h3>
              <p className="text-gray-400 text-base md:text-xl leading-relaxed font-playfair">Using the finest materials carefully selected to ensure durability and comfort.</p>
            </div>

            <div className="bg-[#1a1c25] p-6 md:p-12 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-1.5 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 md:mb-10 transform transition-all duration-500 group-hover:w-32 md:group-hover:w-40"></div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-white group-hover:text-purple-200 transition-colors duration-300 font-playfair italic">Modern Designs</h3>
              <p className="text-gray-400 text-base md:text-xl leading-relaxed font-playfair">Designs that suit all tastes, from luxurious classic to simple modern.</p>
            </div>

            <div className="bg-[#1a1c25] p-6 md:p-12 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-1.5 w-24 md:w-32 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-6 md:mb-10 transform transition-all duration-500 group-hover:w-32 md:group-hover:w-40"></div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-white group-hover:text-pink-200 transition-colors duration-300 font-playfair italic">Competitive Prices</h3>
              <p className="text-gray-400 text-base md:text-xl leading-relaxed font-playfair">Prices that match your aspirations without compromising on quality.</p>
            </div>
          </div>

          <p className="text-lg md:text-2xl text-gray-300 mb-12 md:mb-16 leading-relaxed text-center max-w-4xl mx-auto font-playfair">
            In this catalog, we present our distinguished collection that combines Egyptian authenticity with a modern touch, making your home an oasis of beauty and warmth.
          </p>

          <div className="text-center relative">
            <p className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform transition-all duration-500 hover:scale-105 font-playfair italic">
              France.. Because You Deserve the Best
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 md:w-64 h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs 