import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// import { jsx as _jsx } from 'react/jsx-runtime.js'
const anotherUser = 'chai aur react'
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',target:'_blank'
  },
  'Click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
    
  // </StrictMode>,
  reactElement
)

