import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class AccountInfo extends Component{

  componentDidMount(){
    console.log(JSON.stringify(this.props.user))
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
            <input type="text" placeholder={user.firstName}/> < br />
            <input type="text" placeholder={user.email} /> < br/>
            <button type="submit">Submit Changes</button>
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
    updateAccount: (params) => dispatch(actions.updateAccount)
  }
}

export default connect(stateToProps, dispatchToProps)(AccountInfo)