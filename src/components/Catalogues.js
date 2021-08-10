import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import importAll  from '../helpers/Import_Images'
import Header from './Header';
import {firestore} from '../config/firebase';


const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));


class Catalogues extends Component {
    // Define the db connection for products collection
    db = firestore.collection('products')
    // define the state for Catelogues
    state = {
        'products': []
    }

    componentDidMount() {
        const items = []
        this.db.onSnapshot(products => {
            products.forEach(doc => {
                items.push(doc.data())
            })
            this.setState({
                'products': items 
            })    
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="page-title parallax parallax1">
                    <div className="overlay">
                    <img src={images['title.jpeg'].default} style={{'height' : '500px'}} alt="page title for catelogues"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-title-heading">
                                <h2 className="title">Our Products</h2>
                                </div>
                                <div className="breadcrumbs">
                                <ul>
                                    <li className="home"><Link to="portfolio-v4.html#">Home</Link></li>
                                    <li className="home"><Link to="portfolio-v4.html#">Products</Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <section className="flat-row portfolio-row-page no-padding-bottom v1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="flat-portfolio v4">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="portfolio-filter">
                                                <li className="active"><Link to="portfolio-v4.html#" data-filter="*">All</Link></li>
                                                <li><Link to="portfolio-v4.html#" data-filter=".direction">Art Direction</Link></li>
                                                <li><Link to="portfolio-v4.html#" data-filter=".industrial">Industrial Design</Link></li>
                                                <li><Link to="portfolio-v4.html#" data-filter=".motion">Motion</Link></li>
                                                <li><Link to="portfolio-v4.html#" data-filter=".photoshop">Photography</Link></li>
                                                <li><Link to="portfolio-v4.html#" data-filter=".webdesign">Web Design</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-wrap clearfix">
                                        {this.state.products.map((product, idx) => (
                                            <div className="item direction industrial motion" key={idx}>
                                                <div className="featured-images"><img src={product.image} alt={product.name} /></div>
                                                <div className="portfolio-details v1">
                                                    <div className="post"><Link to="portfolio-v4.html#">{product.name}</Link></div>
                                                    <ul className="meta-post clearfix">
                                                    <li className="author"><Link to="portfolio-v4.html#">{product.price}</Link></li>
                                                    <li className="day"><Link to="portfolio-v4.html#">Motion</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flat-center"><Link to='portfolio-v4.html#' className="read-more" href="portfolio-v4.html#">View More Works</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
            </div>
        )
    }
}

export default Catalogues
