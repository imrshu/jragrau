import React, { Component } from 'react'
import line from '../../images/line.png'
// import { url } from 'inspector'
import importAll  from '../../helpers/Import_Images'


const images = importAll(require.context('../../images/Industries_Images', false, /\.(png|jpe?g|svg)$/));



class Industries extends Component {
    render() {
        return (
            <div>
                <section className="flat-row portfolio-style2 no-padding-bottom">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section style1">
                                <h3 className="title">Perfect Solutions For Any Industry</h3>
                                <div className="icon"><img src={line} alt="we are making a positive impact" /></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-portfolio v1">
                                <div className="portfolio-wrap clearfix" style={{'position': 'relative', 'height': '579.812px'}}>
                                <div className="item builder painting" style={{'position': 'absolute', 'left': '0px', 'top': '0px'}}>
                                    <div className="featured-images">
                                        <img src={images['truck.jpeg'].default} alt="truck and railroad images" />
                                        <div className="overlay">
                                            <div className="portfolio-details">
                                            <div className="project-info-wrap">
                                                <div className="project-title">Truck & Railroad Scales</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item builder hammer" style={{'position': 'absolute', 'left': '363px', 'top': '0px'}}>
                                    <div className="featured-images">
                                        <img src={images['warehouse.jpeg'].default} alt="warehousing images" />
                                        <div className="overlay">
                                            <div className="portfolio-details">
                                            <div className="project-info-wrap">
                                                <div className="project-title">Warehousing</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item electric painting" style={{'position': 'absolute', 'left': '726px', 'top': '0px'}}>
                                    <div className="featured-images">
                                        <img src={images['automotive.jpeg'].default} alt="automotive images" />
                                        <div className="overlay">
                                            <div className="portfolio-details">
                                            <div className="project-info-wrap">
                                                <div className="project-title">Automotive</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item electric hammer" style={{'position': 'absolute', 'left': '1089px', 'top': '0px'}}>
                                    <div className="featured-images">
                                        <img src={images['universities.jpeg'].default} alt="universitiesimages" />
                                        <div className="overlay">
                                            <div className="portfolio-details">
                                            <div className="project-info-wrap">
                                                <div className="project-title">Universities</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item builder painting" style={{'position': 'absolute', 'left': '0px', 'top': '245px'}}>
                                    <div className="featured-images">
                                        <img src={images['food.jpeg'].default} alt="packaging and food images" />
                                        <div className="overlay">
                                            <div className="portfolio-details">
                                            <div className="project-info-wrap">
                                                <div className="project-title">Packaging & Food Processing</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item builder hammer" style={{'position': 'absolute', 'left': '363px', 'top': '245px'}}>
                                    <div className="featured-images">
                                        <img src={images['agriculture.jpeg'].default} alt="agriculture images" />
                                        <div className="overlay">
                                            <div className="portfolio-details">
                                            <div className="project-info-wrap">
                                                <div className="project-title">Agriculture</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item electric painting" style={{'position': 'absolute', 'left': '726px', 'top': '245px'}}>
                                    <div className="featured-images">
                                        <img src={images['defence.jpeg'].default} alt="defence and ammunition images" />
                                        <div className="overlay">
                                            <div className="portfolio-details">
                                            <div className="project-info-wrap">
                                                <div className="project-title">Defence & Ammunition</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item electric hammer" style={{'position': 'absolute', 'left': '1089px', 'top': '245px'}}>
                                    <div className="featured-images">
                                        <img src={images['research.jpeg'].default} alt="research laboratories images" />
                                        <div className="overlay">
                                            <div className="portfolio-details">
                                            <div className="project-info-wrap">
                                                <div className="project-title">Research Laboratories</div>
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
