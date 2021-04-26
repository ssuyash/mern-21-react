import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Containers/Home'
import Playground from './Components/Playground'
import Person from './Components/Person'
import Calc from './Components/Calc'
import Form from './Components/Form'
import Balancesheet from './Containers/Balancesheet'
import Posts from './Components/Posts'
import Statetest from './Components/Statetest'
import 'react-toastify/dist/ReactToastify.css';
import Register from './Containers/Register'
import Login from './Containers/Login'
import Edittxn from './Components/Edittxn'
import {ThemeProvider} from '@material-ui/core'

import Functioncomp from './Components/Functioncomp'
const theme = {}

const appContext = React.createContext()


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
      <appContext.Provider value={{...this.state}}>
          <Functioncomp/>
      </appContext.Provider>

      
      // <ThemeProvider theme={theme}>
      // <Router>


      //   <Route path="/" component={Balancesheet} exact/>
      //   <Route path="/register" component={Register} exact/>
      //   <Route path="/login" component={Login} exact/>
      //   <Route path="/balance" component={Balancesheet}/>
      //   <Route path="/calc" component={Calc}/>
      //   <Route path="/edit-txn/:txn" component={Edittxn}/>
      // </Router>
      // </ThemeProvider>
    

      
      
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


export {appContext}