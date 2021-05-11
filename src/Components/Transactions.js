import React, { Component } from 'react'
import axios from 'axios'

export default class Transactions extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             transactions:[]
        }
    }

    componentDidMount = () => {
        axios.get('http://127.0.0.1:3300/transaction/transactions', {
            headers:{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGY3OWUzZDZlODRiZGRiNmE1ZWNiOCIsImlhdCI6MTYyMDQ3MjkyMX0.STGgt7HZCp_3ny6-nnrE802clFhUMaUeuXuaH1vdIeM"}
        }).then(res=>{
            this.setState({transactions:res.data.data})
        }).catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                {this.state.transactions.map(txn=>{
                    return(<li key={txn._id}>
                        {txn.amount}<br></br>
                        {txn.type}<br/>
                        {txn.remark}
                    </li>)
                })}
                </ul>
            </div>
        )
    }
}
