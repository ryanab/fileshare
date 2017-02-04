import React, { Component } from 'react'
import { Authenticate } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class Account extends Component{
  
  login(credentials){
    this.props.login(credentials)
  }

  register(credentials){
    this.props.register(credentials)
  }
  
  render(){
    
    return(
        <div>
          <h2>Account Container</h2>
          <h3>{(this.props.user==null)?'':this.props.user.email}</h3>
          <Authenticate onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/>
        </div>
    )
  }
}


const stateToProps = (state)=>{
  return{
    user: state.account.user
  }
}

const dispatchToProps = (dispatch)=>{
  return{
    login:(params)=>dispatch(actions.login(params)),
    register: (params) => dispatch(actions.register(params))
  }
}

export default connect (stateToProps, dispatchToProps)(Account)
