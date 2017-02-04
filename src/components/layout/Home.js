import React, { Component } from 'react'
import { Account, Files, Profile } from '../containers'
import { ProfileLayout} from '../layout'
import { Link } from 'react-router'


class Home extends Component{
  render(){

    return(
        <div>
        <h1>Home Container</h1>
          <Account /><br />
          <Files /> <br />
          <Link to="/profile/">Profile</Link>
        </div>
    )
  }
}

export default Home
