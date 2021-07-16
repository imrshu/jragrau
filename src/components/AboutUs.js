import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class AboutUs extends Component {
    render() {
        return (
            <div>
               <div className="page-title parallax parallax3">
            <div className="overlay"> </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-heading">
                        <h2 className="title">Get in touch with us</h2>
                        </div>
                        <div className="breadcrumbs">
                        <ul>
                            <li className="home">
                                <Link to="/">Home</Link></li>
                            <li>Contact</li>
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
                        <div className="icon"><img src="images/icon/line.png" alt="image" /></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flat-icon">
                        <div className="col-md-4">
                        <div className="iconbox center circle">
                            <div className="box-header"> </div>
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
                            <div className="box-header"> </div>
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
                            <div className="box-header"> </div>
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
                        <div className="icon"><img src="images/icon/line.png" alt="image" /></div>
                        <div className="desc">We’re tightly connected with our communities.</div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-xs-12">
                    <div className="flat-team style5">
                        <div className="avatar">
                            <div className="overlay"> </div>
                            <img src="images/member/3.jpg" alt="image" />
                        </div>
                        <div className="content">
                            <h3 className="name">Dedicated Teams</h3>
                            <p className="position">Makerting</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                    <div className="flat-team style5">
                        <div className="avatar">
                            <div className="overlay"> </div>
                            <img src="images/member/3.jpg" alt="image" />
                        </div>
                        <div className="content">
                            <h3 className="name">True Partners</h3>
                            <p className="position">Founder &amp; CEO</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                    <div className="flat-team style5">
                        <div className="avatar">
                            <div className="overlay"> </div>
                            <img src="images/member/4.jpg" alt="image" />
                        </div>
                        <div className="content">
                            <h3 className="name">Global Know-How</h3>
                            <p className="position">Web Design</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                    <div className="flat-team style5">
                        <div className="avatar">
                            <div className="overlay"> </div>
                            <img src="images/member/5.jpg" alt="image" />
                        </div>
                        <div className="content">
                            <h3 className="name">Focus on Innovation</h3>
                            <p className="position">Web Design</p>
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
