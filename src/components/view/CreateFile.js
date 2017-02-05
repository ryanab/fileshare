import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'



class CreateFile extends Component{
	constructor(){
		super()
		this.state={
			post:{
				file:''

			}
		}
	}

//cloudinary not authorizing yet
  fileSelected(files){
			if(files.length==0){
				alert("File is too large")
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
  			console.log('CREATE FILE Upload Complete: '+JSON.stringify(result))
				console.log('Filesize: '+ JSON.stringify(result.bytes))
				if(result.bytes > 200){
					alert("Sorry file is too large")
					return
				}
  			let updated = Object.assign({}, this.state.post)
  			updated['file'] = result['secure_url']
				console.log("UPDATED: " + JSON.stringify(updated))
  			this.setState({
  				post: updated
  			})
  		})
  		.catch((err) => {
  			alert(err.message)
  		})
  	}

  render(){
		const fileRender = (this.state.post.file.length == 0) ? null : <div><img src={this.state.post.file} /></div>
    return(
      <div>
        <DropZone style={{border:'none'}} onDrop={this.fileSelected.bind(this)} maxSize={10000}>
        	<button>Upload File</button>
        </DropZone>
				<br />
				{fileRender}
      </div>
    )
  }
}

export default CreateFile
