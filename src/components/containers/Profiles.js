import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
import Profile from '../containers'

class Profiles extends Component {
	componentDidMount(){
		this.props.fetchProfiles(null)

		// if(this.props.profiles != null)
		// 	return
		// console.log('PROFILES: '+JSON.stringify(this.props.profiles))	
	}


 render(){
 	 const profilesList = this.props.profiles

 	return(
 		<div>
 		{ 
 			(profilesList == null) ? <h2>Nothing found</h2> :
 			profilesList.map((profile, i) => {
 				return (
 					<div key={profile.id}>
 						<h2>{profile.firstName}</h2>
 						<h3>{profile.email}</h3>
 					</div>
 				)
 			})
 		}
 		</div>
 	)
 }
}

const stateToProps = (state) => {
	return {
		profiles: state.profile.all
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchProfiles: (params) => dispatch(actions.fetchProfiles(params))
	}
}

export default connect(stateToProps, dispatchToProps)(Profiles)