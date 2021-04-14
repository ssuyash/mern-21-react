import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[
             ],
             isError:false
        }
    }

    fetchData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            let data = res.data
            this.setState({posts:data})
            console.log(res)
        }).catch((err)=>{
            console.log(err)
            toast("Error in data fetching")
        })
    }
    
    render() {
        return (
            
            <div>
                {this.state.isError ? <div> Something went wrong </div> : null}
                {this.state.posts.map(post=>{
                    return (<div>
                        <h1>{post.title}</h1>
                        <h5>{post.body}</h5>
                    </div>)
                })}
                <button onClick={this.fetchData}>fetch data</button>
            
            <ToastContainer position="top-center"/>
            </div>
        )
    }


    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/postsd").then((res)=>{
            let data = res.data
            this.setState({posts:data})
            console.log(res)
        }).catch((err)=>{
            this.setState({isError:true})
            toast("Error in data fetching")

            console.log(err)
        })
    }
}