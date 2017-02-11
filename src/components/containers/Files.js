import React, { Component } from 'react'
import { File, CreateFile} from '../view'
import actions from '../../actions'
import { connect } from 'react-redux'

class Files extends Component{


  constructor(){
    super()
    this.state = {
      file:{
        fileCategory: 'misc' //default for now until we write function to determine fileType
      }
    }
  }

  componentDidMount(){
		console.log("FILES:" + JSON.stringify(this.props.files))
		console.log("USER: " + JSON.stringify(this.props.user))
    this.props.fetchFiles({filetype: 'image'})
  }

  createFile(){
    event.preventDefault()
    let file = this.state.file
		let fileExtension = this.state.file.fileExtension
		const image = ['jpg','png','gif','bmp','jpeg']
		const video = ['webm', 'mp4','ogv','mov']
		const audio = ['mp3', 'm4a','wav','ogg','aif']

		if(image.indexOf(fileExtension) > -1){
			file['fileCategory'] = 'image'
		}else if(video.indexOf(fileExtension) > -1){
			file['fileCategory'] = 'video'
		}else if(audio.indexOf(fileExtension) > -1){
			file['fileCategory'] = 'audio'
		}else if(fileExtension=='pdf'){
			file['fileCategory'] = 'pdf'
		}else{
			file['fileCategory'] = 'misc'
		}

    file['profile'] = this.props.user
    this.props.createFile(this.state.file)

  }

  updateFileInfo(key, value){
    event.preventDefault()
    console.log("VALUE" + value)
    let updated = Object.assign({}, this.state.file)
    updated[key] = value
    this.setState({
      file: updated
    })

  }

  render(){
    return(
      <div>
        <File  />< br />
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
