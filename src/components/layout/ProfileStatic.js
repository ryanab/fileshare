import React, { Component } from 'react'
import { Profile } from '../containers'
import { Link } from 'react-router'

class ProfileStatic extends Component {
	render(){
		return(
			<div id="wrapper">
				<header id="header">
					<h1><Link to="/">Fileshare</Link></h1>
					<nav className="links">
						<ul>
							<li><Link to="/">Image</Link></li>
							<li><Link to="/">Video</Link></li>
							<li><Link to="/">PDF</Link></li>
							<li><Link to="/">Misc</Link></li>
							<li style={{ paddingLeft:800}}><Link to="/account">Login or Register</Link></li>
						</ul>
					</nav>
				</header>
				<div id="main">

					<Profile />

				</div>
			</div>

		)
	}
}

export default ProfileStatic
