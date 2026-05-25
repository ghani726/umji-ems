// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './App.jsx'
import AuthContext from './contexts/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'
import DataContext from './contexts/DataContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContext>
      <DataContext>
        <Toaster position="top-center" reverseOrder={false} />
        <App></App>
      </DataContext>
    </AuthContext>
  </BrowserRouter>
  
)
