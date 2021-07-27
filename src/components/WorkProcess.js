import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import line from '../images/line.png'


class WorkProcess extends Component {
    render() {
        return (
            <div>
                <section className="flat-row no-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section style1 large">
                            <h3 className="title">Our Work Process</h3>
                            <div className="icon"><img src={line} alt="image" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="flat-icon">
                            <div className="col-md-2 col-xs-6">
                            <div className="iconbox1 style-3">
                                <div className="box-header"><img src="images/about/iconbox1.png" alt="images" /></div>
                                <div className="box-title">Research and Analysis</div>
                            </div>
                            </div>
                            <div className="col-md-2 col-xs-6">
                            <div className="iconbox1 style-3">
                                <div className="box-header"><img src="images/about/iconbox2.png" alt="images" /></div>
                                <div className="box-title">Creative Solutions</div>
                            </div>
                            </div>
                            <div className="col-md-2 col-xs-6">
                            <div className="iconbox1 style-3">
                                <div className="box-header"><img src="images/about/iconbox3.png" alt="images" /></div>
                                <div className="box-title">Building</div>
                            </div>
                            </div>
                            <div className="col-md-2 col-xs-6">
                            <div className="iconbox1 style-3">
                                <div className="box-header"><img src="images/about/iconbox4.png" alt="images" /></div>
                                <div className="box-title">Project Launch</div>
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

export default WorkProcess
