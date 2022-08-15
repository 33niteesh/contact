import './input.css'
import {useState} from 'react'
import mag from './search.png'
import { useHistory } from 'react-router-dom';
export default function Input(props){
    const [tar,setTar]=useState();
    let history=useHistory();
    function searchdata(){
        if(tar.length==0){
           alert("No results found")
        }else{
            history.push({pathname:'/result',state:{tar:tar}})
        }
    }
    function search(e){
        let input=e.target.value;
        let vari=[];
        props.data.map(target=>{
            document.getElementById("inputDisplay").innerHTML=input;
            if(target.name.match(input) && input!=""){
                vari.push(target)
            }
        })
        setTar(vari);
    }
    return <div id="head">
        <input onChange={search} id='search' placeholder='Search Contacts'/>
        <img onClick={searchdata} src={mag} id="dis">
        </img>
        
        <div id="inputDisplay"></div>
        </div>
}