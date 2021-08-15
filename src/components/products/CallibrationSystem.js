import React, { Component } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import importAll  from '../../helpers/Import_Images'


const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
const images1 = importAll(require.context('../../images/Products_Images', true, /\.(png|jpe?g|svg)$/));

class CallibrationSystem extends Component {
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
                            <h2 className="title">Callibration System</h2>
                            </div>
                            <div className="breadcrumbs">
                            <ul>
                                <li className="home"><Link to="blog-single-sidebarleft-v1.html#">Home</Link></li>
                                <li>Callibration System</li>
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
                                    <img src={images1['callibration.jpeg'].default} alt="Torque Sensors" style={{'marginBottom':'100px'}}/>
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
                                            <p>In measurement technology and metrology, calibration is the comparison of measurement values delivered by a device under test with those of a calibration standard of known accuracy. 
                                                Such a standard could be another measurement device of known accuracy, a device generating the quantity to be measured such as a voltage, a sound tone, or a physical artifact, such as a meter ruler.</p>

                                            <p>Our calibration solutions meet the broad variety of needs for calibration in the field of Sound and vibration to Automobiles.<br/>
                                            Our calibration systems include instructions on screen, generation of certificates, uncertainty budgets – 
                                            we can modify standard systems to suit your specific requirements, and integrate the instruments you have already acquired.
                                            </p>

                                            <p>We supply both systems and customised calibration systems complete with uncertainty calculations and detailed instructions. 
                                                We also do on-site training in general or specific aspects of calibration.</p>
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

export default CallibrationSystem
