import React, { Component } from 'react'
import { Account, Files, Profile, Profiles, CurrentUserUploads } from '../containers'
import { ProfileLayout, ProfilesLayout} from '../layout'
import { Link } from 'react-router'

class Home extends Component{
	render(){
    return(
      <div>
        <h1>Home Layout</h1>
				<hr />
        <Files />
				<hr />
       	<Account />
				<hr />
				<CurrentUserUploads />
				<hr />
				<Link to='/profiles'>Profile</Link>
      </div>
    )
  }
}

export default Home
