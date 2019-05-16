import React, { Component } from 'react';
import Read from './Read';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ''
		};
		this.handleSearchInput = this.handleSearchInput.bind(this);
	}
	handleSearchInput(event) {
		this.setState({ searchInput: event.target.value });
	}
	render() {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.state.searchInput);
		console.log(selectCountry);
		let countryHTML;

		let match = { params: { name: this.state.searchInput } };

		if (selectCountry.length > 0) {
			countryHTML = <Read match={match} countriesData={selectCountry} />;
		}
		return (
			<div className="center">
				<h1 className="searchHeading">Search by Country Name</h1>
				<form>
					<input
						className="searchCountryField"
						type="text"
						placeholder="country name here"
						onChange={this.handleSearchInput}
					/>
				</form>
				{countryHTML}
			</div>
		);
	}
}

export default Search;
