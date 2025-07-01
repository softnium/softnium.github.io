import React from 'react'

export default function ContactUs() {
  return React.createElement(
    'section',
    { style: { padding: '2rem' } },
    React.createElement('h2', null, 'Contact Us'),
    React.createElement(
      'form',
      { style: { maxWidth: '400px', margin: '0 auto' } },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Your Name',
        style: { width: '100%', marginBottom: '1rem' }
      }),
      React.createElement('input', {
        type: 'email',
        placeholder: 'Your Email',
        style: { width: '100%', marginBottom: '1rem' }
      }),
      React.createElement('textarea', {
        placeholder: 'Message',
        style: { width: '100%', marginBottom: '1rem' }
      }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Send'
      )
    )
  )
}
