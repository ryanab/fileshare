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
								<ul className="mini-posts">
									
										<article className="mini-posts">
											<header style={{float: 'right'}}>
												<h3><a href="#">Lorem ipsum fermentum ut nisl vitae</a></h3>
												<time className="published" dateTime="2015-10-20">October 20, 2015</time>
											</header>
											<a href="#" className="image"><img style={{float: 'left'}} width="600" src="/images/pic04.jpg" alt="" /></a>
										</article> 
									    <br />
									
										<article className="mini-posts">
											<header style={{float: 'right'}}>
												<h3><a href="#">Convallis maximus nisl mattis nunc id lorem</a></h3>
												<time className="published" dateTime="2015-10-15">October 15, 2015</time>
											</header>
											<a href="#" className="image"><img style={{float: 'left'}} width="600" src="/images/pic05.jpg" alt="" /></a>
										</article>
									
								</ul>	
					</div>
				</div>

				
			</div>
    )
  }
}
//<img style="float: left; margin: 0px 15px 15px 0px;" src="/support/image/your-image.png" width="100" />
export default Home
