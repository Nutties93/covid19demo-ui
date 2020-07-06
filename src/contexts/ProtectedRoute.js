/* Orange Copyright restricted MVP */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        render={props =>
          (cookies.get('usrtoken')&& cookies.get('username')) ? <Component {...props} /> : <Redirect to='/Login' />
        }
        {...rest}
      />
)

export default ProtectedRoute
