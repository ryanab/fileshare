import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'



class CreateFile extends Component{
	constructor(){
		super()
		this.state={
			post:{
				image:''

			}
		}
	}

//cloudinary not authorizing yet
  imageSelected(files){
  		console.log('imageSelected: ')
  		const image = files[0]

  		const cloudName= 'nomadreactjs'
  		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

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

  		APIManager.uploadFile(url, image, params)
  		.then((result) => {
  			console.log('CREATE FILE Upload Complete: '+JSON.stringify(result))
  			let updated = Object.assign({}, this.state.post)
  			updated['image'] = result['secure_url']
  			this.setState({
  				post: updated
  			})
  		})
  		.catch((err) => {
  			alert(err)
  		})
  	}

  render(){
		const imageRender = (this.state.post.image.length == 0) ? null : <div><img src={this.state.post.image} /></div>
    return(
      <div>
        <DropZone onDrop={this.imageSelected.bind(this)}>
        	<label>Upload Image</label>
        </DropZone>
				<br />
				{imageRender}
      </div>
    )
  }
}

export default CreateFile
