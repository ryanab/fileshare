import React, { Component } from 'react'
import { File, CreateFile} from '../view'


class Files extends Component{
  render(){
    return(
        <div>
          <CreateFile /><br />
          <File />
        </div>
    )
  }
}


export default Files
