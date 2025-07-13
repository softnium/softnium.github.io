import React from 'react'
import apple from '../assets/images/apple_store.png'
import google from '../assets/images/play_store.svg'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg' // for X logo

export default function ContactUs() {
  return (
    <section id="contact" className="bg-[#12191F] text-white px-6 sm:px-10 py-10 rounded-3xl max-w-[1100px] mx-4 sm:mx-auto my-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
        
        {/* Left: Form */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-6">
            Contact <span className="text-lime-400">us</span>
          </h2>
          <form
            action="https://formspree.io/f/mnnzavng"  // 👈 Replace with your real Formspree endpoint
            method="POST"
            className="space-y-4">
            <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded-md text-black" />
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-4 py-2 rounded-md text-black" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded-md text-black" />
            <input type="text" name="location" placeholder="Location" className="w-full px-4 py-2 rounded-md text-black" />
            <input type="text" name="business_type" placeholder="Business Type" className="w-full px-4 py-2 rounded-md text-black" />
            <button
              type="submit"
              className="bg-lime-400 px-6 py-2 rounded-full font-semibold text-black hover:bg-lime-500">
              Submit
            </button>
          </form>

        </div>

        {/* Right: Icons & Buttonss */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <img src={instagram} alt="Instagram" className="h-8 w-8" />
            <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
            <img src={twitter} alt="X" className="h-8 w-8" />
          </div>
          <p className="text-lime-400 font-semibold text-xl mb-4">
            Download SOFTNIUM Now!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <img src={apple} alt="App Store" className="h-12" />
            <img src={google} alt="Google Play" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}
