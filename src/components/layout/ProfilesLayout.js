import React, { Component } from 'react'
import { Profiles } from '../containers'

class ProfilesLayout extends Component {
	render(){
		return(
			<div>
				<Profiles {...this.props} />
			</div>
		)
	}
}

export default ProfilesLayout