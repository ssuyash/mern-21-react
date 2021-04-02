import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
            age:0,
            ageVisible:false,


        }
    }

    calcAge = ()=>{
        let age = 2021-this.props.yob
        this.setState({ageVisible:true, age})

    }
    
    render() {
        return (
            <div>
                <p>Name : {this.props.name}</p>
                <p>Gender : {this.props.gender}</p>
                <p>YOB : {this.props.yob}</p>

                <button onClick={this.calcAge}>calc age</button>


                {this.state.ageVisible ? <p>Age : {this.state.age}</p>
: null}

            </div>
        )
    }
}
