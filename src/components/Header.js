import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';
import Navbar from './Navbar';
import Slider from './Slider';



class Header extends Component {
    state = {
        'isSlider': false
    }

    findParams() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        console.log(params.get('q'));
        return params.get('q');
    }

    // componentDidMount() {
    //     const slider_status = this.findParams()
    //     if (slider_status === 'slider') {
    //         this.setState({
    //             'isSlider': true
    //         })
    //     } else {
    //         this.setState({
    //             'isSlider': false
    //         })
    //     }
    // }



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

                <Slider />

            </div>
        )
    }
}

export default Header
