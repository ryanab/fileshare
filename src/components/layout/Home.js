import React, { Component } from 'react'
import { Account, Files, Profile } from '../containers'
import { ProfileLayout} from '../layout'
import { Link } from 'react-router'

class Home extends Component{
  render(){
    return(
      <div>
      	<h1>Home Layout</h1>
        <Files />
        <Account />

        <Link to={'/profile/58962be05bfc20347881deb1'}>Profile</Link>
        <ProfileLayout />
      </div>
    )
  }
}

export default Home
