import sha1 from 'sha1'
import config from '../config'

export default {

	thumbnail: (url, dimen) => {
		let thumbParams = 'upload/c_thumb,h_'+dimen+',w_'+dimen+',x_0,y_0'
		return url.replace('upload', thumbParams)
	},

  getAuthParams: () => {
    const url = 'https://api.cloudinary.com/v1_1/'+config.CLOUDINARY_CLOUD_NAME+'/image/upload'
    let timestamp = Date.now() / 1000
    const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + config.CLOUDINARY_UPLOAD_PRESET + config.CLOUDINARY_API_SECRET
                                                                             
    const signature = sha1(paramsStr)
    console.log(config.CLOUDINARY_API_KEY)
    const params = {
      'api_key': config.CLOUDINARY_API_KEY,
      'timestamp': timestamp,
      'upload_preset': config.CLOUDINARY_UPLOAD_PRESET,
      'signature': signature,
    }
    const cloudinaryInfo = {
      params,
      url
    }
    return cloudinaryInfo
  }
  
}