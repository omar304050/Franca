import React from 'react'

function ContactUs() {
  return (
    <div className="w-full bg-[#0f1118] py-8 pt-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 font-playfair italic relative">
          Contact Us
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[#1a1c25] p-8 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <h3 className="text-2xl font-semibold text-white mb-4 font-playfair">Get in Touch</h3>
                <p className="text-gray-400 mb-6 font-playfair">
                  We'd love to hear from you. Please fill out this form or send us an email.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 font-playfair">Email</p>
                      <p className="text-white font-playfair">info@france.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 font-playfair">Phone</p>
                      <p className="text-white font-playfair">+1 234 567 890</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 font-playfair">Address</p>
                      <p className="text-white font-playfair">123 Furniture Street, Design District</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1a1c25] p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 font-playfair">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#252730] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 font-playfair"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-playfair">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#252730] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 font-playfair"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-playfair">Message</label>
                  <textarea
                    className="w-full px-4 py-3 bg-[#252730] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 font-playfair h-32 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-playfair transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs 