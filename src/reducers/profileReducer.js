import constants from '../constants'

var initialState = {
	
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, initialState)

	switch(action.type){
		case constants.PROFILES_RECEIVED:
		
		const keys = Object.keys(action.params)
		keys.forEach((key, i) => {
			const value = action.params[key]
			updated[value] = action.payload
		})
		action.payload.forEach((profile, i) => {
			updated[profile.id] = profile
		})

		// //	updated.page = action.payload
		// updated['page'] = action.payload
		// 	console.log('PROFILE_RECEIVED: '+JSON.stringify(updated))
			
			return updated
		
		default:
			return state
	}
}