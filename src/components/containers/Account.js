import React, { Component } from 'react'
import { Authenticate } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class Account extends Component{
  
  componentDidMount(){
    this.props.fetchCurrentUser()
    .then(result=>{
      console.log(JSON.stringify(result.user))
    })
  }

  componentDidUpdate(){
    console.log(JSON.stringify(this.props.user))
  }

  login(credentials){
    this.props.login(credentials)
  }

  register(credentials){
    this.props.register(credentials)
  }

  logout(){
    this.props.logout()
  }
  

  render(){
    return(
      <div>
      {
        (this.props.user==null)?
        <Authenticate onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/>
        :(
          <div>
            <h3>{this.props.user.firstName}</h3>
            <h4>{this.props.user.email}</h4>
            <button onClick={this.logout.bind(this)}>Logout</button>
          </div>
        )
      }
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
    login:(params)=> dispatch(actions.login(params)),
    register: (params) => dispatch(actions.register(params)),
    fetchCurrentUser:()=> dispatch(actions.fetchCurrentUser()),
    logout:()=> dispatch(actions.logout())
  }
}

export default connect(stateToProps, dispatchToProps)(Account)
