import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import install from '@twind/with-react'
import config from './twind.config'
import { clarity } from 'react-microsoft-clarity'
install(config) // twind
clarity.init('gn9c8tkj6y')
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
