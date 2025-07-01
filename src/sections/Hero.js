import React from 'react'

export default function Hero() {
  return React.createElement(
    'section',
    { style: { padding: '4rem', textAlign: 'center', backgroundColor: '#f4f4f4' } },
    React.createElement('h1', null, 'Welcome to My React Website'),
    React.createElement('p', null, 'This is the hero section of the page')
  )
}
