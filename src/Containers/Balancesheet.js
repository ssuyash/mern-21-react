import React, { Component } from 'react'
import Balform from '../Components/Balform'
import Baltxntable from '../Components/Baltxntable'
import Balsmrytbl from '../Components/Balsmrytbl'
import Scaffold from '../Components/Scaffold'

export default class Balancesheet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
             transactions:[],
             token:""
        }
    }

    async componentDidMount(){
      let loginToken =  await localStorage.getItem("lgntkn")
      if(loginToken == null){
          window.location = "/login"
          return
      }else{
        this.setState({token:loginToken})
      }


      console.log("data from local storage", loginToken)
    }

    getTxnSummary = ()=>{
        let txns = [...this.state.transactions]
        let debit = 0
        let credit = 0
        txns.forEach((txn)=>{
            if(txn.type == "debit"){
                debit+= parseInt(txn.amount)
            }

            if(txn.type == "credit"){
                credit+= parseInt(txn.amount)
            }
        })

        return {
            debit, 
            credit,
            balance:credit-debit
        }


    }

    saveTxn = (newTxn)=>{
        let transactions = [...this.state.transactions]

        if(newTxn.type == "debit"){
            let balance = this.getTxnSummary().balance
            if(newTxn.amount > balance){
                alert("Invalid transaction")
                return
            }
        }

      
        transactions.push(newTxn)
        this.setState({transactions})
        



    }
    
    render() {
        let smry = this.getTxnSummary()
        return (
            <Scaffold>
            <div className=" mt-5">
               <Balform saveTxnBal={this.saveTxn}/>
               <Baltxntable transactions={this.state.transactions}/>
               <Balsmrytbl smry={smry}/>

      
            </div>
            </Scaffold>
        )
    }
}
