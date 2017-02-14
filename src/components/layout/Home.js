import React, { Component } from 'react'
import { Account, Files, Profile, FileTypes } from '../containers'
import { ProfileLayout} from '../layout'

class Home extends Component{
  render(){
    return(
        <div>
          <h1>Home Layout</h1>
				
          <Files />
         <Account />
        </div>
    )
  }
}

export default Home
