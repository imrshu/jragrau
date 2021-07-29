import React, { Component } from 'react'
import Header from '../Header'
import AppDevelopment from './AppDevelopment'
import PageTitle from './PageTitle'


class Softwares extends Component {
    render() {
        return (
            <div>
                <Header />
                <PageTitle />
                <AppDevelopment />
            </div>
        )
    }
}

export default Softwares
