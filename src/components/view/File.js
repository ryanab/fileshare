import React, { Component } from 'react'



class File extends Component{
  render(){
		const files = this.props.files.completeFileList
		console.log("FILE VIEW FILES: " + JSON.stringify(files))
    return(
      <div>

				{
					files.map((file,i)=>{
						return(
							<div key={i}>
								<li>{file.fileTitle.toUpperCase()}: <img src={file.fileUrl} /></li>
							</div>
						)
					})
				}

      </div>
    )
  }
}

export default File
