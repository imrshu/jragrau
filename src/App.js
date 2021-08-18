import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Home from './components/homepage/Home'
import Softwares from './components/software/Softwares'
import Catalogues from './components/Catalogues'
import LoadCells from './components/products/LoadCells'
import TorqueSensors from './components/products/TorqueSensors'
import CallibrationSystem from './components/products/CallibrationSystem'
import TestingSystem from './components/products/TestingSystem'


function App() {
  return (
    <BrowserRouter>
      <div className="boxed">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about_us' component={AboutUs}></Route>
          <Route path='/contact_us' component={ContactUs}></Route>
          <Route path='/software' component={Softwares}></Route>
          <Route path='/catalogues' component={Catalogues}></Route>
          <Route path='/load_cells' component={LoadCells}></Route>
          <Route path='/torque_sensors' component={TorqueSensors}></Route>
          <Route path='/callibration_system' component={CallibrationSystem}></Route>
          <Route path='/testing_system' component={TestingSystem}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App