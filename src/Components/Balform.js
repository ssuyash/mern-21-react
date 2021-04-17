import React, { Component } from 'react'
import axios from 'axios';
import config from '../config/config'
import { toast, ToastContainer } from 'react-toastify';

export default class Balform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            amount:0,
            type:"credit",
            remark:"",
            token:""
        }
    }

    saveTxnFrm = ()=>{
        let {amount, type, remark} = this.state
        let txn = {
            amount, type, remark
        }
        axios.post(`${config.API}/transaction`, txn, {headers:{token:this.state.token}}).then(res=>{
            let data = res.data
            toast(data.msg)
        }).catch(err=>{

        })
        
        this.props.saveTxnBal(txn)
        this.setState({amount:0, remark:""})
    }

    async componentDidMount(){
       let token =  await localStorage.getItem('lgntkn')
       this.setState({token})
    }
    
    render() {
        return (
            <div className="row">
            <div className="col-md-3">
                <input 
                type="number" 
                value={this.state.amount}
                className="form-control"
                onChange={e=>this.setState({amount:e.target.value})}
                ></input>
            </div>


            <div className="col-md-3">
                <select 
                type="number" 
                value={this.state.type}
                className="form-control"
                onChange={e=>this.setState({type:e.target.value})}
                >
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
            </div>

            <div className="col-md-3">
                <input 
                type="text" 
                value={this.state.remark}
                className="form-control"
                placeholder="remark"
                onChange={e=>this.setState({remark:e.target.value})}
                ></input>
            </div>

            <div className="col-md-3">
               <button 
               className="btn btn-info btn-block"
               onClick={this.saveTxnFrm}
               >Save</button>
            </div>

            <ToastContainer/>
        </div>
        )
    }
}
