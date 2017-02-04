import React, { Component } from 'react'
import { Authenticate } from '../view'
import { connect } from 'react-redux'

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

const stateToProps = (state)=>{
  return{

  }
}

const dispatchToProps = (dispatch)=>{
  return{

  }
}

export default connect (stateToProps, dispatchToProps)(Account)
