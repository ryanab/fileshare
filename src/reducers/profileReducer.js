import constants from '../constants'

var initialState = {
	
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, initialState)

	switch(action.type){
		case constants.PROFILE_RECEIVED:
		//	console.log('PROFILE_RECEIVED: '+JSON.stringify(action.payload))


		//	updated.page = action.payload
		updated['page'] = action.payload
			console.log('PROFILE_RECEIVED: '+JSON.stringify(updated))
			
			return updated
		
		default:
			return state
	}
}