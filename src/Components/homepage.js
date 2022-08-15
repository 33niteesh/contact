import React,{Component} from 'react'
import Input from './input'
import Allcontacts from './allcontacts'
import './home.css'
export default class Homepage extends Component {
  constructor(){
    super();
    this.state={contacts:[]}
  }
  componentDidMount(){
    fetch('contactlist.json').then(data=>data.json()).then(data=>this.setState({contacts:data}))
  }
  render(){
  return (
    <div id="div">
    <Input data={this.state.contacts}/>
    <Allcontacts data={this.state.contacts} id="allcontacts"/>
    </div>
   );
}
}

