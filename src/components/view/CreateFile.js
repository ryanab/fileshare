import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

class CreateFile extends Component{
	constructor(){
		super()
		//will refactor to stateless functional component

		this.state={
			post:{
				file:[],
				fileType:''
			}
		}
	}

	updateFileInfo(key, event){
		const value = event.target.value
		this.props.updateFileInfo(key, value)
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
			let updated = Object.assign({}, this.state.post)
			updated['fileUrl'] = result['secure_url']
			updated['fileExtension']= result.format
			this.setState({
				post: updated
			})
			return null 
		})
		.catch((err) => {
			alert(err.message)
		})
	}

  render(){
		const post = this.state.post
		const imageExtensionTypes=['img','jpg','gif','png','jpeg','tif','bmp']
		const renderUploadSuccess = (imageExtensionTypes.indexOf(post.fileType)==-1) ?
			<h2>Upload Successful</h2> : <img src={post.file[0]} />
		const fileSuccessMessage = (post.file.length==0) ? null : <div>{renderUploadSuccess}</div>
		//need some validations on file inputs below
    return(
      <div>
      	<input onChange={this.updateFileInfo.bind(this, 'fileTitle')} placeholder="File Title" type="text" /><br />
      	<input onChange={this.updateFileInfo.bind(this, 'fileDescription')} placeholder="File Description" type="text" /><br />
        <DropZone style={{border:'none'}} onDrop={this.fileSelected.bind(this)} maxSize={10000000}>
        	<button>Upload File</button>
        </DropZone>
				<br />
				<button type="submit" onClick={this.props.createFile.bind(this)}>Create File</button>
      </div>
    )
  }
}

export default CreateFile
