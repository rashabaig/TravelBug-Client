// import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Contribute from './Components/Contribute';
import Browse from './Components/Browse';
import Search from './Components/Search';
import Read from './Components/Read';
import React, { Component } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3001/countries/all';

class App extends Component {
	constructor() {
		super();
		this.state = {
			countriesData: []
		};
	}
	componentDidMount() {
		axios.get(URL).then((countries) => {
			console.log(countries);
			this.setState({ countriesData: countries.data });
		});
	}
	render() {
		return (
			<div>
				<nav>
					<Link to="/browse">Browse Countries</Link>
					<Link to="/search">Search Countries</Link>
					<Link to="contribute">Add Countries</Link>
				</nav>
				<main>
					<Route
						exact
						path="/browse"
						render={(routerProps) => <Browse {...routerProps} countriesData={this.state.countriesData} />}
					/>
					<Route exact path="/search" render={(routerProps) => <Search {...routerProps} />} />
					<Route exact path="/contribute" render={(routerProps) => <Contribute {...routerProps} />} />
					<Route
						exact
						path="/browse/:name"
						render={(routerProps) => <Read {...routerProps} countriesData={this.state.countriesData} />}
					/>
				</main>
			</div>
		);
	}
}

export default App;
