import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Layout } from './components/Layout'
import { Work } from './pages/Work'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route path='/work' element={ <Work/> } />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
