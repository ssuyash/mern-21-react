// import React, { Component } from 'react'

// export default class Playground extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              counter:2,
//         }
//     }

//     inc = ()=>{
//         let counter = this.state.counter
//         counter++
//         this.setState({counter})
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.counter}
//                 {this.state.counter % 2 == 0 ? <p>Even</p> : <p>Odd</p>}
//                 <button onClick={this.inc} >Inc Counter</button>
//             </div>
//         )
//     }
// }




import React, { Component } from 'react'

export default class Playground extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:""
        }
    }

    morning = ()=>{
        this.setState({msg:"Good Morning"})
    }
    
    evening = ()=>{
        this.setState({msg:"Good Evening"})
    }
    

   
    
    render() {
        return (
            <div>
                <p>
                    {this.state.msg}
                    </p>

                    <button
                    className="btn btn-primary"
                    onClick={this.morning} 
                    >Morning</button>
                    <button 
                    className="btn btn-primary"
                    onClick={this.evening} 
                    >Evening</button>
                    <button 
                    className="btn btn-primary"
                    onClick={()=>{
                        this.setState({msg:"Good Night"})
                    }} 

                    >Night</button>
                
            </div>
        )
    }
}
