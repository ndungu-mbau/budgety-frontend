import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import DataProvider from './utils/data'

import dash from './pages/dash'
import login from "./pages/login"

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => {
    return (
      <DataProvider>
      {({ token }) => {
        return token ? <Component {...props} /> : <Redirect to="/login" />
      }}
      </DataProvider>)
  }}/>
)

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={dash} />
        <Route path="/login" component={login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
