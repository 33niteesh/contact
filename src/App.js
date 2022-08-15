import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Homepage from './Components/homepage';
import Singlecontact from './Components/singlecontact';
import Result from './Components/result';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Homepage}/>
        <Route exact path={"/contact"} component={Singlecontact}/>
        <Route exact path={"/result"} component={Result}/>
       </Switch>
    </Router>
  );
}

export default App;
