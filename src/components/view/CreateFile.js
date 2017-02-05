import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

class CreateFile extends Component{
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
			updated['file'].unshift(result['secure_url'])
			updated['fileType']= result.format
			this.setState({
				post: updated
			})
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

    return(
      <div>
        <DropZone style={{border:'none'}} onDrop={this.fileSelected.bind(this)} maxSize={10000000}>
        	<button>Upload File</button>
        </DropZone>
				<br />
				{fileSuccessMessage}
      </div>
    )
  }
}

export default CreateFile
