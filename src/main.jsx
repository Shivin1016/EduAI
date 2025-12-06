import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import './index.css'
import App from './App.jsx'
const PUBLISHABLE_KEY = "pk_test_cHJlc2VudC1jb3JnaS00MC5jbGVyay5hY2NvdW50cy5kZXYk"; // get this from clerk dashboard

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
