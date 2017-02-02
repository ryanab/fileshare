import React, { Component } from 'react'
import { Authenticate } from '../view'

class Account extends Component{
  render(){
    return(
        <div>
          <h2>Account Container</h2>
          <Authenticate />
        </div>
    )
  }
}


export default Account
