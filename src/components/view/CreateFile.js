
import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager, ImageHelper } from '../../utils'

class CreateFile extends Component{

	updateFileInfo(key, event){
		const value = event.target.value
		this.props.updateFileInfo(key, value)
	}

	createFile(){
		this.props.createFile()
	}

  fileSelected(files){

			if(files.length == 0){
				alert('File is too large')
				return
			}
		const selectedFile = files[0]
		const cloudinaryInfo = ImageHelper.getAuthParams()

		APIManager.uploadFile(cloudinaryInfo.url, selectedFile, cloudinaryInfo.params)
		.then((result) => {
			"IN PROMISE"
			this.props.updateFileInfo('fileUrl', result['secure_url'])
			this.props.updateFileInfo('fileExtension', result['format'])
			return null
		})

		.catch((err) => {
			alert("HELLO " + err.message)
		})
	}

  render(){

    return(
      <div>
				<DropZone style={{border:'none'}} onDrop={this.fileSelected.bind(this)} maxSize={10000000}>
				 <button>Choose File</button>
				</DropZone>
			 	<br />
      	<input onChange={this.updateFileInfo.bind(this, 'fileTitle')} placeholder="Title" type="text" /><br />
      	<input onChange={this.updateFileInfo.bind(this, 'fileDescription')} placeholder="File Description" type="text" /><br />
				<button type="submit" onClick={this.createFile.bind(this)}>Upload</button>
      </div>
    )
  }
}

export default CreateFile
