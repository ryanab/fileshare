import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'


class Profile extends Component{
	

	componentDidMount(){
	//	console.log(JSON.stringify(this.state))
		 // console.log('PROFILES: '+JSON.stringify(response.body))
	
		const id = this.props.params.id
		console.log(JSON.stringify(this.props))
		// if(this.props.profiles[id] != null)
		// 	return
		// this.props.fetchProfile(id)

		 this.props.fetchProfile({_id: id})
    .then(result=>{
     console.log(JSON.stringify(result))
     console.log('whatever ')
    })
   
    
	}



  render(){
  	// const profile = this.props.profile[this.props.id]


    return (
    	
      <div>

      	<h3>'s files</h3><br />
      	<h2></h2>
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
		profile: state.profile.page
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchProfile: (id) => dispatch(actions.fetchProfile(id))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
