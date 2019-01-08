import React from 'react'
import Home from './Home'
import NotFound from './NotFound'
import { Route, Switch } from 'react-router-dom'

export default function Routes(){
    return (
        <Switch>
          <Route exact path="/404" component={NotFound} />
          <Route path="/" component={Home} />
        </Switch>
    )
}