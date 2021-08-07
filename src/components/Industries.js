import React, { Component } from 'react'
import line from '../images/line.png'
import { Link } from 'react-router-dom'



class Industries extends Component {
    render() {
        return (
            <div>
                <section className="flat-row portfolio-style2 no-padding-bottom parallax background-portfolio">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-section style1 color-style">
                            <h3 className="title">Perfect Solutions For Any Industry</h3>
                            <div className="icon"><img src={line} alt="page title for industries" /></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="flat-portfolio v1 item-no-padding">
                            <ul className="portfolio-filter color-white">
                            <li className="active"><Link to="index.html#" data-filter="*">All</Link></li>
                            <li><Link to="index.html#" data-filter=".direction">Art Direction</Link></li>
                            <li><Link to="index.html#" data-filter=".industrial">Industrial Design</Link></li>
                            <li><Link to="index.html#" data-filter=".motion">Motion</Link></li>
                            <li><Link to="index.html#" data-filter=".photoshop">Photography</Link></li>
                            <li><Link to="index.html#" data-filter=".webdesign">Web Design</Link></li>
                            </ul>
                            <div className="portfolio-wrap clearfix">
                            <div className="item direction webdesign photoshop industrial motion">
                                <div className="featured-images">
                                    <img src="images/portfolio/9.jpg" alt="industries work" />
                                    <div className="overlay">
                                        <div className="portfolio-details">
                                        <div className="project-info-wrap">
                                            <div className="project-title"><Link to="index.html#">Awesome office design</Link></div>
                                            <div className="project-categories"><Link to="index.html#">BravoTheme Company</Link></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item industrial">
                                <div className="featured-images">
                                    <img src="images/portfolio/10.jpg" alt="industries office" />
                                    <div className="overlay">
                                        <div className="portfolio-details">
                                        <div className="project-info-wrap">
                                            <div className="project-title"><Link to="index.html#">Awesome office design</Link></div>
                                            <div className="project-categories"><Link to="index.html#">BravoTheme Company</Link></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item motion">
                                <div className="featured-images">
                                    <img src="images/portfolio/11.jpg" alt="industries awesome" />
                                    <div className="overlay">
                                        <div className="portfolio-details">
                                        <div className="project-info-wrap">
                                            <div className="project-title"><Link to="index.html#">Awesome office design</Link></div>
                                            <div className="project-categories"><Link to="index.html#">BravoTheme Company</Link></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item photoshop">
                                <div className="featured-images">
                                    <img src="images/portfolio/12.jpg" alt="industries last" />
                                    <div className="overlay">
                                        <div className="portfolio-details">
                                        <div className="project-info-wrap">
                                            <div className="project-title"><Link to="index.html#">Awesome office design</Link></div>
                                            <div className="project-categories"><Link to="index.html#">BravoTheme Company</Link></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
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

export default Industries
