import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, ProfileLayout, ProfilesLayout, JDProfileLayout, UserAccount } from './components/layout'
import { Profiles } from './components/containers'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'



const app = (
  <Provider store={store.configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} /><br />
			<Route path="/jdprofile/:profileId" component={JDProfileLayout} />
      <Route path="/account" component={UserAccount}/>
			<Route path="/profile/:profileId" component={ProfileLayout} />
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
