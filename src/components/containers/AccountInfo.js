import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class AccountInfo extends Component{

  constructor(){
    super()
    this.state = {
      profile: {}
    }
  }

  onInputChange(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.profile)
    updated[event.target.id] = event.target.value
    this.setState({
      profile: updated
    })
  }

  submitUpdates(){
    this.props.updateAccount(this.state.profile, this.props.user.id)
  }

  render(){
    const user = this.props.user
    return(
      <div>
        Edit Account Info
        {
          (this.props.user == null) ? 
          <div>
            Not logged in
          </div>
          :
          <div>
            <h4>Edit Account Info</h4>
            <input onChange={this.onInputChange.bind(this)} id="firstName" type="text" placeholder={user.firstName}/> < br />
            <input onChange={this.onInputChange.bind(this)} id="email" type="text" placeholder={user.email} /> < br/>
            <button onClick={this.submitUpdates.bind(this)} type="submit">Submit Changes</button>
          </div>
        }
      </div>
    )
  }
} 

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return{
    updateAccount: (params, id) => dispatch(actions.updateAccount(params, id))
  }
}

export default connect(stateToProps, dispatchToProps)(AccountInfo)