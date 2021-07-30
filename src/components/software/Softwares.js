import React, { Component } from 'react'
import Header from '../Header'
import AppDevelopment from './AppDevelopment'
import PageTitle from './PageTitle'
import Technical from './Technical'


class Softwares extends Component {
    render() {
        return (
            <div>
                <Header />
                <PageTitle />
                <AppDevelopment />
                <Technical />
            </div>
        )
    }
}

export default Softwares
