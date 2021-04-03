import React, { Component } from 'react'

export default class Balsmrytbl extends Component {
    render() {
        return (
                     
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-bordered">
                        <tr>
                            <th>Total Credit</th>
                            <td>{this.props.smry.credit}</td>
                        </tr>

                        <tr>
                            <th>Total Debit</th>
                            <td>{this.props.smry.debit}</td>
                        </tr>

                        <tr>
                            <th>Balance</th>
                            <td>{this.props.smry.balance}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
