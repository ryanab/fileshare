import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, ProfileLayout, ProfilesLayout, UserAccount } from './components/layout'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'



const app = (
  <Provider store={store.configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} /><br />
      <Route path="/account" component={UserAccount}/>
			<Route path="/profile/:profileId" component={ProfileLayout} />
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
