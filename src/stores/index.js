import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { locationsReducer } from '../reducers'

var store;

export default {

	initialize: () => {
		const reducers = combineReducers({
			location: locationsReducer
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