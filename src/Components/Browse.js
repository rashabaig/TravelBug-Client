import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Browse extends Component {
	render() {
		console.log(this.props.countriesData);
		let allCountries = this.props.countriesData.map((country, id) => {
			return (
				<Link to={'/browse/' + country.name}>
					<div className="country" key={id}>
						<h2>{country.name}</h2>
					</div>
				</Link>
			);
		});
		return <div>{allCountries}</div>;
	}
}

export default Browse;
