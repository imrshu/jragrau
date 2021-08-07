import React, { Component } from 'react'
import importAll from '../helpers/Import_Images'


const images = importAll(require.context('../client_images/', true, /\.(png|jpe?g|svg)$/));

class Client extends Component {
    render() {
        return (
            <div>
                <section className="flat-row background-client" style={{'marginTop': '150px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="flat-client style1" data-item="6" data-nav="false" data-dots="false" data-auto="true" data-margin="0">
                            <div className="item"><img src={images['client_1.png'].default} alt="images" /></div>
                            <div className="item"><img src={images['client_2.png'].default} alt="images" /></div>
                            <div className="item"><img src={images['client_3.png'].default} alt="images" /></div>
                            <div className="item"><img src={images['client_4.png'].default} alt="images" /></div>
                            <div className="item"><img src={images['client_5.png'].default} alt="images" /></div>
                            <div className="item"><img src={images['client_6.png'].default} alt="images" /></div>
                            <div className="item"><img src={images['client_7.png'].default} alt="images" /></div>
                            <div className="item"><img src={images['client_8.png'].default} alt="images" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Client
