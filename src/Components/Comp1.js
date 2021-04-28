import React, {useContext} from 'react'
import {appContext} from '../App'

export default function Comp1() {
   const contextData =  useContext(appContext)
    return (
        <div>
            comp 1 here
            {contextData.counter}

            <button
      onClick={()=>contextData.dispatchCounter('increment')}
      >Inc</button>
      <button
       onClick={()=>contextData.dispatchCounter('decrement')}
      >Dec</button><br/>
        </div>
    )
}
