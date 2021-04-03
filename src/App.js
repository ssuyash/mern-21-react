import React, { Component } from 'react'
import Home from './Containers/Home'
import Playground from './Components/Playground'
import Person from './Components/Person'
import Calc from './Components/Calc'
import Form from './Components/Form'
import Balancesheet from './Containers/Balancesheet'

export default class App extends Component {
  render() {

    return (
      <Balancesheet/>
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
}
