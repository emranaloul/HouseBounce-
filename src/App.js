import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup'
// import {Provider} from 'react-redux'
// import store from './store'
import AuthProvider from './context/auth'
import Requests from './context/requests'
import Home from './components/home'
import Myrequests from './components/myrequest';
import AdminRequests from './components/adminrequest';
import Acl from './components/acl'
import {AuthContext} from './context/auth'
import React, {useContext} from 'react';
function App() {
 
  return (
    
    <AuthProvider>
      <Requests>
    <Router>
      <Header/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path='/signin'>
      <Signin/>
      </Route>
      <Route exact path='/adminrequest'>
     
      <AdminRequests/>
     
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route exact path='/myrequests'>
        <Myrequests/>
      </Route>
    </Switch>
    </Router>
      </Requests>
     </AuthProvider>
     
  );
}

export default App;
