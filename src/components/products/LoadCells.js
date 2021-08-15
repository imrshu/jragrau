import React, { Component } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import importAll  from '../../helpers/Import_Images'


const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
const images1 = importAll(require.context('../../images/Products_Images', true, /\.(png|jpe?g|svg)$/));

class LoadCells extends Component {
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
                            <h2 className="title">Load Cells</h2>
                            </div>
                            <div className="breadcrumbs">
                            <ul>
                                <li className="home"><Link to="blog-single-sidebarleft-v1.html#">Home</Link></li>
                                <li>Load Cells</li>
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
                                    <img src={images1['load_cell.jpeg'].default} alt="Load cell" style={{'marginBottom':'100px'}}/>
                                </div>
                                <div className="widget widget-dowload services-single">
                                <h4 className="widget-title">Brochures</h4>
                                <p className="widget-text">Our approach is distinctly innovative. We constantly seek new ways to increase client</p>
                                <ul className="dowload">
                                    <li className="dl-word"><Link to="overview.html#">Company Brochures.PDF</Link></li>
                                </ul>
                                </div>
                                {/* <div className="widget widget-categories">
                                    <h5 className='widget-title'>APPLICATIONS</h5>
                                    <ol>
                                        <li>Bagging</li>
                                    </ol>
                                </div> */}
                                </div>
                            </div>


                            <div className="col-md-8">
                                <div className="post-wrap-single-v1 clearfix">
                                <section className="entry clearfix">
                                    <div className="entry-border">
                                        <div className="content-post">
                                            <div className="entry-post excerpt">
                                            <p>A load cell (or loadcell) is a transducer which converts force into a measurable electrical output.
                                                 Although there are many varieties of force sensors, strain gauge load cells are the most commonly used type.</p>

                                            <p>Except for certain laboratories where precision mechanical balances are still used, strain gauge load cells dominate the weighing industry. 
                                                    Pneumatic load cells are sometimes used where intrinsic safety and hygiene are desired, and hydraulic load cells are considered in remote locations, as they do not require a power supply. 
                                                    Strain gauge load cells offer accuracies from within 0.03% to 0.25% full scale and are suitable for almost all industrial applications.</p>

                                            <p>Many load cells also feature special properties such as a special design or material properties. That may be important depending on the application, for example if systems need to be thoroughly cleaned every day. 
                                                Some load cells can withstand this type of stress without difficulty, others cannot.</p>

                                            <p>Load cells can also be categorized based on the type of signal transmission: Digital load cells have built-in electronics used to process the measurement results and present them in prepared format.
                                                 For analog load cells, an additional device – a measuring amplifier – is required.</p>
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

export default LoadCells
