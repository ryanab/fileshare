import React, { Component } from 'react'
import { File, CreateFile} from '../view'
import actions from '../../actions'
import { connect } from 'react-redux'

class Files extends Component{


  constructor(){
    super()
		this.fetchFiles = this.fetchFiles.bind(this)
    this.state = {
      file:{
        fileCategory: 'misc' //default for now until we write function to determine fileType
      }
    }
  }

	fetchFiles(){
		if(this.props.files.completeFileList != null){
			return
		}
		this.props.fetchFiles({})
	}

  componentDidMount(){

		console.log("USER: " + JSON.stringify(this.props.user))
    this.props.fetchFiles({})
		console.log("FILESFETCHED:" + JSON.stringify(this.props.files))
  }

	componentDidUpdate(){
		console.log('componentDidUpdate')
		this.fetchFiles({})
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

		console.log("EXTENSION: " + JSON.stringify(fileExtension))
		console.log("STATE:" + JSON.stringify(this.state.file))

    file['profile'] = this.props.user
    this.props.createFile(this.state.file)

  }

  updateFileInfo(key, value){
    event.preventDefault()
    // console.log("VALUE" + value)
    let updated = Object.assign({}, this.state.file)
    updated[key] = value
    this.setState({
      file: updated
    })

  }

  render(){
		const files = this.props.files.completeFileList
		 console.log("FILES: " + JSON.stringify(files))
    return(
      <div>
				<ol>
				 <File files={this.props.files}/>< br />
				</ol>

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
