import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/layout'
import { Provider } from 'react-redux'
import store from './store'



const app = (
  <Provider store={store.configureStore()}>
    <div>
      <Home />
    </div>
  </Provider>
)




ReactDOM.render(app, document.getElementById('root'))
