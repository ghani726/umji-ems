// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './App.jsx'
import AuthContext from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <App></App>
  </AuthContext>
)
