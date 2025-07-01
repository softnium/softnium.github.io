import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import InfoSection1 from './sections/InfoSection1'
import InfoSection2 from './sections/InfoSection2'
import ContactUs from './sections/ContactUs'
import Footer from './components/Footer'

export default function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Navbar),
    React.createElement(Hero),
    React.createElement(InfoSection1),
    React.createElement(InfoSection2),
    React.createElement(ContactUs),
    React.createElement(Footer)
  )
}
