 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import history from "./history";
import routes from './Routes';
import {Cookies } from 'react-cookie';
import 'typeface-roboto';

import setAuthToken from './actions/setAuthToken';


const cookies = new Cookies()

const store = createStore(
	(state = {} )=> state,
  compose (applyMiddleware(thunk)
  )
  );
  if(cookies.get('usrtoken')){
    setAuthToken(cookies.get('usrtoken'));
    
  }

ReactDOM.render(
  <Provider store = {store}>
   <Router history={history} routes={routes}>
          <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
