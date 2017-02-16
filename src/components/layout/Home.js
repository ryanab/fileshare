import React, { Component } from 'react'
import { Account, Files, Profile, Profiles, CurrentUserUploads } from '../containers'
import { ProfileLayout, ProfilesLayout} from '../layout'
import { Link } from 'react-router'

class Home extends Component{
	render(){

    return(
      <div>
        <h1>Home Layout</h1>
				<hr style={{border:'2px solid black'}}/>
        <Files />
				<hr style={{border:'2px solid black'}} />
       	<Account />
				<hr style={{border:'2px solid black'}} />
				<CurrentUserUploads />
				<hr style={{border:'2px solid black'}} />
				<Link to='/profiles'>Profile</Link>
      </div>
    )
  }
}

export default Home
