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

		if(this.props.files != null && this.props.user !=null){
			firstName = 	this.props.user.firstName.toUpperCase()
			files = this.props.files.uploader[this.props.user.id]
			console.log("CurrentUserUploads: " + JSON.stringify(this.props.files[this.props.user.id]))
			content = files.map((file,i)=>{
				return(
					<div key={i}>
						<li >
						 	<i className={fileTypeIcons[fileCategories.indexOf(file.fileCategory)]} style={{paddingRight:10}}></i>
							{file.fileTitle} <a href={file.fileUrl} target="_blank">Link</a>
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
								<br /><br />
							</li>
							<br />
						</div>
					)
				})
			}

    return(
      <div>
				<h1>CurrentUserUploads Container</h1>
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
