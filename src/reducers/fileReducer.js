import constants from '../constants'

var initialState = {
  types: ['all','image', 'pdf', 'video','audio','misc'],
  typeSelected: 'image',
	completeFileList:[]
}

export default(state = initialState, action) => {

  let updated = Object.assign({}, state)
  switch(action.type){

    case constants.FILES_RECEIVED:
		console.log("ACTION.Params: " + JSON.stringify(action.params))
			// let fileType = action.params.fileType
			// console.log("Params: " + JSON.stringify(action.params))
			// console.log("Payload" + JSON.stringify(action.payload))
      //for now we are going to store the files as a new array
      //later on based on discussed functionality, we may store all files
      //and add to an existing array
      // updated['fileType'] = action.payload
			updated['completeFileList'] = action.payload

      return updated

    case constants.FILE_CREATED:
      console.log('FILE CREATED: ')
			let fileCategory = updated[action.payload.fileCategory]
			console.log("FILE CATEGORY: " + JSON.stringify(fileCategory))
			let newFile = action.payload
			if(updated[fileCategory]==null){
				updated[fileCategory]=[]
			}
			let addFile = Object.assign([],updated[fileCategory])
			addFile.unshift(newFile)
			updated[action.payload.fileCategory] = addFile
			// console.log('FileREDUCER FILE_CREATED: ' + JSON.stringify(updated))
      return updated
		case constants.FILE_TYPE_SELECTED:
		console.log('FILE_TYPE_SELECTED: '+ JSON.stringify(action.payload))
			updated['typeSelected'] = action.payload
			return updated

    default:
      return updated
  }
}
