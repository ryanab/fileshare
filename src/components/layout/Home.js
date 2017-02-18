import React, { Component } from 'react'
import { Account, Files, Profile, Profiles, CurrentUserUploads } from '../containers'
import { ProfileLayout, ProfilesLayout} from '../layout'
import { Link } from 'react-router'

class Home extends Component{
	render(){

    return(
    	<div>
	      <div className="container">
	      	<h1>Home Layout</h1>
	      	<div className="row">
	      		<div className="col-md-2" style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
	      			<Account />
	      		</div>
	      	</div>
	      	<div className="row">
	      		<div className="col-md-3" style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
	      			<CurrentUserUploads />
	      		</div>
	      	</div>
	      </div>
	      <div className="container">
	      	<div className="row">
	      		<div className="col-md-9" style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
	      			<Files />
	      		</div>
	      	</div>      	
	      </div>
				<Link to='/profiles'>Profile</Link>< br />
        <Link to='/account'>My Account</Link>
	    </div>
		)
  }
}

export default Home
