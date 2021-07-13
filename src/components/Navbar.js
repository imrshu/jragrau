import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <header id="header" className="header header-classic clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="header-wrap clearfix">
                                <div id="logo" className="logo"><Link to="index.html" rel="home"> <img src={logo} alt="Jragrau Industries Brand Logo" width="150"/> </Link></div>
                                <div className="nav-wrap">
                                    <div className="btn-menu"> </div>
                                    <nav id="mainnav" className="mainnav">
                                        <ul className="menu">
                                        <li className="home">
                                            <Link to="index.html">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="about.html">About</Link>
                                        </li>
                                        <li>
                                            <Link to="portfolio-v1.html">Products</Link>
                                            <ul className="submenu">
                                                <li><Link to="portfolio-v2.html">Load Cells</Link></li>
                                                <li><Link to="portfolio-v3.html">Torque Sensors</Link></li>
                                                <li><Link to="portfolio-v4.html">Calibration Systems</Link></li>
                                                <li><Link to="portfolio-single-v1.html">Testing Systems</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="services.html">Custom Machinery</Link>
                                        </li>
                                        <li>
                                            <Link to="blog-fullwidth.html">Calibration</Link>
                                        </li>
                                        <li>
                                            <Link to="contact.html">Catalogues</Link>
                                        </li>
                                        <li>
                                            <Link to="contact.html">Software</Link>
                                        </li>
                                        <li>
                                            <Link to="contact.html">Contact</Link>
                                        </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="sidebar">
                                    <div className="widget widget-search top-search">
                                        <form id="searchform" action="index-header-classic.html#" method="get">
                                        <div><input id="s" className="sss" type="text" placeholder="Type &amp; Hit Enter..." /> <input id="searchsubmit" type="submit" value="" /></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar
