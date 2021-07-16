import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'


function App() {
  return (
    <BrowserRouter>
      <div className="boxed">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App