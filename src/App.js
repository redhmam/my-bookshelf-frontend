import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Account from './containers/Account';

function App() {
  return (
    <Router>
    <Switch>
      {/* Rotas públicas */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} exact/>
      <Route path="/signup" component={SignUp} exact/>
      <Route path="/account" component={Account}/>

      {/* Not found 404 */}
      {/* <Route component={ScreeesNoMatch}/> */}
    </Switch>
    </Router>
  );
}

export default App;