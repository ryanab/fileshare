import constants from '../constants'
import { APIManager } from '../utils'


const getRequest = (path, params, actionType)=>{
  return(dispatch) =>
    APIManager.get(path, params)
    .then(response=>{
      console.log(JSON.stringify(response))
      const payload = response.results || response.result || response.user
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

  fetchCurrentUser: ()=>{
    return(dispatch) => {
      return dispatch(getRequest('account/currentuser', null, constants.USER_LOGGED_IN))
    }
  },

  fetchProfiles: (params) => {
    return (dispatch) => {
      return dispatch(getRequest('/api/profile', params, constants.PROFILES_RECEIVED))
    }
  },

  fetchProfile: (id) => {
    return (dispatch) => {
      return dispatch(getRequest('/api/profile/'+id, null, constants.PROFILE_RECEIVED))
    }
  },

  logout: () => {
    return (dispatch) => {
      return dispatch(getRequest('account/logout', null, constants.USER_LOGGED_IN))
    }
  },

  fetchFiles: (params) => {
    return (dispatch) => {
      return dispatch(getRequest('/api/file', params, constants.FILES_RECEIVED))
    }
  },

  createFile: (params) => {
    return (dispatch) =>  {
      return dispatch(postRequest('/api/file', params, constants.FILE_CREATED))
    }
  }
}
