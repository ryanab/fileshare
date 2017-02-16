import React, { Component } from 'react'
import { Account } from '../containers'
import { Link } from 'react-router'

class AuthLayout extends Component {
	render(){
		return (
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

						<Account />

					</div>
				</div>
			</div>
		)
	}
}

export default AuthLayout
