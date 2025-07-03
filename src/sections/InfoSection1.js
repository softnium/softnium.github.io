import React from 'react'
import icon1 from '../assets/images/payment_tracking.svg'
import icon2 from '../assets/images/payment_reminder.svg'
import icon3 from '../assets/images/easy_ops.svg'
import icon4 from '../assets/images/report_gen.svg'
import icon5 from '../assets/images/whatsapp.svg'

export default function InfoSection1() {
  return (
    <section className="bg-[#10181F] text-white px-4 py-16 rounded-[2rem] max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Features</h2>
          <p className="text-gray-300">
            It is a CRM for tracking payment and managing new leads to the system & Eas business operations, helps payment tracking and report generation
          </p>
          <button className="bg-[#BBF246] text-[#192126] font-semibold px-6 py-2 rounded-full hover:bg-lime-400 transition-all">
            DISCOVER ALL FEATURES
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          {/* Feature Card 1 */}
          <div className="bg-white text-black p-4 rounded-xl border-lime-400 border shadow-md">
            <img src={icon1} alt="Payment Tracking" className="h-10 mb-2" />
            <h3 className="font-semibold">Payment Tracking</h3>
            <p className="text-sm text-gray-600">Execute trades seamlessly without staying logged in.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white text-black p-4 rounded-xl shadow-md">
            <img src={icon2} alt="Payment Reminder" className="h-10 mb-2" />
            <h3 className="font-semibold">Payment Reminder</h3>
            <p className="text-sm text-gray-600">Get instant order and account notifications via Telegram.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white text-black p-4 rounded-xl shadow-md">
            <img src={icon3} alt="Easy Operations" className="h-10 mb-2" />
            <h3 className="font-semibold">Eas business operations</h3>
            <p className="text-sm text-gray-600">One-click solutions for discrepancies in positions.</p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white text-black p-4 rounded-xl shadow-md">
            <img src={icon4} alt="Report Generation" className="h-10 mb-2" />
            <h3 className="font-semibold">Report Generation</h3>
            <p className="text-sm text-gray-600">Currently supporting 1k companies and counting.</p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white text-black p-4 rounded-xl shadow-md col-span-1 sm:col-span-2">
            <img src={icon5} alt="Whatsapp Communication" className="h-10 mb-2" />
            <h3 className="font-semibold">Whatsapp Communication</h3>
            <p className="text-sm text-gray-600">Currently supporting 1k companies and counting.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
