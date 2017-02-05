import React, { Component } from 'react'
import { Account, Files, Profile } from '../containers'
import { ProfileLayout, ProfileStatic } from '../layout'
import { Link } from 'react-router'

class Home extends Component{
  render(){
    return(

			<div id="wrapper">
				<div id="main">
					<div className="post">
						<Account /><br />
						<br />
						<Link to="/profile/">Profile</Link>
						<br />
						<Link to="/profile/"><strong>FFs ProfileStatic Layout</strong></Link>
					</div>
					<br />

					<div className="post">
					  <Files />
					</div>
				</div>
			</div>
    )
  }
}

export default Home
