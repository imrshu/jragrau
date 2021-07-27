import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import line from '../images/line.png'
import importAll from '../helpers/Import_Images'


const images = importAll(require.context('../images/work_process/', true, /\.(png|jpe?g|svg)$/));

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
                    <div className="row"  style={{'position':'relative'}}>
                        <div className="flat-icon">
                            <div className="col-md-2 col-xs-6">
                            <div className="iconbox1 style-3">
                                <div className="box-header"><img src={images['research.png'].default} alt="images" /></div>
                                <div className="box-title">Research & Analysis</div>
                            </div>
                            </div>
                            <div className="col-md-2 col-xs-6">
                            <div className="iconbox1 style-3">
                                <div className="box-header"><img src={images['creative.png'].default} alt="images" /></div>
                                <div className="box-title">Creative Solutions</div>
                            </div>
                            </div>
                            <div className="col-md-2 col-xs-6">
                            <div className="iconbox1 style-3">
                                <div className="box-header"><img src={images['building.png'].default} alt="images" /></div>
                                <div className="box-title">Building</div>
                            </div>
                            </div>
                            <div className="col-md-2 col-xs-6">
                            <div className="iconbox1 style-3">
                                <div className="box-header"><img src='' alt="images" /></div>
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
