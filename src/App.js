import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Containers/Home'
import Playground from './Components/Playground'
import Person from './Components/Person'
import Calc from './Components/Calc'
import Form from './Components/Form'
import Balancesheet from './Containers/Balancesheet'

export default class App extends Component {
  constructor(props) {
    console.log("APP : Constructor")

    super(props)
  
    this.state = {
       count:0,
       showHome:true
    }

  }
  
  render() {
    console.log("APP : render")

    return (
      // <Router>
      //   <Route path="/" component={Home} exact/>
      //   <Route path="/balance" component={Balancesheet}/>
      //   <Route path="/calc" component={Calc}/>
      // </Router>
    
<>
      {this.state.showHome ? <Home/> : 
    <h1>App component {this.state.count}</h1>}

    <button onClick={()=>this.setState({showHome:false})}>hide home</button>
   </>
      
      
    )

    
    // let persons = [
    //   {name:"Anukriti", gender:"female", yob:"1996"},
    //   {name:"Alpna", gender:"female", yob:"1995"},
    //   {name:"Yahiya", gender:"male", yob:"1998"},
    //   {name:"Yahiya", gender:"male", yob:"1998"},
    //   {name:"Yahiya", gender:"male", yob:"1998"},
    //   {name:"Yahiya", gender:"male", yob:"1998"},
    //   {name:"Yahiya", gender:"male", yob:"1998"},
    //   {name:"Yahiya", gender:"male", yob:"1998"},
      
    //   {name:"Yahiya", gender:"male", yob:"1998"},
    // ]
    // return (

    //   persons.map(e=>{
    //     return(<Person {...e} key={Math.random()}/>)
    //   })
    // )
  }


  static getDerivedStateFromProps(props, state){
    console.log("APP : getDerivedStateFromProps")
    return null
      
  }

  componentDidMount(){
    console.log("APP : componentDidMount")
    setTimeout(()=>{
      this.setState({count:1})
    }, 2000)
  }

  // shouldComponentUpdate(newProps, newState){
  //   console.log("APP : shouldcomponentupdate")
  //   if(this.state.count != newState.count){
  //     return true
  //   }
  //   return false

  // }

  getSnapshotBeforeUpdate(oldProps, oldState){
    console.log("APP : getsnapshotbeforeupdate")
    return {...oldState}
  }

  componentDidUpdate(oldProps, oldState, snapshot){
    console.log(snapshot)
    console.log("APP : componentdidupdate")
  }

}
