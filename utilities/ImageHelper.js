module.exports = {
  getAuthParams: functionn = {
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

}