import React, { Component } from 'react'
import {Route,  Redirect} from 'react-router-dom'
import {checkAuthed} from '../../helpers/AuthHelper'

function SecureRoute ({component: Component, ...rest}) {
    const authed = checkAuthed();
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
  }


  export default SecureRoute;