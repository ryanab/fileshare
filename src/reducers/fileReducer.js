import constants from '../constants'

var initialState = {
	map:{},
	completeFileList:[]
}

export default(state = initialState, action) => {

  let updated = Object.assign({}, state)
  switch(action.type){

    case constants.FILES_RECEIVED:
		console.log("ACTION.Params: " + JSON.stringify(action.params))
		let key = Object.keys(action.params)
			// let fileType = action.params.fileType
			// console.log("Params: " + JSON.stringify(action.params))
			// console.log("Payload" + JSON.stringify(action.payload))
      //for now we are going to store the files as a new array
      //later on based on discussed functionality, we may store all files
      //and add to an existing array
      // updated['fileType'] = action.payload
			// let currentProfile = Object.assign([], state.completeFileList)
			updated['completeFileList'] = action.payload
      return updated
    case constants.FILE_CREATED:
			let existingArray = Object.assign([], state['completeFileList'])
			existingArray.unshift(action.payload)
			updated['completeFileList'] = existingArray

			console.log('ACTION PAYLOAD: ' + JSON.stringify(action.payload))


	   	return updated
    default:
      return updated
  }
}
