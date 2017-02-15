import React, { Component } from 'react'
import { File, CreateFile} from '../view'
import actions from '../../actions'
import { connect } from 'react-redux'

class Files extends Component{

  constructor(){
    super()
    this.state = {
      file:{

      }
    }
  }

  componentDidMount(){
    this.props.fetchFiles({})
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
		// console.log("FILE: " + JSON.stringify(file.fileExtension))
		const fileUrl = file['fileUrl']
		const image = ['jpg','png','gif','bmp','jpeg']
		const video = ['webm', 'mp4','ogv','mov']
		const audio = ['mp3', 'm4a','wav','ogg','aif']
		let extension = ''
		if(fileUrl != undefined){
			extension = fileUrl.substring(fileUrl.length-3)
		}

	 	let updated = Object.assign({}, this.state.file)
			if(image.indexOf(extension) > -1){
				updated['fileCategory'] = 'image'
			}else if(video.indexOf(extension) > -1){
				updated['fileCategory'] = 'video'
			}else if(audio.indexOf(extension) > -1){
				updated['fileCategory'] = 'audio'
			}else if(extension =='pdf'){
				updated['fileCategory'] = 'pdf'
			}else{
				updated['fileCategory'] = 'misc'
			}
		  updated[key] = value
		this.setState({
		  file: updated
		})
  }

  render(){
		const fileTypeIcons = ["fa fa-file-picture-o fa-3x","fa fa-file-movie-o fa-3x","fa fa-file-pdf-o fa-3x","fa fa-file-audio-o fa-3x","fa fa-question-circle-o fa-3x"]
		const fileCategories = ['image','video','pdf','audio','misc']

    return(
      <div>
				<ol>
					{
						(this.props.files == null ) ? 'No Files Rendered'
						:
						this.props.files.map((file,i)=>{
							return(
								<div key={i}>
										<li>
											<i className={fileTypeIcons[fileCategories.indexOf(file.fileCategory)]} style={{paddingRight:10}}></i>
										 	{file.fileTitle} created by&nbsp;
												{
													(file.profile != null) ?  <a href='#'>{file.profile['firstName']}</a>
													:
													'anonymous'
												}
									 		<br /><br />
									 		{(file.fileCategory=='image') ? <span><img src={file.fileUrl} /></span> : null}
									 		<br /><br />
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
    fetchFiles: (params) => dispatch(actions.fetchFiles(params)),
    createFile: (params) => dispatch(actions.createFile(params)),
  }
}

export default connect(stateToProps, dispatchToProps)(Files)
