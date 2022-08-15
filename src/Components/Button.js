import { useHistory  } from 'react-router-dom'
import React from 'react'
export default function Button(props){
    let history=useHistory();
    function Load(){
        history.push({pathname:'/contact',state:{data:props.pass}})
    }
    return <div><button id="button" onClick={Load}><div id="img"/><div id="name">{props.pass.name}</div><div id="number">{props.pass.number}</div>
    <br></br></button>
    </div>
}
