import React, { Component } from 'react'

export default class Balancesheet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             amount:0,
             type:"credit",
             remark:"",
             transactions:[
                 
             ]
        }
    }

    saveTxn = ()=>{
        let {amount, type, remark} = this.state
        let transactions = [...this.state.transactions]
        let newTxn = {
            amount, type, remark
        }
        transactions.push(newTxn)
        this.setState({transactions, amount:0, remark:""})
        



    }
    
    render() {
        return (
            <div className="container">
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
                        onChange={e=>this.setState({remark:e.target.value})}
                        ></input>
                    </div>

                    <div className="col-md-3">
                       <button 
                       className="btn btn-info btn-block"
                       onClick={this.saveTxn}
                       >Save</button>
                    </div>

                    
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Remark</th>
                                </tr>
                            </thead>

                            <tbody>
                               {this.state.transactions.map((txn, ind)=>{
                                   return ( <tr key={ind}>
                                    <td>{txn.amount}</td>
                                    <td>{txn.type}</td>
                                   <td>{txn.remark}</td>
                                </tr>)
                               })}
                            </tbody>
                        </table>
                    </div>
                </div>
            
            </div>
        )
    }
}
