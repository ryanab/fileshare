import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'


class Profile extends Component{
	

	componentDidMount(){
	 console.log('PROFILE: '+JSON.stringify(this.props.params)) 
    
	}



  render(){
  	 const profile = this.props.profiles[this.props.params.id]

    return (	
      <div>

      	<h2>{profile.firstName}'s files</h2><br />
      	<h3>{profile.email}</h3>
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
		profiles: state.profile
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchProfile: (id) => dispatch(actions.fetchProfile(id))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
