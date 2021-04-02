import React, { Component } from 'react'
import Nav from '../Components/Nav'
import Carousel from '../Components/Carousel'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Nav/>
                    </div>

                    <div className="col-md-12">
<Carousel/>
                    </div>

                </div>
            </div>
        )
    }
}
