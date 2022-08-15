import { useLocation } from "react-router-dom";
import React,{useEffect} from "react";
import './singlecontact.css'
import Arrow from './arrow.png'
import { useHistory } from "react-router-dom";
export default function Singlecontact(props){
    const location = useLocation();
    const his=useHistory();
    useEffect(() => {
    }, [location]);
    function back(){
        his.goBack();
    }
    return <div><div id="profile"><div id="imge"></div><div id="names">{location.state.data.name}</div>
    <img src={Arrow} onClick={back} id="back"/></div>
    <br/><br/><div id="phone">Phone :<div id="num">{location.state.data.number}</div></div>
    <br/><div id="phone">What's app :<div id="num">{location.state.data.number}</div></div>
    <br/><div id="phone">Mail :<div id="num">{location.state.data.name}@gmail.com</div></div>
    <br/><br/><br/><br/><hr/></div>
}