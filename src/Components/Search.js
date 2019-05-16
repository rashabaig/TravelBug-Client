import React, { Component } from 'react';
import Read from './Read';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ''
		};
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSearchInput(event) {
		this.setState({ searchInput: event.target.value });
	}
	handleSubmit(evt) {
		// do the filtering
		// if there's a match
		// store the thing to be rendered in a variable
	}
	render() {
		//filter of props being passed into search and match to input
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.state.searchInput);
		console.log(selectCountry);
		let countryHTML;

		let match = { params: { name: this.state.searchInput } };

		if (selectCountry.length > 0) {
			countryHTML = <Read match={match} countriesData={selectCountry} />;
		}
		return (
			<div>
				<h1>Search by Country Name</h1>
				<form>
					<input type="text" placeholder="country name" onChange={this.handleSearchInput} />
					<input type="submit" value="submit" onClick={this.handleSubmit} />
				</form>
				{countryHTML}
			</div>
		);
	}
}

export default Search;
