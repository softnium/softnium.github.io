import React from 'react'

export default function Navbar() {
  return React.createElement(
    'nav',
    { style: { padding: '1rem', background: '#333', color: 'white' } },
    React.createElement('h2', null, 'My Website')
  )
}
