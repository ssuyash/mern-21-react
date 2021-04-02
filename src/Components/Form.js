import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"suyash"
        }
    }
    
    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.state.username}
                onChange={(e)=>{
                    this.setState({username:e.target.value})
                }}
                ></input>
                {this.state.username}
            </div>
        )
    }
}
