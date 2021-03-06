import constants from '../constants'


var initialState = {
  user: null
}

export default (state=initialState, action) => {
  let updated = Object.assign({}, state)
  switch(action.type){
    case constants.PROFILE_CREATED:

      updated.user = action.payload
      return updated

    case constants.CURRENT_USER_RECEIVED:
    
      updated.user = action.payload
      return updated

    default:

      return state
  }
}
