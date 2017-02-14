import React, { Component } from 'react'
import { File, CreateFile} from '../view'
import actions from '../../actions'
import { connect } from 'react-redux'

class Files extends Component{


  constructor(){
    super()
    this.state = {
      file:{
         //default for now until we write function to determine fileType
      }
    }
  }

  componentDidMount(){


    this.props.fetchFiles({})
	//  console.log("FILESFETCHED:" + JSON.stringify(this.props.files))
  }
	componentDidUpdate(){
		//  console.log("USER: " + JSON.stringify(this.props.user))
		//  console.log("FILESFETCHED: " + JSON.stringify(this.props.files))
	}


  createFile(){
    event.preventDefault()
    let file = this.state.file
    file['profile'] = this.props.user
		this.props.createFile(this.state.file)
  }

  updateFileInfo(key, value){
    event.preventDefault()

		const file = this.state.file
		const fileUrl = file['fileUrl']
		let extension = ''
		if(fileUrl != undefined){
			extension = fileUrl.substring(fileUrl.length-3)
		}

    console.log("EXTENSION: " + extension)

		const image = ['jpg','png','gif','bmp','jpeg']
		const video = ['webm', 'mp4','ogv','mov']
		const audio = ['mp3', 'm4a','wav','ogg','aif']



 let updated = Object.assign({}, this.state.file)
		if(image.indexOf(extension) > -1){
			console.log("THIS IS AN IMAGE")
			updated['fileCategory'] = 'image'
		}else if(video.indexOf(extension) > -1){
			updated['fileCategory'] = 'video'
			console.log("THIS IS AN VIDEO")
		}else if(audio.indexOf(extension) > -1){
			updated['fileCategory'] = 'audio'
			console.log("THIS IS AUDIO")
		}else if(extension =='pdf'){
			updated['fileCategory'] = 'pdf'
			console.log("THIS IS AN PDF")
		}else{
			updated['fileCategory'] = 'misc'
			console.log("THIS IS AN MISC")
		}

		console.log("FILE CATEGORY: " + JSON.stringify(updated['fileCategory']))
    updated[key] = value
    this.setState({
      file: updated
    })

  }

  render(){
		const files = this.props.files.completeFileList
		 console.log("FILES: " + JSON.stringify(this.props.files.types))

	 	const fileTypeIcon = ["fa fa-file-pdf-o fa-2x","fa-file-movie-o fa-2x","fa fa-file-audio-o fa-2x","fa fa-question-circle fa-2x"]
		let fileType = this.state.file.fileCategory
    return(
      <div>

				<ol>
					{ (this.props.files == null ) ? <h2>nothing found</h2> :
						this.props.files.map((file,i)=>{
							return(
								<div key={i}>
									<li><i className={fileTypeIcon[0]} style={{paddingRight:10}}></i>
									 {file.fileTitle} created by {this.props.user.firstName}<br /><br />
								 <img src={file.fileUrl} /><br /><br />
									</li>
								</div>
							)
						})
					}
			</ol>

        <File  files={this.props.file}/>< br />
        <CreateFile createFile={this.createFile.bind(this)} updateFileInfo={this.updateFileInfo.bind(this)}/>

			</div>
    )
  }
}

const stateToProps = (state) => {
  return {
    files: state.files.completeFileList,
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
		fetchCurrentUser:()=> dispatch(actions.fetchCurrentUser()),
    fetchFiles: (params) => dispatch(actions.fetchFiles(params)),
    createFile: (params) => dispatch(actions.createFile(params)),

  }
}

export default connect(stateToProps, dispatchToProps)(Files)
