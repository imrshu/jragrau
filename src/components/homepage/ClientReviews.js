import React, { Component } from 'react'
import line from '../../images/line.png'
import 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class ClientReviews extends Component {
    render() {
        return (
            <section className="flat-row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section style1">
                            <h3 className="title">CLIENTS' REVIEWS</h3>
                            <div className="icon"><img src={line} alt="image" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel className='owl-theme' autoplay loop nav margin={2} items={2}>
                                <div className="item">
                                    <div className="text">
                                        <p>Thanks for the loadcell and indicator.  Arrived on time and works very well.  Better than expected in fact.  We are getting repeatability and drift of under +/- 3 gr.  Out of an inexpensive 100kg loadcell, that's extremely amazing! Well done guys.</p>
                                    </div>
                                    <div className="title-testimonial">
                                        <div className="thumb-title"><img src="images/member/1.jpg" alt="image" /></div>
                                        <div className="post-title">
                                            <h6 className="title-post"><a href="index.html#">John Donaldson</a></h6>
                                            <p>South Pacific Avionics Ltd</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="text">
                                        <p>Just to say thanks for the fast and efficient service we receive with regards to the supply and availability of loadcells which are not off the shelf products these days. These products have pulled us out of awkward situations with clients a few times now.</p>
                                    </div>
                                    <div className="title-testimonial">
                                        <div className="thumb-title"><img src="images/member/1.jpg" alt="image" /></div>
                                        <div className="post-title">
                                            <h6 className="title-post"><a href="index.html#">Colin Saunders</a></h6>
                                            <p>Premier Weighing Ltd, Germany</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="text">
                                        <p>Jragrau created a custom load pin for us that permitted a rapid in-situ test of component loading that gave us transient loading as a graph. This test kit could be taken overseas and tested in actual customer installs in 5 minutes. </p>
                                    </div>
                                    <div className="title-testimonial">
                                        <div className="thumb-title"><img src="images/member/1.jpg" alt="image" /></div>
                                        <div className="post-title">
                                            <h6 className="title-post"><a href="index.html#">Jesus Gernale</a></h6>
                                            <p>Calamba City, Philippines</p>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ClientReviews
