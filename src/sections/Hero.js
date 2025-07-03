import React from 'react'
import bgImage from '../assets/images/hero_bg.svg'
import card1 from '../assets/images/card_client.svg'
import card2 from '../assets/images/card_revenue.svg'
import card3 from '../assets/images/card_stats.svg'
import card4 from '../assets/images/card_transactions.svg'

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center px-6 md:px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-10">
        {/* Left Text */}
        <div className="text-white space-y-6 max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black">
            A Single Platform For <br />
            Managing All Your Work
          </h1>
          <p className="text-gray-800 text-lg">
            Automate tasks and streamline processes <br />
            with an easy-to-use platform
          </p>
          <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-lime-500 transition-all">
            Contact Us!
          </button>
        </div>

        {/* Right Cards */}
        <div className="relative h-full w-full hidden md:block">
          {/* Position the 4 cards */}
          <img src={card1} alt="Client Card" className="absolute top-10 -left-20 w-40 lg:w-52 shadow-xl rounded-xl" />
          <img src={card2} alt="Revenue Card" className="absolute top-0 left-36 w-44 lg:w-56 shadow-xl rounded-xl" />
          <img src={card3} alt="Stats Card" className="absolute -top-20 -right-10 w-48 lg:w-60 shadow-xl rounded-xl" />
          <img src={card4} alt="Transaction Card" className="absolute top-52 right-2 w-48 lg:w-60 shadow-xl rounded-xl" />
        </div>
      </div>
    </section>
  )
}
