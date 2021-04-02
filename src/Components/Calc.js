import React, { Component } from 'react'

export default class Calc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

             buttons:[
                 {text:"1", val:1},
                 {text:"2", val:2},
                 {text:"3", val:3},
                 {text:"4", val:4},
                 {text:"5", val:5},
                 {text:"6", val:6},
                 {text:"7", val:7},
                 {text:"8", val:8},
                 {text:"9", val:9},
                 {text:"0", val:0},
                 {text:"+", val:'+'},
                 {text:"-", val:'-'},
                 {text:"*", val:'*'},
                 {text:"/", val:'/'},
                 {text:"%", val:'%'},
                 {text:"=", val:'='},
                 
             ],
             userInp : '0',
        }
    }
    handleBtnClick = (val)=>{
        console.log(val)
        let userInp = this.state.userInp
        if(val != '='){
            if(userInp == 0){
                userInp = val+''

            }else{
                userInp += val

            }
        }else{
            userInp = eval(userInp)

        }

        this.setState({userInp})
    }
    render() {
        return (
            <div className="container row">
                <div className="col-md-6 offset-3">
                    <div className="">
        <textarea className="form-control" value={this.state.userInp}></textarea>
                    </div>


                    <div className="row">

                        {this.state.buttons.map((btn)=>{
                            return ( <div key={btn.text} className="col-md-3  m-0 mt-3 ">
                            <button 
                            className="btn btn-info btn-block"
                            onClick={()=>this.handleBtnClick(btn.val)}
                            >{btn.text}</button>
                        </div>)
                        })}
                       

                        
                    </div>

                </div>
            </div>
        )
    }
}
