import React, { Component } from 'react'
import Header from './Header'
import WorkProcess from './WorkProcess';
import importAll from '../helpers/Import_Images'



const images = importAll(require.context('../client_images/', true, /\.(png|jpe?g|svg)$/));


class Home extends Component {
    render() {
        return (
            <div>
                <Header /> 
                <WorkProcess />
                <section class="flat-row background-client" style={{'margin-top': '150px'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="flat-client style1" data-item="6" data-nav="false" data-dots="false" data-auto="true" data-margin="0">
                            <div class="item"><img src={images['client_1.png'].default} alt="images" /></div>
                            <div class="item"><img src={images['client_2.png'].default} alt="images" /></div>
                            <div class="item"><img src={images['client_3.png'].default} alt="images" /></div>
                            <div class="item"><img src={images['client_4.png'].default} alt="images" /></div>
                            <div class="item"><img src={images['client_5.png'].default} alt="images" /></div>
                            <div class="item"><img src={images['client_6.png'].default} alt="images" /></div>
                            <div class="item"><img src={images['client_7.png'].default} alt="images" /></div>
                            <div class="item"><img src={images['client_8.png'].default} alt="images" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
            
        )
    }
}

export default Home
