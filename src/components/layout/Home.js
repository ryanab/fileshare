import React, { Component } from 'react'
import { Account, Files, Profile } from '../containers'



class Home extends Component{
  render(){

    return(
        <div>
        <h1>Home Container</h1>
          <Account /><br />
          <Files /> <br />
          <Profile />
        </div>
    )
  }
}

export default Home
