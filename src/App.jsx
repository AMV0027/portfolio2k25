import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className='text-white bg-radial from-blue-500 to-black'>
      <div className='md:max-w-4xl mx-auto shadow-2xl bg-gradient-to-t from-blue-500 to-black'>
        < Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter >
        <Footer />
      </div >
    </div>
  )
}

export default App