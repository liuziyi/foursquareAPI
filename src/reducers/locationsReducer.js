import constants from '../constants'

var initialState = {
	locations: null
}

export default (state = initialState, action) => {

	switch(action.type){
		case constants.LOCATIONS_RECEIVED:
			// console.log('LOCATIONS_RECEIVED: ' + JSON.stringify(action.locations))
			let updated = Object.assign({},state)
			updated['locations'] = action.locations
			return updated
		default:
			return state
	}


}