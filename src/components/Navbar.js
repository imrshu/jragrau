import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


class Navbar extends Component {
    render() {
        return (
            <header id="header" className="header header-classic clearfix">
                <div className="container">
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
                                    <li className="home">
                                        <Link to="/?q=slider">
                                        Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about_us">
                                        About</Link>
                                    </li>
                                    <li>
                                        <Link to="portfolio-v1.html">
                                        Products</Link>
                                        <ul className="submenu">
                                        <li>
                                            <Link to="portfolio-v2.html">
                                            Load Cells</Link>
                                        </li>
                                        <li>
                                            <Link to="portfolio-v3.html">
                                            Torque Sensors</Link>
                                        </li>
                                        <li>
                                            <Link to="portfolio-v4.html">
                                            Calibration Systems</Link>
                                        </li>
                                        <li>
                                            <Link to="portfolio-single-v1.html">
                                            Testing Systems</Link>
                                        </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="services.html">
                                        Custom Machinery</Link>
                                    </li>
                                    <li>
                                        <Link to="blog-fullwidth.html">
                                        Calibration</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogues">
                                        Catalogues</Link>
                                    </li>
                                    <li>
                                        <Link to="/software">
                                        Software</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact_us">
                                        Contact</Link>
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