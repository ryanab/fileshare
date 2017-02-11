
import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

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
		const cloudName= 'nomadreactjs'
		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/auto/upload'
		const timestamp = Date.now()/1000
		const uploadPreset='uqj0leyv'
		const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'4fkKUAKpWOseM8w2Yoh7TYNLO8k'
		const signature = sha1(paramsStr)
		const params = {
			'api_key': '917873567416946',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature
		}

		APIManager.uploadFile(url, selectedFile, params)
		.then((result) => {
			this.props.updateFileInfo('fileUrl', result['secure_url'])
			this.props.updateFileInfo('fileExtension', result['format'])
			return null
		})
		.catch((err) => {
			alert(err.message)
		})
	}

  render(){
	
    return(
      <div>
      	<input onChange={this.updateFileInfo.bind(this, 'fileTitle')} placeholder="File Title" type="text" /><br />
      	<input onChange={this.updateFileInfo.bind(this, 'fileDescription')} placeholder="File Description" type="text" /><br />
        <DropZone style={{border:'none'}} onDrop={this.fileSelected.bind(this)} maxSize={10000000}>
        	<button>Upload File</button>
        </DropZone>
				<br />
				<button type="submit" onClick={this.createFile.bind(this)}>Create File</button>
      </div>
    )
  }
}

export default CreateFile
