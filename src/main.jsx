import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './components/Pages/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <LandingPage/>
  </StrictMode>,
)
