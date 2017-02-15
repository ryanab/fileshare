import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import Files from './Files'
import { Link } from 'react-router'

class Profile extends Component{

  render(){

		let files = null
		let content = null
		let firstName = null
		const fileTypeIcons = ["fa fa-file-picture-o fa-2x","fa fa-file-movie-o fa-2x","fa fa-file-pdf-o fa-2x","fa fa-file-audio-o fa-2x","fa fa-question-circle-o fa-2x"]
		const fileCategories = ['image','video','pdf','audio','misc']
		let audioLink = null
		let newAudioImageLink = null

		if(this.props.files!=null){
			files =this.props.files.uploader[this.props.params.profileId]
			firstName = files[0].profile.firstName
			content = files.map((file,i)=>{

				if(file.fileCategory == 'audio'){
					audioLink = file.fileUrl
					let audioLinkSplit = audioLink.split('upload/')
					let newAudioLink =`${audioLinkSplit[0]}upload/h_150,w_200,fl_waveform,so_2,eo_4,co_blue,b_rgb:02b30a/${audioLinkSplit[1]}`
					newAudioImageLink = newAudioLink.slice(0,newAudioLink.length-3)+'png'
					// console.log("MUSIC FILE: " + JSON.stringify(newAudioImageLink))
				}
			}
		}

		const profile = this.props.profiles[this.props.params.id]
		const file = this.props.file[this.props.params.id]

		if (this.props.file == null)
		return

		console.log('FILE: '+JSON.stringify(this.props.file))

    return(
			<div id="wrapper">
				<header id="header">
					<h1><Link to={'/'}>Fileshare</Link></h1>
					<nav className="links">
						<ul>
							<li><Link to={'/'}>Image</Link></li>
							<li><Link to={'/'}>Video</Link></li>
							<li><Link to={'/'}>PDF</Link></li>
							<li><Link to={'/'}>Misc</Link></li>
							<li style={{paddingLeft:800}}><Link to={'/account'}>Login or Register</Link></li>
						</ul>
					</nav>
				</header>

				<div style={{marginLeft:20, marginRight:20, marginTop:0}} className="post">
					<h2>{profile.firstName}s files</h2><br />
					<h3>{profile.email}</h3>
				</div>

				<div className="post">
					<h1>Profile Container<span style={{fontSize:'.6em'}}></span></h1>
					<h3>Files Uploaded by <span style={{color:'blue'}}>{firstName.toUpperCase()}</span></h3><br />
					<ol>
						{content}
					</ol>

					<div key={i}>
						<li key={i}>
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
						</li><br />
					</div>
				</div>

				<section id="sidebar">
					<section id="intro">
						<header>
							<h3>fileshare sidebar</h3>
						</header>
					</section>
					<section>
						<ul className="posts">
							<li>
								<article>
									<header>
										{file.fileTitle}, {file.fileDescription}
									</header>
									<Link to={'/'} className="image"><img src="/images/pic01.jpg" alt="" /></Link>
								</article>
							</li>
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File 2</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic02.jpg" alt="" /></Link>
								</article>
							</li>
						</ul>
					</section>
				</section>
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

export default connect(stateToProps, dispatchToProps)(Profile)
