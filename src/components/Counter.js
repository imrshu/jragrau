import React, { Component } from 'react'

class Counter extends Component {
    render() {
        return (
            <div>
                <div className="flat-row row-small parallax">
                <div className="bg-overlay">
                    <section className="counter">
                        <p>Perfect Solutions For<br/><br/>Any Industrials</p>
                    </section>
                </div>
                <div className="container" style={{'marginLeft':'550px'}}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="flat-counter color-theme">
                            <div className="content-counter ">
                                <div className="numb-count" data-to="19" data-speed="4000" data-waypoint-active="yes">19</div>
                                <div className="name-count">Year Experience</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="flat-counter color-theme">
                            <div className="content-counter">
                                <div className="numb-count" data-to="10000" data-speed="4000" data-waypoint-active="yes">10000</div>
                                <div className="name-count">Projects Completed</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="flat-counter color-theme">
                            <div className="content-counter">
                                <div className="numb-count" data-to="64" data-speed="4000" data-waypoint-active="yes">64</div>
                                <div className="name-count">Awards Achieved</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Counter
