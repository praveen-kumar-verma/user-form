
//mainnnn


// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import {Route, Switch} from "react-router-dom";
import Fetch from './components/Fetch';


const App = () => {
  return (
    <div className='App'>
    <Switch>
      <Route exact path="/" component={Contact} />
      <Route path="/fetch" component={Fetch} />
    </Switch>
    </div>
  );
}

export default App;
