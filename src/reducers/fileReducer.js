import constants from '../constants'

var initialState = {
    uploader:{},
    completeFileList:[]
}

export default(state = initialState, action) => {
	let updated = Object.assign({}, state)
	let uploader = Object.assign({},state.uploader)

  switch(action.type){

    case constants.FILES_RECEIVED:
		//stores files by id in uploader object
			action.payload.forEach((file)=>{
				let uploadedArray = Object.assign([],uploader[file.profile.id])
				uploadedArray.unshift(file)
				uploader[file.profile.id] = uploadedArray

			})
			updated['uploader'] = uploader
			//stores all files in one large array
			updated['completeFileList'] = action.payload
			// console.log('UPDATED: ' + JSON.stringify(updated))
      return updated

    case constants.FILE_CREATED:
			let existingArray = Object.assign([], state['completeFileList'])
			existingArray.unshift(action.payload)
			updated['completeFileList'] = existingArray

			let uploaderArray = Object.assign([],uploader[action.payload.profile.id])
			if(uploaderArray = null){
				uploaderArray = []
			}else{
				uploaderArray = Object.assign([], uploaderArray)
			}

			uploaderArray.unshift(action.payload)
			uploader[action.payload.profile.id] = uploaderArray
			updated['uploader'] = uploader
			// console.log("UPDATED UPLOADER: " + JSON.stringify(updated['uploader']))

	   	return updated
    default:
      return updated
  }
}
