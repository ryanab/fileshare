import constants from '../constants'

var initialState = {
	all: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, initialState)

	switch(action.type){
		case constants.PROFILES_RECEIVED:
		//console.log('PROFILES_RECEIVED: '+JSON.stringify(action.payload))

			let profiles = action.payload
			updated['all'] = profiles
			
			profiles.forEach((profile, i) => {
			 let id =	profile.id
			 updated[id] = profile 
			})
			
			return updated
		
		default:
			return state
	}
}