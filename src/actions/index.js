import constants from '../constants'

export default {

	locationsReceived: (locations) => {
		return {
			type: constants.LOCATIONS_RECEIVED,
			locations: locations
		}
	}

}