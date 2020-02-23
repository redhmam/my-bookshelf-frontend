import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './containers/Account/Auth';

import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Account from './containers/Account';
import Search from './containers/Search';

function App() {
  return (
    <Router>
      <Switch>
        {/* Rotas públicas */}
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/signup" component={SignUp} exact/>
        <Auth path="/account/search" component={Search} exact/>
        <Auth path="/account" component={Account} exact/>
        <Auth path="/account/:list" component={Account}/>

        {/* Not found 404 */}
        {/* <Route component={ScreeesNoMatch}/> */}
      </Switch>
    </Router>
  );
}

export default App;