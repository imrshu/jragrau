import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/logo.png'


class Navbar extends Component {
    render() {
        return (
            <header id="header" className="header header-classic clearfix">
                <div className="container" style={{'margin': 0, 'padding': 0}}>
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="header-wrap clearfix">
                            <div id="logo" className="logo">
                            <Link to="/">
                            <img src={logo} alt="Jragrau Industries Brand Logo" width="150"/></Link>
                            </div>
                            
                            <div className="nav-wrap">
                            <div className="btn-menu"> </div>
                            <nav id="mainnav" className="mainnav">
                                <ul className="menu">
                                    <li>
                                        <NavLink exact activeClassName="active" to="/">
                                        Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to="/about_us">
                                        About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to="portfolio-v1.html">
                                        Products</NavLink>
                                        <ul className="submenu">
                                        <li>
                                            <NavLink activeClassName="active" to="/load_cells">
                                            Load Cells</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" to="/torque_sensors">
                                            Torque Sensors</NavLink>
                                        </li>
                                        <li>
                                            <NavLink  activeClassName="active" to="/callibration_system">
                                            Calibration Systems</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" to="/testing_system">
                                            Testing Systems</NavLink>
                                        </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to="services.html">
                                        Custom Machinery</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to="blog-fullwidth.html">
                                        Calibration</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to="/catalogues">
                                        Catalogues</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to="/software">
                                        Software</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to="/contact_us">
                                        Contact</NavLink>
                                    </li>
                                    <li>
                                            <div className="show-search" style={{'position': 'absolute', 'top':'-50px'}}>
                                                <a href="index-header-classic.html#"><i className="fa fa-search"></i></a>                
                                            </div>
                                    </li>
                                </ul>
                            </nav>
                            </div>
                            <div className="sidebar">
                                    <div className="widget widget-search top-search">                        
                                        <form action="index-header-classic.html#" id="searchform" method="get">
                                            <div>
                                                <input type="text" id="s" className="sss" placeholder="Type & Hit Enter..."/>
                                                <input type="submit" value="" id="searchsubmit"/>
                                            </div>
                                        </form>
                                    </div>
                                </div> 
                        </div>
                    </div>
                </div>
                </div>
</header>
)
}
}
export default Navbar