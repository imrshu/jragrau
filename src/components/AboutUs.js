import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import line from '../images/line.png'
import '../css/aboutus.css'


class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page-title parallax parallax3">
                    <div className="overlay"> </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-title-heading">
                                <h2 className="title">We're Here For You</h2>
                                </div>
                                <div className="breadcrumbs">
                                <ul>
                                    <li className="home">
                                        <Link to="/">Home</Link></li>
                                    <li>About Us</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="flat-row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section style1 large">
                                <h3 className="title">We Making a Positive Impact Across The Globe</h3>
                                <div className="icon"><img src={line} alt="image" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="flat-icon">
                                <div className="col-md-4">
                                <div className="iconbox center circle">
                                    <div className="box-header">
                                        <i className="icon-network"></i>
                                    </div>
                                    <div className="icon-post">
                                        <div className="box-title">
                                            <Link to="/About_us">Quality Work</Link></div>
                                        <div className="box-content">
                                            <p>We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="iconbox center circle">
                                    <div className="box-header">
                                        <i className="icon-magic-wand"></i> 
                                    </div>
                                    <div className="icon-post">
                                        <div className="box-title"><Link to="about.html#">Leadership</Link></div>
                                        <div className="box-content">
                                            <p>We has a distinguished history of high achievement. Our strategy supports the best researchers, provides an exceptional student experience and assists our international partners.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="iconbox center circle">
                                    <div className="box-header"> 
                                        <i className='icon-alarm-clock-1'></i>
                                    </div>
                                    <div className="icon-post">
                                        <div className="box-title"><a href="about.html#">Priorities</a></div>
                                        <div className="box-content">
                                            <p>Deadlines aren’t bad. They help you organize your time. They help you set priorities. They make you get going when you might not feel like it.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flat-row parallax bg-section-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="text-center text-white font-family-heading font-size-30 margin-bottom-20">WE BUILD PROFESSIONAL AND SMART BUILDINGS</h3>
                                <div className="text-center margin-top-30"><a className="flat-button button-style" href="about.html#">GET A QOUTE</a></div>
                            </div>
                        </div>
                    </div>
                </section> 

                <section id="services" className="flat-row what-we-do offer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="title-section style1 large">
                                <h3 className="title">OUR TEAM</h3>
                                <div className="icon"><img src={line} alt="image" /></div>
                                <div className="desc">We’re tightly connected with our communities.</div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3">
                                <div className="hover hover-3 text-white rounded"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570786274/hoverSet-5_ifnajv.jpg" alt="" />
                                    <div className="hover-overlay"></div>
                                    <div className="hover-3-content px-10 py-15">
                                    <h3 className="hover-3-title text-uppercase font-weight-bold mb-1"><span className="font-weight-light">Dedicated Team</span></h3>
                                    <p className="hover-3-description small text-uppercase text-wrap px-12">Committed to helping its clients reach their goals, to personalising their experiences</p>
                                    </div>
                                </div>
                        </div>
                       </div>
                    </div>
                </section>
            </div>   
        )
    }
}

export default AboutUs
