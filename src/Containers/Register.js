import React, { Component } from 'react'
import axios from 'axios'
import config from '../config/config'
import { ToastContainer, toast } from 'react-toastify';


export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             password:""
        }
    }

    registerUser = ()=>{
        let {name, email, password} = this.state
        axios.post(`${config.API}/register`, {name, email, password}).then(res=>{
            let data = res.data
            if(data.status != "OK"){
                toast(data.msg)
            }else{
                toast(data.msg)
                window.location = '/login'

            }

        }).catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="col-md-6 offset-3 mt-5">
                    <p className="display-4 text-center">Register yourself</p>
                    <input 
                    className="form-control mt-5" 
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e)=>this.setState({name:e.target.value})}
                    />
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
                    onClick={this.registerUser}
                    >Register</button>
                </div>

                <ToastContainer position="top-center"/>

            </div>
        )
    }
}
