import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, ProfileLayout, AuthLayout } from './components/layout'
import { Profile } from './components/containers'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const app = (
  <Provider store={store.configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} /><br />
			<Route path="/profile/:profileId" component={Profile} />
			<Route path="/profile" component={Profile} />
			<Route path="/account" component={AuthLayout} />
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
