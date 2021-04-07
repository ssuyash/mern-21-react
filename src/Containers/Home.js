import React, { Component } from 'react'
import Nav from '../Components/Nav'
import Carousel from '../Components/Carousel'



export default class Home extends Component {
    constructor(props) {
        console.log("HOME : constructor")
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("HOME : render")
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>HOme component</h1>
                        {/* <Nav/> */}
                    </div>

                    {/* <div className="col-md-12">
<Carousel/>
                    </div> */}

                </div>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state){
        console.log("HOME : getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("HOME : componentdidmount")
    }


    shouldComponentUpdate(newProps, newState){
        console.log("HOME : shouldcomponentupdate")
        return true
      }
    
      getSnapshotBeforeUpdate(oldProps, oldState){
        console.log("HOME : getsnapshotbeforeupdate")
        return null
      }
    
      componentDidUpdate(oldProps, oldState, snapshot){
        console.log("HOME : componentdidupdate")
      }
      componentWillUnmount(){
        console.log("HOME : componentwillunmount")

      }
}
