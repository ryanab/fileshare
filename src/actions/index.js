import constants from '../constants'
import { APIManager } from '../utils'


const getRequest = (path, params, actionType)=>{
  return(dispatch) =>
    APIManager.get(path, params)
    .then(response=>{
      const payload = response.results || response.result || response.users

      dispatch({
        type: actionType,
        payload: payload,
        params: params
      })
      return response
    })
    .catch(err=>{
      throw err
    })
}

const postRequest = (path, params, actionType)=>{
  return (dispatch) =>
    APIManager.post(path, params)
    .then(response=>{
      const payload = response.results || response.result || response.user
      dispatch({
        type: actionType,
        payload:payload,
        params:params
      })
      return response
    })
    .catch(err => {
      throw err
    })
}

export default{

  register: (credentials) => {
    return(dispatch) => {
      return dispatch(postRequest('account/register',credentials, constants.PROFILE_CREATED))
    }
  },

  login: (credentials) => {
    return (dispatch) => {
      return dispatch(postRequest('account/login', credentials, constants.USER_LOGGED_IN))
    }
  },

  checkCurrentUser: ()=>{
    return(dispatch) => {
      return dispatch(getRequest('account/currentuser', {}, constants.USER_LOGGED_IN))
    }
  },

  logout: () => {
    return (dispatch) => {
      return dispatch(getRequest('account/logout', {}, constants.USER_LOGGED_IN))
    }
  }
}
