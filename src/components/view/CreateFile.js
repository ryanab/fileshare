import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

class CreateFile extends Component{
<<<<<<< HEAD
	constructor(){
		super()
		this.state={
			post:{
				file:[],
				fileType:''
			}
		}
	}

  fileSelected(files){
		console.log("FILES: "+ JSON.stringify(files.length))
=======

	updateFileInfo(key, event){
		const value = event.target.value
		this.props.updateFileInfo(key, value)
	}

	createFile(){
		this.props.createFile()
	}

  fileSelected(files){
>>>>>>> c908935ee4e0fe572ef3ce7d211dbc32f9012ebe
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
<<<<<<< HEAD
			let updated = Object.assign({}, this.state.post)
			updated['file'].unshift(result['secure_url'])
			updated['fileType']= result.format
			this.setState({
				post: updated
			})
=======
			this.props.updateFileInfo('fileUrl', result['secure_url'])
			this.props.updateFileInfo('fileExtension', result['format'])
			return null 
>>>>>>> c908935ee4e0fe572ef3ce7d211dbc32f9012ebe
		})
		.catch((err) => {
			alert(err.message)
		})
	}

  render(){
<<<<<<< HEAD
		const post = this.state.post
		const imageExtensionTypes=['img','jpg','gif','png','jpeg','tif','bmp']
		const renderUploadSuccess = (imageExtensionTypes.indexOf(post.fileType)==-1) ?
			<h2>Upload Successful</h2> : <img src={post.file[0]} />
		const fileSuccessMessage = (post.file.length==0) ? null : <div>{renderUploadSuccess}</div>

    return(
      <div>
=======
		// const file = this.state.file
		// const imageExtensionTypes=['img','jpg','gif','png','jpeg','tif','bmp']
		// const renderUploadSuccess = (imageExtensionTypes.indexOf(file.fileType)==-1) ?
		// 	<h2>Upload Successful</h2> : <img src={file.fileUrl} />
		// const fileSuccessMessage = (file.fileUrl.length==0) ? null : <div>{renderUploadSuccess}</div>
		// //need some validations on file inputs below
    return(
      <div>
      	<input onChange={this.updateFileInfo.bind(this, 'fileTitle')} placeholder="File Title" type="text" /><br />
      	<input onChange={this.updateFileInfo.bind(this, 'fileDescription')} placeholder="File Description" type="text" /><br />
>>>>>>> c908935ee4e0fe572ef3ce7d211dbc32f9012ebe
        <DropZone style={{border:'none'}} onDrop={this.fileSelected.bind(this)} maxSize={10000000}>
        	<button>Upload File</button>
        </DropZone>
				<br />
<<<<<<< HEAD
				{fileSuccessMessage}
=======
				<button type="submit" onClick={this.createFile.bind(this)}>Create File</button>
>>>>>>> c908935ee4e0fe572ef3ce7d211dbc32f9012ebe
      </div>
    )
  }
}

export default CreateFile
