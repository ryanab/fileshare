import React, { Component } from 'react'
import { Account, Files, Profile, CurrentUserUploads } from '../containers'
import { ProfileLayout} from '../layout'
import { Link } from 'react-router'

class Home extends Component{
	render(){

    return(
    	<div>
				<div className="container">
					<div className="row">
						<div className ="col-md-12" style={{border:'1px solid black', padding:0,margin:0}}>
							<div >
								<center><h1>Navigation Bar</h1></center>
							</div>
						</div>
				</div>
	      <div className="container">
					</div>
	      	<div className="row">
						<div className="col-md-5" style={{border: '1px solid gray'}}>
							<div>
								<Account />
							</div>
							<div>
								<CurrentUserUploads />
							</div>
						</div>
						<div className="col-md-7" style={{border: '1px solid gray'}}>
							<Files />
						</div>
	      	</div>
	      </div>
        <Link to='/account'>My Account</Link>
	    </div>
		)
  }
}

export default Home
