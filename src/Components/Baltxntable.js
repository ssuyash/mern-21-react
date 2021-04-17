import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                       {this.props.transactions.map((txn, ind)=>{
                           return ( <tr key={ind}>
                            <td>{txn.amount}</td>
                            <td>{txn.type}</td>
                           <td>{txn.remark}</td>
                           <td>
                               <Link className="btn btn-sm btn-primary" to={`/edit-txn/${txn._id}`}>edit</Link>
                           </td>
                        </tr>)
                       })}
                    </tbody>
                </table>
            </div>
        </div>
    
        )
    }
}
