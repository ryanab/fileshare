import constants from '../constants'

var initialState = {
  types: ['image', 'pdf', 'video','misc'],
  selected: 'image'
}

export default(state = initialState, action) => {

  let updated = Object.assign({}, state)
  switch(action.type){

    case constants.FILES_RECEIVED:
      let fileType = action.params.fileType
      //for now we are going to store the files as a new array
      //later on based on discussed functionality, we may store all files
      //and add to an existing array
      updated[fileType] = action.payload
      return updated

    case constants.FILE_CREATED:
      console.log('FILE CREATED: ')
      return updated

    default:
      return updated
  }
}