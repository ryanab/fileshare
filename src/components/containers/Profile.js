import React, { Component } from 'react'
import { Link } from 'react-router'

class Profile extends Component{

  render(){
    return(
			<div id="wrapper">
				<header id="header">
					<h1><Link to={'/'}>Fileshare</Link></h1>
					<nav className="links">
						<ul>
							<li><Link to={'/'}>Image</Link></li>
							<li><Link to={'/'}>Video</Link></li>
							<li><Link to={'/'}>PDF</Link></li>
							<li><Link to={'/'}>Misc</Link></li>
							<li style={{paddingLeft:800}}><Link to={'/account'}>Login or Register</Link></li>
						</ul>
					</nav>
				</header>

				<div style={{marginLeft:20, marginRight:20, marginTop:0}} className="post">
					<h3>Selected File Rendered Below</h3>

					<p style={{paddingBottom:40}}>Cornhole enamel pin selvage heirloom tofu gastropub chillwave pabst post-ironic, jianbing tbh woke food truck vinyl. Leggings scenester trust fund kickstarter, church-key XOXO iceland poutine deep v 8-bit. Helvetica keffiyeh edison bulb cronut subway tile austin flannel, 3 wolf moon chicharrones. Poutine enamel pin fam offal chicharrones quinoa kinfolk. Slow-carb flannel truffaut master cleanse, gluten-free dreamcatcher street art offal squid. Put a bird on it waistcoat keytar hella flexitarian. Echo park irony etsy roof party.</p>
				</div>

				<section id="sidebar">
					<section id="intro">
						<header>
							<h3>UserNames Files</h3>
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
				</section>
      </div>
    )
  }
}


export default Profile
