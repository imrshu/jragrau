import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';
import Navbar from './Navbar';
import Slider from './Slider';



class Header extends Component {
    render() {
        return (
            <div className="wrap-slider">
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            <ul className="flat-information">
                                <li className="phone"><a href="tel://009811490150">Call Us: +91 9811490150</a></li>
                                <li className="email"><a href="mailto:info@jragrau.com">Email Us: info@jragrau.com</a></li>
                            </ul>
                            </div>
                            <div className="col-md-6">
                                <div className="social-links">
                                    <a href="index-header-classic.html#"><i className="fa fa-twitter"></i></a>
                                    <a href="index-header-classic.html#"><i className="fa fa-facebook"></i></a>
                                    <ExternalLink href="https://www.linkedin.com/company/jragrau-industries/about/"><i className="fa fa-linkedin"></i></ExternalLink>
                                    <a href="index-header-classic.html#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar />

                {this.props.slider === true && (<Slider />)}

            </div>
        )
    }
}

export default Header
