import React, { Component } from 'react'

export default class Statetest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num:0
        }
    }
    increasebyOne = ()=>{
        this.setState((prevState, props)=>{
            return {num:prevState.num+1}
        }, ()=>{
            console.log(this.state.num)

        })
    }

    increasebyTen = ()=>{
        for(var i=0; i<10; i++){
            this.increasebyOne()

        }
    }
    render() {
        return (
            <div>
                {this.props.children}
                Number is {this.state.num}

                <br/>
                <button onClick={this.increasebyTen}>Increse by ten</button>
            </div>
        )
    }
}
