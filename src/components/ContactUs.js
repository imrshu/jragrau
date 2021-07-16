import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ContactUs extends Component {
    render() {
        return (
            <div>
               <div className="page-title parallax parallax5">
                <div className="overlay"> </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="page-title-heading">
                            <h2 className="title">Get in touch with us</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li className="home"><Link to="contact.html#">Home</Link></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <p> </p>
                <section className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="flat-contact">
                            <div className="post-contact">
                                <h4 className="title">Contact Us</h4>
                                <p>Get in touch with the professionals for quality services.</p>
                            </div>
                            <div className="contact-form">
                                <form id="contactform" className="comment-form" action="http://themesflat.com/html/monster/contact/contact-process.php" method="post" novalidate="">
                                    <fieldset className="style-1 full-name"><input id="name" className="tb-my-input" tabindex="1" name="name" size="32" type="text" value="" placeholder="Your Name *" /></fieldset>
                                    <fieldset className="style-1 email-address"><input id="email" className="tb-my-input" tabindex="2" name="email" size="32" type="text" value="" placeholder="Your Email *" /></fieldset>
                                    <fieldset className="style-1 phone"><input id="phone" className="tb-my-input" tabindex="1" name="phone" size="32" type="text" value="" placeholder="Your Phone Number *" /></fieldset>
                                    <fieldset className="style-1 subject"><input id="subject" className="tb-my-input" tabindex="2" name="subject" size="32" type="text" value="" placeholder="Company" /></fieldset>
                                    <fieldset className="message-form"><textarea id="comment-message" tabindex="4" name="message" rows="8" placeholder="Message"></textarea></fieldset>
                                    <div className="submit-wrap"><button className="flat-button button-style style-v1">Submit</button></div>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="flat-contact-us">
                            <div className="contact-us">
                                <div className="contact-address">
                                    <h4 className="title v1">Address</h4>
                                    <p>MIE Industrial area, Bahadurgarh, IND</p>
                                </div>
                            </div>
                            <div className="contact-us v1">
                                <div className="contact-info">
                                    <h4 className="title v2">Contact Info</h4>
                                    <p>Phone:<Link to="contact.html#"> +91-9811490150</Link></p>
                                    <p>Mail:<Link to="contact.html#"> support@jragrau.com</Link></p>
                                </div>
                            </div>
                            <div className="container-fluid"> </div>
                        </div>
                        </div>
                    </div>
                </div>
                </section> 
            </div>
        )
    }
}

export default ContactUs
