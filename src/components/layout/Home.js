import React, { Component } from 'react'
import { Account, Files, Profile, CurrentUserUploads } from '../containers'
import { ProfileLayout} from '../layout'
import { Link } from 'react-router'

class Home extends Component{
	render(){

    return(

			<div id="wrapper">
				<div id="main">
					<div className="post">
						<Account /><br />
						<br />
						<CurrentUserUploads />
						<br />
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
