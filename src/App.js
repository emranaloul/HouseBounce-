import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup'
function App() {
  return (
    <Router>
      <Header/>
    <Switch>
      <Router exact path='/signin'>
      <Signin/>
      </Router>
      <Router exact path='/signup'>
        <Signup/>
      </Router>
    </Switch>
    </Router>
  );
}

export default App;
