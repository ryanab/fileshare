import React, { Component } from 'react'
import { Files } from '../containers'
import { Link } from 'react-router'

class Home extends Component {
  render(){
    return(

			<div id="wrapper">
				<header id="header">
					<h1><Link to="/">Fileshare</Link></h1>
					<nav className="links" style={{marginRight:100}}>
						<ul>
							<li><Link to="/">Image</Link></li>
							<li><Link to="/">Video</Link></li>
							<li><Link to="/">PDF</Link></li>
							<li><Link to="/">Misc</Link></li>
							<li><Link to="/account">Login | Signup</Link></li>
						</ul>
					</nav>
				</header>

				<div id="main">
					<div className="post">
						<Link to="/profile/">Profile</Link><br />
						<Link to="/profile/"><strong>FFs Profile</strong></Link>

						<div style={{paddingTop:20}}>
							<Files />
						</div>

					</div>
				</div>

			</div>
    )
  }
}

export default Home
