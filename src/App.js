// import React from 'react';
import './App.css';
import './index.css';
import { Route, Link, Switch } from 'react-router-dom';
import Contribute from './Components/Contribute';
import Browse from './Components/Browse';
import Search from './Components/Search';
import Read from './Components/Read';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Update from './Components/Update';
import React, { Component } from 'react';
import axios from 'axios';
import ladybug from './ladybug.png';

const URL = 'http://localhost:3001/countries/all';

class App extends Component {
	constructor() {
		super();
		this.state = {
			countriesData: []
		};
	}

	// delete(input) {
	// 	axios.delete(`http://localhost:3001/countries/${input}`).then((res) => {
	// 		console.log(res);
	// 	});
	// }

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
					<Link to="/">
						Travel Bug <img id="smallBug" src={ladybug} />
					</Link>
					<Link to="/browse">Browse</Link>
					<Link to="/search">Search</Link>
					<Link to="/contribute">Contribute</Link>
					<Link to="/edit">Edit</Link>
				</nav>
				<main>
					<Switch>
						<Route
							exact
							path="/browse"
							render={(routerProps) => (
								<Browse {...routerProps} countriesData={this.state.countriesData} />
							)}
						/>
						<Route
							exact
							path="/search"
							render={(routerProps) => (
								<Search {...routerProps} countriesData={this.state.countriesData} />
							)}
						/>
						<Route
							exact
							path="/edit"
							render={(routerProps) => <Edit {...routerProps} countriesData={this.state.countriesData} />}
						/>
						<Route
							exact
							path="/edit/:name"
							render={(routerProps) => (
								<Update {...routerProps} countriesData={this.state.countriesData} />
							)}
						/>

						<Route exact path="/contribute" render={(routerProps) => <Contribute {...routerProps} />} />
						<Route
							exact
							path="/browse/:name"
							render={(routerProps) => <Read {...routerProps} countriesData={this.state.countriesData} />}
						/>
						<Route exact path="/" render={(routerProps) => <Home {...routerProps} />} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
