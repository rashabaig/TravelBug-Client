import React, { Component } from 'react';
import axios from 'axios';
// const URL = 'http://localhost:3001/countries/';
class Read extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nothing: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		console.log('Read: handleSubmit');
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/${selectCountry[0]._id}`;
		// let deleteId = selectCountry[0]._id;
		axios.delete(URL);
	}
	// deleteCountry(event) {
	//     console.log('Read: deleteCountry');
	//     let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
	// 	this.props.delete(selectCountry[0]._id).then((res) => {
	// 		console.log(res);
	// 	});
	// }
	render() {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		if (selectCountry.length > 0) {
			return (
				<div>
					<div>
						<h1>
							{selectCountry[0].name}{' '}
							<input type="submit" value="delete country" onClick={this.handleSubmit} />
						</h1>
					</div>
					<h1>Popular Cities</h1>
					<ul>
						{selectCountry[0].popularCities.map((city) => {
							return <li>{city}</li>;
						})}
					</ul>
					<h1>Popular Attractions</h1>
					<ul>
						{selectCountry[0].attractions.map((attraction) => {
							return <li>{attraction}</li>;
						})}
					</ul>
					<h1>Popular Foods</h1>
					<ul>
						{selectCountry[0].popularFoods.map((food) => {
							return <li>{food}</li>;
						})}
					</ul>
					<h1>Languages</h1>
					<ul>
						{selectCountry[0].languagesSpoken.map((language) => {
							return <li>{language}</li>;
						})}
					</ul>
					<h1>Climate: {selectCountry[0].climate}</h1>
					<h1>Activities</h1>
					<ul>
						{selectCountry[0].activities.map((activity) => {
							return <li>{activity}</li>;
						})}
					</ul>
					<h1>Pictures</h1>
					{selectCountry[0].images.map((image) => {
						return (
							<div>
								<img src={`http://localhost:3001${image}`} />
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

export default Read;
