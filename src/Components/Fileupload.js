import React, { Component } from 'react'
import axios from 'axios'
export default class Fileupload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedFile:null
        }
    }
    handleFileUpload = (ev)=>{
        console.log(ev.target.files)
        this.setState({selectedFile:ev.target.files[0]})
    }

    upload = ()=>{
        let frm = new FormData();
        frm.append("file", this.state.selectedFile, this.state.selectedFile.name)
        axios.post("http://127.0.0.1:3300/file-upload", frm).then(res=>{
            alert("success")
        }).catch(err=>{
            alert("Error")
        })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={(e)=>this.handleFileUpload(e)}></input>

                <button onClick={this.upload}>Upload</button>
            </div>
        )
    }
}
