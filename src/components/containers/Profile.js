import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'


class Profile extends Component{
	componentDidMount(){
		console.log('PROFILE: '+JSON.stringify(this.props.profile))
	}

  render(){
    return(
      <div>
      	<h2>Donald's Profile</h2>
      	<h3>Donald's Posts</h3>
      </div>
    )
  }
}

const stateToProps = (state) => {
	return {
		profile: state.profile
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchProfile: (id) => dispatch(actions.fetchProfile(id))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
