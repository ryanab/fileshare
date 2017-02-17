import React, { Component } from 'react'



class File extends Component{
  render(){
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
     
  }
}

export default File
