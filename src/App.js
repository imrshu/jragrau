import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
// import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className="boxed">
        <Header />
      </div>
    </BrowserRouter>
  )
}


export default App