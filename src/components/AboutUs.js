import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import line from '../images/line.png'
import '../css/aboutus.css'
import importAll  from '../helpers/Import_Images'


const images = importAll(require.context('../images/AboutUs_Images/', false, /\.(png|jpe?g|svg)$/));
const images1 = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));


class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page-title parallax parallax3">
                    <div className="overlay">
                    <img src={images1['title.jpeg'].default} style={{'height' : '500px'}} alt="page title about us" />
                    </div>
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
                                <div className="icon"><img src={line} alt="we are making a positive impact" /></div>
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
                                <h3 className="text-center text-white font-family-heading font-size-30 margin-bottom-20" style={{'color':'white'}}>Driven By Values, Delivering On A Vision.</h3>
                                <div className="text-center margin-top-30"><a className="flat-button button-style" href="about.html#">Learn More</a></div>
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
                                <div className="icon"><img src={line} alt="Our team" /></div>
                                <div className="desc"><strong>We’re tightly connected with our communities.</strong></div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3">
                                <div className="hover hover-3 text-white rounded"><img src={images['team.png'].default} alt="dedicated team" />
                                    <div className="hover-overlay"></div>
                                    <div className="hover-3-content" style={{'padding': '30px 30px'}}>
                                    <p className="hover-3-description small text-uppercase text-wrap"><font size='4'><strong>Dedicated Team</strong> </font>
                                    <br/>Committed to helping its clients reach their goals, to personalising their experiences</p>
                                    </div>
                                </div>
                        </div>

                        <div className="col-md-3">
                                <div className="hover hover-3 text-white rounded"><img src={images['partners.png'].default} alt="our partners" />
                                    <div className="hover-overlay"></div>
                                    <div className="hover-3-content" style={{'padding': '30px 30px'}}>
                                    <p className="hover-3-description small text-uppercase text-wrap"><font size='4'> <strong>True Partners</strong></font>
                                    <br/>Our strong sense of identification with client projects means that we are constantly striving</p>
                                    </div>
                                </div>
                        </div>

                        <div className="col-md-3">
                                <div className="hover hover-3 text-white rounded"><img src={images['global.png'].default} alt="global know how" />
                                    <div className="hover-overlay"></div>
                                    <div className="hover-3-content" style={{'padding': '30px 30px'}}>
                                    <p className="hover-3-description small text-uppercase text-wrap"><font size='4'> <strong>Global Know-How</strong></font>
                                    <br/>They aren’t yet aware. we adopt progressive approach to technology and marketing techniques</p>
                                    </div>
                                </div>
                        </div>

                        <div className="col-md-3">
                                <div className="hover hover-3 text-white rounded"><img src={images['idea.png'].default} alt="focus on innovation" />
                                    <div className="hover-overlay"></div>
                                    <div className="hover-3-content" style={{'padding': '30px 30px'}}>
                                    <p className="hover-3-description small text-uppercase text-wrap"><font size='3'> <strong>Focus on innovation</strong></font>
                                    <br/>This sense of identification also means we value and promote seamless interaction</p>
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
