import React, { Component } from 'react'
import axios from 'axios'
import config from '../config/config'
import { ToastContainer, toast } from 'react-toastify';


export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
             email:"",
             password:""
        }
    }

   loginUser = ()=>{
        let { email, password} = this.state
        axios.post(`${config.API}/login`, { email, password}).then(async (res) =>  {
            let data = res.data
            if(data.status != "OK"){
                toast(data.msg)
            }else{
                let token = data.data.token 
                await localStorage.setItem("lgntkn", token)
                toast(data.msg)
                window.location = '/'

            }

        }).catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="col-md-6 offset-3 mt-5">
                    <p className="display-4 text-center">Login</p>
                  
                </div>


                <div className="col-md-6 offset-3 mt-5">
                    <input 
                    className="form-control" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}
                    />
                </div>

                <div className="col-md-6 offset-3 mt-5">
                    <input 
                    className="form-control" 
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={(e)=>this.setState({password:e.target.value})}
                    />
                </div>



                <div className="col-md-6 offset-3 mt-5 text-center">
                    <button 
                    className="btn btn-success btn-block"
                    onClick={this.loginUser}
                    >Login</button>
                </div>

                <ToastContainer position="top-center"/>

            </div>
        )
    }
}
