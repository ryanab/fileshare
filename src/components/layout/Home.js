import React, { Component } from 'react'
import { Account, AccountInfo, Files, CurrentUserUploads, Profile } from '../containers'
import { Link } from 'react-router'

class Home extends Component{
	render(){
    return(
			<div id="wrapper">
				<header id="header">
					<h1><Link to="/">Fileshare</Link></h1>
					<nav className="links" style={{marginRight:100}}>
						<ul>
							<li><Link to={'/'}>Image</Link></li>
							<li><Link to={'/'}>Video</Link></li>
							<li><Link to={'/'}>PDF</Link></li>
							<li><Link to={'/'}>Misc</Link></li>
							<li><Link to={'/account'}>Login | Signup</Link></li>
						</ul>
					</nav>
				</header>

				<div id="main">

					<div className="post">
						<section id="intro">
							<header>
								<h2 style={{textAlign:'center'}}>shared files</h2>
							</header>
						</section>
					  <Files />
						<CurrentUserUploads />
					</div>
				</div>

				<section id="sidebar">
					<section id="intro">
						<header>
							<h3>Fireshare: Home</h3>
							<AccountInfo />
							<Account />
						</header>
					</section>
				</section>
			</div>
    )
  }
}

export default Home
