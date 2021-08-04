import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import importAll  from '../../helpers/Import_Images'


const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));


class PageTitle extends Component {
    render() {
        return (
                <div className="page-title parallax parallax1">
                <div className="overlay">
                <img src={images['title.jpeg'].default} style={{'height' : '500px'}}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading" style={{'text-align':'center'}}>
                            <h2 className="title">Softwares</h2>
                            </div>
                            <div className="breadcrumbs">
                            <ul>
                                <li className="home"><Link to="blog-single-sidebarleft-v1.html#">Home</Link></li>
                                <li>Softwares</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default PageTitle
