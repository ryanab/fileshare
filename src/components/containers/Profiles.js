import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
import Profile from '../containers'

class Profiles extends Component {
	componentDidMount(){
		if(this.props.profiles != null)
			return

		console.log('PROFILES: '+JSON.stringify(this.props.profiles))	
	}


 render(){
 	// const profilesList = this.props.profiles

 	return(
 		<div>
 		{/*	{
 				(profilesList == null) ? null : profilesList.map((profile, i) => {
 					return (
 						<ul>
 							<li>{profile.username}</li>
 						</ul>
 					)
 				})
 			}
 		*/}
 		</div>
 	)
 }
}

const stateToProps = (state) => {
	return {
		profiles: state.profile
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchProfiles: (params) => dispatch(actions.fetchProfiles(params))
	}
}

export default connect(stateToProps, dispatchToProps)(Profiles)