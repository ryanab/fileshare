import React, { Component } from 'react'
import { File, CreateFile} from '../view'
import actions from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Files extends Component{

  constructor(){
    super()
    this.state = {
      file:{

      }
    }
  }

  componentDidMount(){
    this.props.fetchFiles()
  }

	componentDidUpdate(){
	}

  createFile(){
    event.preventDefault()
		if(this.props.user==null){
			alert('Please login or create an account so you can share files!')
			return
		}
    let file = this.state.file
    file['profile'] = this.props.user
		this.props.createFile(this.state.file)
  }

  updateFileInfo(key, value){
    event.preventDefault()
		// console.log("USER: " + JSON.stringify(this.props.user))
		if(this.props.user == null){
			alert('YOU MUST BE LOGGED IN TO UPLOAD FILE')
			return
		}

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
			updated['fileExtension'] = extension
		  updated[key] = value
		this.setState({
		  file: updated
		})
  }

  render(){
		const fileTypeIcons = ["fa fa-file-picture-o fa-3x","fa fa-file-movie-o fa-3x","fa fa-file-pdf-o fa-3x","fa fa-file-audio-o fa-3x","fa fa-question-circle-o fa-3x"]
		const fileCategories = ['image','video','pdf','audio','misc']
		let audioLink = null
		let newAudioImageLink = null
		let noFilesReason = "No Files Found, please upload to begin"
		if (this.props.user==null)
			noFilesReason = "Please login or register to view files"
		let content = (this.props.files !=null && this.props.user != null) ?
			this.props.files.completeFileList.map((file,i)=>{
				if(file.fileCategory == 'audio'){
					audioLink = file.fileUrl
					let audioLinkSplit = audioLink.split('upload/')
					let newAudioLink =`${audioLinkSplit[0]}upload/h_150,w_200,fl_waveform,so_2,eo_4,co_blue,b_rgb:02b30a/${audioLinkSplit[1]}`
					newAudioImageLink = newAudioLink.slice(0,newAudioLink.length-3)+'png'
					// console.log("MUSIC FILE: " + JSON.stringify(newAudioImageLink))
				}
				
				return(
					<li key={i}>
						<i className={fileTypeIcons[fileCategories.indexOf(file.fileCategory)]} style={{paddingRight:10}}></i>
						<a href={file.fileUrl}>{file.fileTitle}</a> created by&nbsp;
						<Link to={'/profile/'+file.profile.id}>	{file.profile['firstName']}</Link>
						&nbsp; (File Type: {file.fileExtension} )
						<br /><br />
						{
							(file.fileCategory=='image') ?
								<span><
									img src={file.fileUrl} />
								</span>
								: null}
						{
							(file.fileCategory=='video') ?
								<span>
									<video width="300" height="200" poster={file.fileUrl.substring(0,file.fileUrl.length-3)+"jpg"} preload="none" controls>
									  <source src={file.fileUrl.substring(0,file.fileUrl.length-3) +"webm"} type="video/webm" />
									  <source src={file.fileUrl.substring(0,file.fileUrl.length-3) +"mp4"} type = "video/mp4"/>
									 	<source src={file.fileUrl.substring(0,file.fileUrl.length-3) +"ogg"}  type = "video/ogg"/>
									</video>
								</span>
								: null
						}
						{
							(file.fileCategory=='pdf') ?
								<span><
									img width="200" height="300" src={file.fileUrl.substring(0,file.fileUrl.length-3)+"jpg"} />
								</span>
								: null
						}
						{
							(file.fileCategory=='audio') ?
								<span>
									<a href={audioLink} target="_blank"><img src={newAudioImageLink} /></a>
								</span>
								: null
						}
						{
							(file.fileCategory=='misc') ?
								<span><
									img width="150" height="150" src="/images/misc-compressed.png" />
								</span>
								: null
						}

						<br /><br />
					</li>
				)
			})
			:
			<div>{noFilesReason}</div>

		return(
      <div>
				<h4>Upload File Here</h4><br />
        <CreateFile createFile={this.createFile.bind(this)} updateFileInfo={this.updateFileInfo.bind(this)}/>
				<hr /><br /><br />
				<h4>List of All Files</h4>
				<ol>
				{content}
				</ol>
			</div>
    )
  }
}

const stateToProps = (state) => {
  return {
    files: state.files,
    user: state.account.user,
		state: state
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFiles: (params) => dispatch(actions.fetchFiles(params)),
    createFile: (params) => dispatch(actions.createFile(params)),
  }
}

export default connect(stateToProps, dispatchToProps)(Files)
