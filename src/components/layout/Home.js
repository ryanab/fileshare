import React, { Component } from 'react'
import { Account, Files, Profile, CurrentUserUploads } from '../containers'
import { ProfileLayout} from '../layout'
import { Link } from 'react-router'

class Home extends Component{
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
							<li style={{paddingLeft:800}}><Link to="/account">Login | Signup</Link></li>
						</ul>
					</nav>
				</header>

				<div id="main">
					<div className="post">
						<CurrentUserUploads />
					</div>

					<div className="post">
					  <Files />
					</div>
				</div>

			</div>
    )
  }
}

export default Home
