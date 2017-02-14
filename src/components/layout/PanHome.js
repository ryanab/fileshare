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
						<section id="intro">
							<header>
								<h2>shared files</h2>
							</header>
						</section>
						<Link to="/profile/">Robs Profile</Link><br />
						<Link to="/profile/"><strong>FFs Profile</strong></Link>
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
										<h3><Link to={'/'}>File 2</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic02.jpg" alt="" /></Link>
								</article>
							</li>
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File 3</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic03.jpg" alt="" /></Link>
								</article>
							</li>
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File 4</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic04.jpg" alt="" /></Link>
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

					<div style={{paddingTop:20}}>
						<Files />
					</div>

				</section>
			</div>
    )
  }
}

export default Home
