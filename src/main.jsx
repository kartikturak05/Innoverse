import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
     <BrowserRouter> 
    <App />
    </BrowserRouter>
  </StrictMode>
    
)
