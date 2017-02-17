import React, { Component } from 'react'
import {  JDProfile } from '../containers'


class ProfileLayout extends Component {
	render(){
		return(
			<div>
				<JDProfile {...this.props}/>
			</div>
		)
	}
}

export default ProfileLayout
