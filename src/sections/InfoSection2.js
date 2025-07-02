import React from 'react'
import addClientsImg from '../assets/images/add_client.svg'
import monitorTrackImg from '../assets/images/monitor_track.svg'
import automateImg from '../assets/images/automate.svg'

export default function InfoSection2() {
  return (
    <section className="py-12 px-4 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        How It Works – <span className="text-black">Simple & Efficient</span>
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        CRM for tracking payment and managing new leads to the system
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <img src={addClientsImg} alt="Add Clients" className="rounded-xl shadow-md mb-4" />
          <h3 className="font-semibold text-lg">Add Clients</h3>
          <p className="text-gray-500 mt-2 text-sm">Set up client accounts in minutes.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative rounded-xl overflow-hidden mb-4">
            <img src={monitorTrackImg} alt="Monitor & Track" className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 w-full bg-[#BBF246]/80 text-[#192126] font-semibold py-2">
              Monitor & Track
            </div>
          </div>
          <p className="text-gray-500 mt-2 text-sm">Track positions and execute trades across accounts seamlessly.</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img src={automateImg} alt="Automate" className="rounded-xl shadow-md mb-4" />
          <h3 className="font-semibold text-lg">Automate</h3>
          <p className="text-gray-500 mt-2 text-sm">Ensure alignment with automated rebalancing and order copying.</p>
        </div>
      </div>
    </section>
  )
}
