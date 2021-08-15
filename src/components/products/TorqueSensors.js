import React, { Component } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import importAll  from '../../helpers/Import_Images'


const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
const images1 = importAll(require.context('../../images/Products_Images', true, /\.(png|jpe?g|svg)$/));

class TorqueSensors extends Component {
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
                            <h2 className="title">Torque Sensors</h2>
                            </div>
                            <div className="breadcrumbs">
                            <ul>
                                <li className="home"><Link to="blog-single-sidebarleft-v1.html#">Home</Link></li>
                                <li>Torque Sensors</li>
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
                                    <img src={images1['torque.jpeg'].default} alt="Torque Sensors" style={{'marginBottom':'100px'}}/>
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
                                            <p>A torque sensor, torque transducer or torque meter is a device for measuring and recording the torque on a rotating system, such as an engine, crankshaft, gearbox, transmission, rotor, a bicycle crank or cap torque tester.
                                                 Static torque is relatively easy to measure. 
                                                Dynamic torque, on the other hand, is not easy to measure, since it generally requires transfer of some effect (electric, hydraulic or magnetic) from the shaft being measured to a static system.</p>

                                            <p>Our torque meters, complete with integral mechanical stops, increase overload capacity and provide additional protection during mounting and operation.
                                                 We offer a variety of small capacity sensors for dynamic and reaction torque measurements.</p>

                                            <p>Our combination sensors simultaneously measure reaction torques and forces with a single device; these sensors can also detect angle position and provide velocity measurement.
                                                 We can customize a wide range of available models to meet your specific needs.</p>
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

export default TorqueSensors
