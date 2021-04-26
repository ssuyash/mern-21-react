import axios from 'axios';
import React, { useState, useEffect, useContext} from 'react';

import {appContext} from '../App'

export default function Functioncomp() {

    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([])
    const context = useContext(appContext)

    console.log(context)

    const [product, setProduct] = useState({ title: "BenQ 32inch", price: "21000" })


    useEffect(()=>{
        console.log("use effect ")
        axios.get("https://jsonplaceholder.typicode.com/posts/").then(res=>{
            setPosts(res.data)
        }).catch(err=>{

        })

    }, [])



    return (<div>

        <input
            type="text"
            value={product.title}
            onChange={(e) => setProduct({...product, title: e.target.value })}
        ></input>


        <input
            type="text"
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value })}
        ></input>

        <p>
            item title is : {product.title}<br></br>
            item price is : {product.price}
        </p>
                
        count is : {count}
        <button 
        onClick={()=>setCount(prev=>prev+1)}
        >increase count</button>

        {posts.map(post=>{
            return (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <hr/>
                </div>
            )
        })}
    </div>)
}