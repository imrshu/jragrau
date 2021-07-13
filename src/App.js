import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About_us from './components/About_us'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <div className="boxed">
        <Header />
        <Footer />
        <Navbar />
        <About_us />
      </div>
    </BrowserRouter>
  )
}


export default App