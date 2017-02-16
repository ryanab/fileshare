import React, { Component } from 'react'
import { Account, Files, Profile, Profiles } from '../containers'
import { ProfileLayout, ProfilesLayout} from '../layout'
import { Link } from 'react-router'

class Home extends Component{
  render(){
    return(
      <div>
      	<h1>Home Layout</h1>
        <Files />
        <Account />

        <Link to='/profiles'>Profile</Link>< br />
        <Link to='/account'>My Account</Link>
      </div>
    )
  }
}

export default Home
