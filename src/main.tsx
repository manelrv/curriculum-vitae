import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import install from '@twind/with-react'
import config from './twind.config'
install(config)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
