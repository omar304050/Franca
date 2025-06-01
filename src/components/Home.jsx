import React from 'react'
import Head from './Head'
import AboutUs from './AboutUs'
import Products from './Products'
import OtherProducts from './OtherProducts'
import ContactUs from './ContactUs'
import WhatsAppButton from './WhatsAppButton'
import ScrollToTop from './ScrollToTop'

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <main className="flex-grow bg-[#0f1118]">
        <AboutUs />
        <Products />
        <OtherProducts />
        <ContactUs />
      </main>
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default Home 