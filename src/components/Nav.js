import React, { Component } from 'react'
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../actions'

class Nav extends Component {

	constructor(){
		super()
		this.state = {
			zipCode: '',
			filter: 'food'
		}
	}

	updateZipcode(event){
		// console.log('searchLocations: ' + event.target.value)
		this.setState({
			zipCode: event.target.value
		})
	}

	searchLocations(event){
		event.preventDefault()
		// console.log('searchLocations: ' + this.state.zipCode)
		const url = 'https://api.foursquare.com/v2/venues/search'
		const params = {
			v: '20140806',
			near: this.state.zipCode,
			client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
			client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ',
			query: this.state.filter
		}

		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err,response) => {
			const location = response.body.response.venues
			// console.log('searchLocations: ' + JSON.stringify(location))
			this.props.locationsReceived(location)
		})

	}

	updateFilter(event){
		console.log('updateFilter: ' + event.target.value)
		this.setState({
			filter: event.target.value
		})
	}

	render(){
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			  
			    <div className="navbar-header">
				    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				    </button>
			        <a className="navbar-brand" href="#">FoursquareAPI</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      	<form className="navbar-form navbar-left">
				        <div className="form-group">
				        	<input onChange={this.updateZipcode.bind(this)} type="text" className="form-control" placeholder="Zip Code or Location"/>
				        	<select id="filter" onChange={this.updateFilter.bind(this)} style={{marginLeft:10}} className="form-control">
				        		<option value="food">Food</option>
				        		<option value="coffee">Coffee</option>
				        	</select>
				        </div>
				        <button style={{marginLeft:10}} onClick={this.searchLocations.bind(this)} className="btn btn-default">Search</button>
			      	</form>
			    </div>

			  </div>
			</nav>
		)
	}
}

const stateToProps = (state) => {
	return {
		locations: state.location.locations
	}
}

const dispatchToProps = (dispatch) => {
	return {
		locationsReceived: (locations) => dispatch(actions.locationsReceived(locations))
	}
}

export default connect(stateToProps,dispatchToProps)(Nav)

