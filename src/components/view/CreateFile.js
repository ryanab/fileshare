import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'



class CreateFile extends Component{

//cloudinary not authorizing yet
  imageSelected(files){
  		console.log('imageSelected: ')
  		const image = files[0]

  		const cloudName= 'nomadreactjs'
  		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

  		const timestamp = Date.now()/1000
  		const uploadPreset='qfk6kfpf'

  		const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'e8LAFbk1H23PLU02S5Og2DzsMYQ'

  		const signature = sha1(paramsStr)
  		const params = {
  			'api_key': '854536555581142',
  			'timestamp': timestamp,
  			'upload_preset': uploadPreset,
  			'signature': signature
  		}

  		APIManager.uploadFile(url, image, params)
      console.log('url')
  		// .then((uploaded) => {
  		// 	console.log('Upload Complete: '+JSON.stringify(uploaded))
  		// 	let updated = Object.assign({}, this.state.post)
  		// 	updated['image'] = uploaded['secure_url']
  		// 	this.setState({
  		// 		post: updated
  		// 	})
  		// })
  		// .catch((err) => {
  		// 	alert(err)
  		// })
  	}

  render(){
    return(
      <div>

        <DropZone onDrop={this.imageSelected.bind(this)}>
        <label>Upload Image</label>

        </DropZone>



      </div>
    )
  }
}


export default CreateFile
