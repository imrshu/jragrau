import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import bg from '../images/Homepage_Images/bg.jpeg';

export class Slider extends Component {
    render() {
        return (
            <div>
                <AwesomeSlider>
                    <div data-src={bg} />
                    <div data-src={bg} />
                </AwesomeSlider>                
            </div>
        )
    }
}

export default Slider
