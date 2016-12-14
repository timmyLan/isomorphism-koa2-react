import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react'

import App from './containers/App'
import News from './containers/News'
import About from './containers/About'
import Home from './containers/Home'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="news" component={News} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)
