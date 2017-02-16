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
			// console.log("UPLOADER ARRAY: " + JSON.stringify(updated['uploader']))
			// console.log("ACTION PARAMS: " + JSON.stringify(action.params))
			let key = Object.keys(action.params)
			//store files by id
			action.payload.forEach((file)=>{
				updated[file.profile.id] = file
				// console.log("UPDATED BY ID: " + JSON.stringify(updated))
			})
			//put every file into an array to render in Files Container
			updated['completeFileList'] = action.payload
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

