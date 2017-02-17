import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'

class CurrentUserUploads extends Component{

  render(){
		let files = null
		let firstName = null
		let content = null
		const fileTypeIcons = ["fa fa-file-picture-o fa-2x","fa fa-file-movie-o fa-2x","fa fa-file-pdf-o fa-2x","fa fa-file-audio-o fa-2x","fa fa-question-circle-o fa-2x"]
		const fileCategories = ['image','video','pdf','audio','misc']
		let audioLink = null
		let newAudioImageLink = null

		if(this.props.files != null && this.props.user !=null){
			firstName = 	this.props.user.firstName.toUpperCase()
			files = this.props.files.uploader[this.props.user.id]
			// console.log("CurrentUserUploads: " + JSON.stringify(this.props.files[this.props.user.id]))
			content = files.map((file,i)=>{
				if(file.fileCategory == 'audio'){
				audioLink = file.fileUrl
				let audioLinkSplit = audioLink.split('upload/')
				let newAudioLink =`${audioLinkSplit[0]}upload/h_150,w_200,fl_waveform,so_2,eo_4,co_blue,b_rgb:02b30a/${audioLinkSplit[1]}`
				newAudioImageLink = newAudioLink.slice(0,newAudioLink.length-3)+'png'
				// <h1console.log("MUSIC FILE: " + JSON.stringify(newAudioImageLink))
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
							{
								(file.fileCategory=='misc') ?
									<span><
										img width="150" height="150" src="/images/misc-compressed.png" />
									</span>
									: null
							}
								<br /><br />
						</li>
						<br />
					</div>
				)
			})
		}

    return(
      <div>
				<h4>CurrentUserUploads Container</h4>
				<h3>Username: <em><strong>{firstName}</strong></em></h3>
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

export default connect(stateToProps)(CurrentUserUploads)
