import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'


class CurrentUserUploads extends Component{
	constructor(){
    super()
    this.state = {
      files:{

      },
			user:null

    }
  }
	componentDidMount(){
	
	}
  render(){


		const fileTypeIcons = ["fa fa-file-picture-o fa-2x","fa fa-file-movie-o fa-2x","fa fa-file-pdf-o fa-2x","fa fa-file-audio-o fa-2x","fa fa-question-circle-o fa-2x"]
		const fileCategories = ['image','video','pdf','audio','misc']
		let audioLink = null
		let newAudioImageLink = null
		let newAudioLink=null
		let audioLinkSplit=null
		let firstName = null
		let files = null

		let content = (this.props.files != null && this.props.user !=null) ?

			this.props.files.uploader[this.props.user.id].map((file,i) => {
				console.log("CHECK MAP FUNCTION: " + JSON.stringify(this.props.files.uploader[this.props.user.id]))
				firstName = 	this.props.user.firstName.toUpperCase()
				files = this.props.files.uploader[this.props.user.id]
		// console.log("MUSIC FILE: " + JSON.stringify(newAudioImageLink))
			if(file.fileCategory == 'audio'){
				audioLink = file.fileUrl
				let audioLinkSplit = audioLink.split('upload/')
				let newAudioLink =`${audioLinkSplit[0]}upload/h_150,w_200,fl_waveform,so_2,eo_4,co_blue,b_rgb:02b30a/${audioLinkSplit[1]}`
				newAudioImageLink = newAudioLink.slice(0,newAudioLink.length-3)+'png'
				// console.log("MUSIC FILE: " + JSON.stringify(newAudioImageLink))
			}
			return(
					<div key={i}>
						<li >
						 	<i className={fileTypeIcons[fileCategories.indexOf(file.fileCategory)]} style={{paddingRight:10}}></i>
							<a href={file.fileUrl} target="_blank">Download</a>
							<br /><br />
							{file.fileTitle} -- FileType: {file.fileExtension}
							<br /><br />
							{
								(file.fileCategory=='image') ?
								<span>
									<img src={file.fileUrl} />
								</span>
								: null
							}
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
								<br /><br />
							</li>
							<br />
						</div>
					)
		})
		:null

    return(
      <div>
				<hr /><br /><br />
				<h4>Uploads for Logged In User</h4>
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
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFiles: (params) => dispatch(actions.fetchFiles(params))
  }
}



export default connect(stateToProps,dispatchToProps)(CurrentUserUploads)
