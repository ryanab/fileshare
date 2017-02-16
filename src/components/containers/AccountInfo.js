import React, { Component } from 'react'

class AccountInfo extends Component{

  render(){
    const user = this.props.user

    return(
      <div>
        Edit Account Info
        {user.firstName}
        {user.email} 
      </div>
    )
  }
}

const stateToProps = (state) => {
  user: account.user  
}

const dispatchToProps = (dispatch) => {

}

export default AccountInfo