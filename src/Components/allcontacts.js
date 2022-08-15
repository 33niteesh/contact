import './allcontacts.css'
import Button from './Button'
export default function Allcontacts(props){

 return props.data.map(
    (result,index)=>{
        return (
        <div key={index} id="main">
            <Button pass={result}/>
        </div>)
    }
 )
}