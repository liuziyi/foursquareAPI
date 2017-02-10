import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Nav, Locations } from './components'
import { Provider } from 'react-redux'
import store from './stores'

class App extends Component {
	render(){
		return(
			<Provider store={ store.initialize() }>
				<div>
					<Nav/>
					<Locations/>
				</div>
			</Provider>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))