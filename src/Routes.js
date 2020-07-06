/* Orange Copyright restricted MVP */

import React from 'react';
import { Route, Switch, withRouter,Router} from 'react-router-dom';
import NotFound from './components/Layout/NotFoundPage/NotFound';
import LoginUI from './components/LoginPage/LoginUI';
import ChangePassword from './components/ChangePassword/ChangePassword';
import ProtectedRoute from './contexts/ProtectedRoute';
import Account from './components/AccountPage/Account';
import Visgl from './components/VisglPage/Visgl';
import 'typeface-roboto';

import APLdemo from './components/APLdemoPage/APLdemo';

export default () =>
  <Switch>
    <Route path='/' exact component={withRouter(APLdemo)} />
    <Route path='/Login' exact component={withRouter(LoginUI)} />
    <ProtectedRoute  path = '/Account' exact component = {withRouter(Account)}/>
    <Route  path = '/manageusers' exact component = {withRouter(Visgl)}/>
    { /* Finally, catch all unmatched routes */ }
	  <ProtectedRoute  component={withRouter(NotFound)}/>

  </Switch>;
