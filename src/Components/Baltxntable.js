import React, { Component } from 'react'

export default class Baltxntable extends Component {
    render() {
        return (
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
                       {this.props.transactions.map((txn, ind)=>{
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
    
        )
    }
}
