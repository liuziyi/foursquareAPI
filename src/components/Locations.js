import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class Locations extends Component {
	render(){
		const locations = this.props.locations || []

		return (
			<div className="container">
				<h1 className="text-center">Locations</h1>
				<hr />
				<ol>
					{
						locations.map((location,i) => {
							return (
								<li key={location.id}>
									<div style={{padding:12, marginBottom:12, background:'#f9f9f9'}}>
										<h4>{location.name}</h4>
										<span>{location.location.address}</span> <br/>
										<a href={location.url}>{location.url}</a>
									</div>
								</li>
							)
						})
					}
				</ol>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		locations: state.location.locations
	}
}

export default connect(stateToProps)(Locations)