import React, { Component } from 'react'
import importAll from '../../helpers/Import_Images'
import 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = importAll(require.context('../../images/client_images/', true, /\.(png|jpe?g|svg)$/));

class Client extends Component {


    render() {
        return (
            <div>
                <section class="flat-row background-client" style={{'margin-top': '150px'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <OwlCarousel autoplay={true} loop={true} margin={2} items={8}>
                                <div class='item'>
                                    <img src={images['client_1.png'].default} alt="images" />
                                </div>
                                <div class='item'>
                                    <img src={images['client_2.png'].default} alt="images" />
                                </div>
                                <div class='item'>
                                    <img src={images['client_3.png'].default} alt="images" />
                                </div>
                                <div class='item'>
                                    <img src={images['client_4.png'].default} alt="images" />
                                </div>
                                <div class='item'>
                                    <img src={images['client_5.png'].default} alt="images" />
                                </div>
                                <div class='item'>
                                    <img src={images['client_6.png'].default} alt="images" />
                                </div>
                                <div class='item'>
                                    <img src={images['client_7.png'].default} alt="images" />
                                </div>
                                <div class='item'>
                                    <img src={images['client_8.png'].default} alt="images" />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Client
