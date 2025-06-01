import React, { useState } from 'react'
import { products, categories } from '../Data'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="w-full bg-[#0f1118] py-16 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full filter blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/5 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 font-playfair italic relative">
          Our Products
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 md:w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-16">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-playfair text-sm md:text-lg transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-[#1a1c25] text-gray-400 hover:bg-[#252730]'
            }`}
          >
            All Products
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-playfair text-sm md:text-lg transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-[#1a1c25] text-gray-400 hover:bg-[#252730]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group bg-[#1a1c25] rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 md:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1118] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 font-playfair">{product.name}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base font-playfair">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-playfair">
                    ${product.price}
                  </span>
                  <button className="px-4 md:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm md:text-base font-playfair transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products 