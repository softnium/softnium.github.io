import React from 'react'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg' 

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <div className="font-bold w-fit px-4 py-1 rounded-full text-lg mb-2" style={{ color: '#192126', backgroundColor: '#BBF246' }}>
            SOFTNIUM
          </div>

          <p className="text-sm">
            It is a CRM for tracking payment and managing new leads to the system
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-2">Our Features</h3>
          <ul className="text-sm space-y-1 md:columns-2 gap-x-4">
            <li>• Payment Tracking</li>
            <li>• Payment Reminder</li>
            <li>• Eas business operations</li>
            <li>• Report Generation</li>
            <li>• Whatsapp Communication</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>dumyemail@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+91 9579095949</span>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <img src={instagram} alt="Instagram" className="h-6 w-6" />
            <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
            <img src={twitter} alt="X" className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <hr className="my-6 border-gray-300" />
      <p className="text-center text-sm text-gray-500">
        Copyright © 2025 <span className="font-medium">SOFTNIUM</span> | All rights reserved.
      </p>
    </footer>
  )
}
