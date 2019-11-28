import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import dash from './pages/dash'
import login from "./pages/login"

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => {
    const token = localStorage.getItem('token')
    return token ? <Component {...props} /> : <Redirect to="/login"/>
  }}/>
)

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={dash} />
        <Route path="/login" component={login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
