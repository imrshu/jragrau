import React, { Component } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import importAll  from '../../helpers/Import_Images'


const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
const images1 = importAll(require.context('../../images/Products_Images', true, /\.(png|jpe?g|svg)$/));

class TestingSystem extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page-title parallax parallax1">
                <div className="overlay">
                <img src={images['title.jpeg'].default} style={{'height' : '500px'}}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading" style={{'textAlign':'center'}}>
                            <h2 className="title">Testing System</h2>
                            </div>
                            <div className="breadcrumbs">
                            <ul>
                                <li className="home"><Link to="blog-single-sidebarleft-v1.html#">Home</Link></li>
                                <li>Testing System</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <section className="main-content blog bg-sidebar sidebar-left blog-single style v2">
                    <div className="container">
                    <div className="row">
                        <div className="wrap-main-post">
                            <div className="col-md-4">
                                <div className="sidebar">
                                <div>
                                    <img src={images1['testing.png'].default} alt="Torque Sensors" style={{'marginBottom':'100px'}}/>
                                </div>
                                <div className="widget widget-dowload services-single">
                                <h4 className="widget-title">Brochures</h4>
                                <p className="widget-text">Our approach is distinctly innovative. We constantly seek new ways to increase client</p>
                                <ul className="dowload">
                                    <li className="dl-word"><Link to="overview.html#">Company Brochures.PDF</Link></li>
                                </ul>
                                </div>
                                </div>
                            </div>


                            <div className="col-md-8">
                                <div className="post-wrap-single-v1 clearfix">
                                <section className="entry clearfix">
                                    <div className="entry-border">
                                        <div className="content-post">
                                            <div className="entry-post excerpt">
                                            <p>Our testing systems include instructions on screen, generation of certificates, uncertainty budgets – 
                                                we can modify standard systems to suit your specific requirements, and integrate the instruments you have already acquired.</p>

                                            <p>We supply both systems and customised calibration systems complete with uncertainty calculations and detailed instructions. 
                                                We also do on-site training in general or specific aspects of calibration.
                                            </p>

                                            <p>Mechanical engineering is the discipline that applies engineering, physics, engineering mathematics, 
                                                and materials science principles to design, analyze, manufacture, and maintain mechanical systems. 
                                                It is one of the oldest and broadest of the engineering disciplines.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
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

export default TestingSystem
