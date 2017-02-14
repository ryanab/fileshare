import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { accountReducer, profileReducer, fileReducer } from '../reducers'

var store;

export default {
	configureStore: () => {
		const reducers = combineReducers({
			account: accountReducer,
			files: fileReducer,
			profile: profileReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
