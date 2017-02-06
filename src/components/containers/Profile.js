import React, { Component } from 'react'
import { connect } from 'react-redux'



class Profile extends Component{
	componentDidMount(){
		console.log('PROFILE: '+JSON.stringify(this.props.profile))
	
	}

  render(){
    return(
      <div>
      	<h3>{this.props.profile.firstName}'s files</h3><br />
      	<div>
      		<ol>
      			<li>First File</li>
      			<li>Second File</li>
      			<li>Third File</li>
      			<li>Fourth File</li>
      		</ol>
      	</div>
      </div>
    )
  }
}

const stateToProps = (state) => {
	return {
		file: state.file,
		profile: state.profile
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchProfile: (id) => dispatch(actions.fetchProfile(id))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
