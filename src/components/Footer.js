import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
               <div className="footer-widgets">
                  <div className="container">
                     <div className="row">
                        
                        <div className="col-md-4">
                           <div className="widget widget-text">
                              <h4 className="widget-title">About Us</h4>
                              <div className="text">
                                 <p>We touch the lives of millions of people across the world every day with the testing solutions that we produce.</p>
                              </div>
                              <ul class="flat-socials">
                                    <li class="dribbble">
                                       <Link to="index-header-classic.html#">
                                          <i class="fa fa-dribbble"></i>
                                       </Link>
                                    </li>
                                    <li class="twitter">
                                       <Link to="index-header-classic.html#">
                                          <i class="fa fa-twitter"></i>
                                       </Link>
                                    </li>
                                    <li class="facebook">
                                       <Link to="index-header-classic.html#">
                                          <i class="fa fa-facebook"></i>
                                       </Link>
                                    </li>
                                    <li class="linkedin">
                                       <Link to="index-header-classic.html#">
                                          <i class="fa fa-linkedin"></i>
                                       </Link>
                                    </li>
                                    <li class="behance">
                                       <Link to="index-header-classic.html#">
                                          <i class="fa fa-behance"></i>
                                       </Link>
                                    </li>
                              </ul>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="widget widget-categories">
                              <h4 className="widget-title">Quick Links</h4>
                              <ul className="unstyled style1">
                                 <li><Link to="index-header-classic.html#">About Us</Link></li>
                                 <li><Link to="index-header-classic.html#">Awards</Link></li>
                                 <li><Link to="index-header-classic.html#">Community</Link></li>
                                 <li><Link to="index-header-classic.html#">Events</Link></li>
                                 <li><Link to="index-header-classic.html#">Contact Us</Link></li>
                              </ul>
                              <ul className="unstyled">
                                 <li><Link to="index-header-classic.html#">Faqs Classic</Link></li>
                                 <li><Link to="index-header-classic.html#">Manufacturing</Link></li>
                                 <li><Link to="index-header-classic.html#">Calibration</Link></li>
                                 <li><Link to="index-header-classic.html#">Testing Machines</Link></li>
                                 <li><Link to="index-header-classic.html#">Sensors</Link></li>
                                 <li><Link to="index-header-classic.html#">Custom Machinery</Link></li>
                              </ul>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="widget widget-instagram">
                              <h4 className="widget-title">Subscribe to our Newsletter</h4>
                              <p>Sign up today for tips and latest news.</p>
                              <br></br>
                              <div style={{'position':'relative'}}>
                              <input id="newsletter" name="newsletter" size="32" type="text" placeholder="Email Address" />
                              <button style={{'position':'absolute', 'right':'30px', 'padding':'5px 5px', 'backgroundColor':'rgb(247 191 44)'}}><i className='fa fa-2x fa-paper-plane' ></i>
                              </button>
                              </div>
                              
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
         </footer>
        )
    }
}

export default Footer
