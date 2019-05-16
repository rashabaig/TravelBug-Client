import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Edit extends Component {
	// delete() {
	//     axios.delete(`http://localhost:3001/countries/${}`)
	//   }
	render() {
		console.log(this.props.countriesData);
		let allCountries = this.props.countriesData.map((country, id) => {
			return (
				<Link to={'/edit/' + country.name}>
					<div className="country" key={id}>
						<h2 className="browseHeadings">{country.name}</h2>
					</div>
				</Link>
			);
		});
		return (
			<div>
				<h2 className="browseHeadings browseTitle">Update Countries</h2>
				{allCountries}
			</div>
		);
	}
}

export default Edit;
