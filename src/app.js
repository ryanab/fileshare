import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, ProfileLayout } from './components/layout'
import { Provider } from 'react-redux'
import store from './store'




const app = (
  <Provider store={store.configureStore()}>
    <div>
      <Home /><br />
      <ProfileLayout />
    </div>
  </Provider>
)




ReactDOM.render(app, document.getElementById('root'))
