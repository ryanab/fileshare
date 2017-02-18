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
					<nav className="links" style={{marginRight:100}}>
						<ul>
							<li><Link to={'/'}>Image</Link></li>
							<li><Link to={'/'}>Video</Link></li>
							<li><Link to={'/'}>PDF</Link></li>
							<li><Link to={'/'}>Misc</Link></li>
							<li><Link to={'/profile'}><strong>FFs Profile</strong></Link></li>
							<li><Link to={'/account'}>Login | Signup</Link></li>
						</ul>
					</nav>
				</header>

				<div id="main">
					<div className="post">
						<CurrentUserUploads />
					</div>

					<div className="post">
					  <Files />
						<section id="intro">
							<header>
								<h2 style={{textAlign:'center'}}>shared files</h2>
							</header>
						</section>
					</div>
				</div>

				<section id="sidebar">
					<section id="intro">
						<header>
							<h3>Fireshare: Home</h3>
						</header>
					</section>

					<section>
						<ul className="posts">
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File 1</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic01.jpg" alt="" /></Link>
								</article>
							</li>

							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File n-1</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic05.jpg" alt="" /></Link>
								</article>
							</li>

							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File n</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic06.jpg" alt="" /></Link>
								</article>
							</li>
						</ul>
					</section>
				</section>
			</div>
    )
  }
}

export default Home
