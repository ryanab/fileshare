import constants from '../constants'


var initialState = {
  user: null
}

export default (state=initialState, action){
  let updated = Object.assign({}, state)
  switch(action.type){
    case constants.PROFILE_CREATED:
      console.log("ACTIONS PROFILE_CREATED: " + JSON.stringify(action.payload))
      return updated
    case constants.USER_LOGGED_IN:
      console.log("ACTIONS: USER_LOGGED IN: " + JSON.stringify(action.payload))
      default:
      return state
  }
}
