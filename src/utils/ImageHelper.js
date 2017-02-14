import sha1 from 'sha1'

export default {

	thumbnail: (url, dimen) => {
		let thumbParams = 'upload/c_thumb,h_'+dimen+',w_'+dimen+',x_0,y_0'
		return url.replace('upload', thumbParams)
	},

  getAuthParams: () => {
    const cloudName = 'nomadreactjs'
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

    const uploadPreset = 'uqj0leyv'

    let timestamp = Date.now() / 1000

    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'4fkKUAKpWOseM8w2Yoh7TYNLO8k'
                                                                             
    const signature = sha1(paramsStr)

    const params = {
      'api_key': '917873567416946',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature,
    }

    const cloudinaryInfo = {
      params,
      url
    }

    return cloudinaryInfo
  }
}