/*  Node_modules */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* Components */
import App from './App.jsx'
/* CSS */
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
