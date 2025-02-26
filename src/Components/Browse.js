import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Browse extends Component {
	render() {
		console.log(this.props.countriesData);
		let allCountries = this.props.countriesData.map((country, id) => {
			return (
				<Link to={'/browse/' + country.name}>
					<div className="country" key={id}>
						<h2 className="browseHeadings">{country.name}</h2>
					</div>
				</Link>
			);
		});
		return (
			<div>
				<h2 className="browseHeadings browseTitle">Browse Countries</h2>
				<div>{allCountries}</div>
			</div>
		);
	}
}

export default Browse;
