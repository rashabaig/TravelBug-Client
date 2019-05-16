import React, { Component } from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBackspace } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);
library.add(faBackspace);

class Update extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nothing: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		console.log('hello');
	}

	handleSubmit(event) {
		console.log('Read: handleSubmit');
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/${selectCountry[0]._id}`;

		axios.delete(URL);
	}

	render() {
		console.log('rendering');
		let country = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		console.log(country);
		if (country.length > 0) {
			return (
				<div>
					<div>
						<h1>
							{country[0].name} <FontAwesomeIcon icon="backspace" onClick={this.handleSubmit} />
						</h1>
					</div>
					<h1>
						Popular Cities <FontAwesomeIcon icon="edit" />
					</h1>
					<ul>
						{country[0].popularCities.map((city) => {
							return <li>{city}</li>;
						})}
					</ul>
					<h1>
						Popular Attractions <FontAwesomeIcon icon="edit" />
					</h1>
					<ul>
						{country[0].attractions.map((attraction) => {
							return <li>{attraction}</li>;
						})}
					</ul>
					<h1>
						Popular Foods <FontAwesomeIcon icon="edit" />
					</h1>
					<ul>
						{country[0].popularFoods.map((food) => {
							return <li>{food}</li>;
						})}
					</ul>
					<h1>
						Languages <FontAwesomeIcon icon="edit" />
					</h1>
					<ul>
						{country[0].languagesSpoken.map((language) => {
							return <li>{language}</li>;
						})}
					</ul>
					<h1>
						Climate: {country[0].climate} <FontAwesomeIcon icon="edit" />
					</h1>
					<h1>
						Activities <FontAwesomeIcon icon="edit" />
					</h1>
					<ul>
						{country[0].activities.map((activity) => {
							return <li>{activity}</li>;
						})}
					</ul>
					<h1>Pictures</h1>
					{country[0].images.map((image) => {
						return (
							<div>
								<img src={`http://localhost:3001${image}`} alt={'country'} />
							</div>
						);
					})}
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default Update;
