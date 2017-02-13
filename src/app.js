import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, ProfileStatic, AuthLayout } from './components/layout'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// profileLayout is Rob's. I left that alone and made a static profile
const app = (
  <Provider store={store.configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} /><br />
			<Route path="/profile" component={ProfileStatic} />
			<Route path="/account" component={AuthLayout} />
    </Router>
  </Provider>
)




ReactDOM.render(app, document.getElementById('root'))
