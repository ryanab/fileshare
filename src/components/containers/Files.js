import React, { Component } from 'react'
import { File, CreateFile} from '../view'
import actions from '../../actions'
import { connect } from 'react-redux'

class Files extends Component{

  constructor(){
    super()
    this.state = {
      file:{}
    }
  }

  componentDidMount(){
    this.props.fetchFiles({filetype: 'image'})
  }

  createFile(params){
    params[this.props.profile] = this.props.user
    this.props.createFile(params)
  }

  updateFileInfo(key, value){
    let updated = Object.assign({}, this.state.file)
    updated[key] = value    
    this.setState({
      file: updated            
    })
  }

  render(){
    return(
      <div>
        <File />< br />
        <CreateFile createFile={this.createFile.bind(this)} updateFileInfo={this.updateFileInfo.bind(this)}/>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    files: state.files,
    user: state.account.user    
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFiles: (params) => dispatch(actions.fetchFiles(params)),
    createFile: (params) => dispatch(actions.createFile(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Files)
