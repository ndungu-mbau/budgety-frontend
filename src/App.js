import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route location="/" exact component={home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
