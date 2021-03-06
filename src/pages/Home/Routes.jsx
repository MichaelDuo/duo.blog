import React from 'react'
import Blogs from 'pages/Blogs'
import Blog from 'pages/Blog'
import Archives from 'pages/Archives'
import AboutMe from 'pages/AboutMe'
import { Route, Switch, Redirect } from 'react-router-dom'

export default function Routes(){
    return (
        <Switch>
          <Route exact path="/" component={Blogs} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/blog/:id" component={Blog} />
          <Route path="/archives" component={Archives} />
          <Route path="/resume" component={AboutMe} />
          <Route component={() => <Redirect to="/404" />} />
        </Switch>
    )
}