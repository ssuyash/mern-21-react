import React, { Component } from 'react'
import Nav from './Nav'

export default class Scaffold extends Component {
   
    render() {
        return (
            <div className="container-fluid">
                <Nav />

                <div ></div>

                {this.props.children}
            </div>
        )
    }
}
