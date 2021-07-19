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
        <Switch>
          <Route path='/about_us' component={AboutUs}></Route>
          <Route path='/contact_us' component={ContactUs}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App