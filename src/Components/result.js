import Allcontacts from "./allcontacts";
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";
import Arrow from './arrow.png'
import './result.css'
import { useHistory } from "react-router-dom";
export  default function Result(props){
    const location=useLocation();
    const his=useHistory();
    useEffect(() => {
    }, [location]);
    function back(){
        his.push('/');
    }
    return <div><div id="header"><img src={Arrow} onClick={back} id="i"/></div><br/><Allcontacts data={location.state.tar} id="allcontacts"/></div>
}