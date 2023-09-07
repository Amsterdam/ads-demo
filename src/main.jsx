import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
