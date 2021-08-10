import React, { Component } from 'react'
import line from '../../images/line.png'
import { Link } from 'react-router-dom'
// import { url } from 'inspector'
import bg from '../../images/Homepage_Images/bg.jpeg'
// import importAll  from '../helpers/Import_Images'


// const images = importAll(require.context('../images/Homepage_Images', false, /\.(png|jpe?g|svg)$/));



class Industries extends Component {
    render() {
        return (
            <div>
                <section className="flat-row portfolio-style2 no-padding-bottom" style={{backgroundImage: `url(${bg})`}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-section style1 color-style">
                            <h2 className="title" style={{'color':'white'}}>PERFECT SOLUTIONS FOR ANY INDUSTRIES</h2>
                            <div className="icon"><img src={line} alt="image" /></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="flat-portfolio v1 item-no-padding">
                            <ul className="portfolio-filter color-white">
                            <li className="active"><Link to="index.html#" data-filter="*">All</Link></li>
                            <li><Link to="index.html#" data-filter=".direction">Truck & railroad</Link></li>
                            <li><Link to="index.html#" data-filter=".industrial">warehousing</Link></li>
                            <li><Link to="index.html#" data-filter=".motion">automotive</Link></li>
                            <li><Link to="index.html#" data-filter=".photoshop">universities</Link></li>
                            <li><Link to="index.html#" data-filter=".webdesign">Packaging & Food</Link></li>
                            <li><Link to="index.html#" data-filter=".webdesign">Agriculture</Link></li>
                            <li><Link to="index.html#" data-filter=".webdesign">Defence & Ammunition</Link></li>
                            <li><Link to="index.html#" data-filter=".webdesign">Research Laboratories</Link></li>
                            </ul>
                            <div className="portfolio-wrap clearfix">
                            <div className="item direction webdesign photoshop industrial motion">
                                <div className="featured-images">
                                    <img src="images/portfolio/9.jpg" alt="images" />
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
                                    <img src="images/portfolio/10.jpg" alt="images" />
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
                                    <img src="images/portfolio/11.jpg" alt="images" />
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
                                    <img src="images/portfolio/12.jpg" alt="images" />
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
