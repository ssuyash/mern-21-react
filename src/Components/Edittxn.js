import React, { Component } from 'react'
import axios from 'axios'
import config from '../config/config'

export default class Edittxn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: 0,
            type: "credit",
            remark: "",
            token:""
        }
    }

    static getDerivedStateFromProps(props, state){
        return {id:props.match.params.txn}
    }
    
    async componentDidMount(){
        let token = await localStorage.getItem("lgntkn")
        this.setState({token})
        axios.get(`${config.API}/transaction/${this.state.id}`, {headers:{token}}).then(res=>{
            let data = res.data.data
            let {amount, type, remark} = data
            this.setState({amount, type, remark})
           
        }).catch(err=>{

        })
    }


    updataData = ()=>{
        let {amount, remark, type, id, token} = this.state
        axios.put(
            `${config.API}/transaction/${id}`,
            {amount, type, remark},
            {headers:{token}}
        ).then(res=>{
            console.log(res)
            this.props.history.push('/')
        }).catch(err=>{

        })
    }

    render() {
        console.log(JSON.stringify(this.props.match.params))
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3 mt-5">
                        <input
                            className="form-control"
                            type="number"
                            value={this.state.amount}
                            onChange={e => this.setState({ amount: e.target.value })}
                        ></input>

                        <select
                            className="form-control mt-5"

                            value={this.state.type}
                            onChange={e => this.setState({ type: e.target.value })}
                        >
                            <option>debit</option>
                            <option>credit</option>
                        </select>

                        <input
                            className="form-control mt-5"
                            type="text"
                            value={this.state.remark}
                            onChange={e => this.setState({ remark: e.target.value })}
                        ></input>


                        <button 
                        className="btn btn-primary btn-block mt-5"
                        onClick={this.updataData}
                        >Update Details</button>
                    </div>



                </div>
            </div>
        )
    }
}
