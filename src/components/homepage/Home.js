import React, { Component } from 'react'
import Header from '../Header'
import WorkProcess from './WorkProcess';
import Counter from './Counter';
import ClientReviews from './ClientReviews';
import Client from './Client';
import Industries from './Industries';


class Home extends Component {
    render() {
        return (
            <div>
                <Header /> 
                <Industries />
                <WorkProcess />
                <Client />
                <Counter />
                <ClientReviews />
            </div>
            
        )
    }
}

export default Home
