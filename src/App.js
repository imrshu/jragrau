import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
      <div className="boxed">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about_us' component={AboutUs}></Route>
          <Route path='/contact_us' component={ContactUs}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App