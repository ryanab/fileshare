import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import Files from './Files'


class Profile extends Component{
	

	componentDidMount(){
	 console.log('PROFILE: '+JSON.stringify(this.props.params)) 
    
	}



  render(){
  	 const profile = this.props.profiles[this.props.params.id]
     const file = this.props.file[this.props.params.id]
     if (this.props.file == null)
      return
     console.log('FILE: '+JSON.stringify(this.props.file))
    return (	
      <div>

      	<h2>{profile.firstName}'s files</h2><br />
      	<h3>{profile.email}</h3>
      	<div>
      		<ol> 
          {
            (file == null) ? <p>This user has not uploaded any files.</p> : file.map((file, i) => {
              return <li key={file.id}>{file.fileTitle}</li>
            })
          }
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
		profiles: state.profile,
    file: state.files
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchProfile: (id) => dispatch(actions.fetchProfile(id))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
