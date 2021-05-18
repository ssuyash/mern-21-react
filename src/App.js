import React, {useReducer, useContext} from 'react'
import Comp1 from './Components/Comp1'
import Transactions from './Components/Products'
import './App.css'
import Fileupload from './Components/Fileupload'

export const appContext = React.createContext()

const initState = 0

const reducer = (state, action)=>{
  switch(action){
    case 'increment':
      return state+1
    case 'decrement':
      return state-1;
    default:
      return state;
  }
  
}

export default function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  return (

    <Fileupload/>

    // <appContext.Provider value={{counter:count, dispatchCounter:dispatch}}>
    // <div>
    //   in App Comp count is : {count}<br/>

    //   <button
    //   onClick={()=>dispatch('increment')}
    //   >Inc</button>
    //   <button
    //    onClick={()=>dispatch('decrement')}
    //   >Dec</button><br/>

    //   <Comp1/>
    // </div>
    // </appContext.Provider>
  )
}
