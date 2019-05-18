import React, { Component } from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faWindowClose, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);
library.add(faWindowClose);
library.add(faPlusSquare);

class Update extends Component {
	constructor(props) {
		super(props);
		this.state = {
			popularCities: '',
			popularFoods: '',
			attractions: '',
			languagesSpoken: '',
			climate: '',
			activities: ''
		};
		this.deleteCountry = this.deleteCountry.bind(this);
		this.addAttraction = this.addAttraction.bind(this);
		this.addCity = this.addCity.bind(this);
		this.addLanguage = this.addLanguage.bind(this);
		this.addActivity = this.addActivity.bind(this);
		this.addFood = this.addFood.bind(this);
		this.addClimate = this.addClimate.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
		console.log('hello');
	}

	deleteCountry(event) {
		console.log('Read: handleSubmit');
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/${selectCountry[0]._id}`;

		axios.delete(URL);
	}
	addAttraction(evt) {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/newAttraction/${selectCountry[0]._id}`;
		axios.put(URL, { attractions: this.state.attractions });
	}
	addCity(evt) {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/newCity/${selectCountry[0]._id}`;
		axios.put(URL, { popularCities: this.state.popularCities });
	}
	addLanguage(evt) {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/newLanguage/${selectCountry[0]._id}`;
		axios.put(URL, { languagesSpoken: this.state.languagesSpoken });
	}
	addFood(evt) {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/newFood/${selectCountry[0]._id}`;
		axios.put(URL, { popularFoods: this.state.popularFoods });
	}
	addActivity(evt) {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/newActivity/${selectCountry[0]._id}`;
		axios.put(URL, { activities: this.state.activities });
	}
	addClimate(evt) {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		const URL = `http://localhost:3001/countries/changeClimate/${selectCountry[0]._id}`;
		axios.put(URL, { climate: this.state.climate });
	}
	//addClimate Not working
	handleAddition(evt) {
		let target = evt.target;
		let value = target.value;
		let name = target.name;
		this.setState({ [name]: value });
	}
	render() {
		console.log('rendering');
		let country = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		console.log(country);
		if (country.length > 0) {
			return (
				<div>
					<div>
						<h1 className="white">
							{country[0].name}
							<FontAwesomeIcon
								className="black mainDelete"
								icon="window-close"
								onClick={this.deleteCountry}
							/>
						</h1>
					</div>
					<div className="readContainer">
						<div id="columnl">
							<div className="compartment">
								<h1 id="compartmentHeader">Popular Cities</h1>
								<div className="oneLine">
									<input
										type="text"
										placeholder="city name"
										name="popularCities"
										className="smallInput"
										onChange={this.handleAddition}
									/>
									<FontAwesomeIcon className="black plus" icon="plus-square" onClick={this.addCity} />
								</div>
								<ul>
									{country[0].popularCities.map((city) => {
										return (
											<li>
												{city} <FontAwesomeIcon className="black" icon="window-close" />
											</li>
										);
									})}
								</ul>
							</div>
							<div className="compartment">
								<h1 id="compartmentHeader">Activities</h1>
								<div className="oneLine">
									<input
										type="text"
										placeholder="activity name"
										name="activities"
										className="smallInput"
										onChange={this.handleAddition}
									/>
									<FontAwesomeIcon
										className="black plus"
										icon="plus-square"
										onClick={this.addActivity}
									/>
								</div>
								<ul>
									{country[0].activities.map((activity) => {
										return (
											<li>
												{activity} <FontAwesomeIcon className="black" icon="window-close" />
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div id="columnm">
							<div className="compartment">
								<h1 id="compartmentHeader"> Popular Foods</h1>
								<div className="oneLine">
									<input
										type="text"
										placeholder="food name"
										name="popularFoods"
										className="smallInput"
										onChange={this.handleAddition}
									/>
									<FontAwesomeIcon className="black plus" icon="plus-square" onClick={this.addFood} />
								</div>
								<ul>
									{country[0].popularFoods.map((food) => {
										return (
											<li>
												{food} <FontAwesomeIcon className="black" icon="window-close" />
											</li>
										);
									})}
								</ul>
							</div>
							<div className="compartment">
								<h1 id="compartmentHeader">Languages</h1>
								<div className="oneLine">
									<input
										type="text"
										placeholder="language name"
										name="languagesSpoken"
										className="smallInput"
										onChange={this.handleAddition}
									/>
									<FontAwesomeIcon
										className="black plus"
										icon="plus-square"
										onClick={this.addLanguage}
									/>
								</div>
								<ul>
									{country[0].languagesSpoken.map((language) => {
										return (
											<li>
												{language} <FontAwesomeIcon className="black" icon="window-close" />
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div id="columnr">
							<div className="compartment" id="compartment">
								<h1 id="compartmentHeader"> Popular Attractions</h1>
								<div className="oneLine">
									<input
										type="text"
										placeholder="attraction name"
										name="attractions"
										className="smallInput"
										onChange={this.handleAddition}
									/>
									<FontAwesomeIcon
										className="black plus"
										icon="plus-square"
										onClick={this.addAttraction}
									/>
								</div>
								<ul>
									{country[0].attractions.map((attraction) => {
										return (
											<li>
												{attraction} <FontAwesomeIcon className="black" icon="window-close" />
											</li>
										);
									})}
								</ul>
							</div>
							<div className="compartment">
								<h1 id="compartmentHeader">Climate</h1>
								<div className="oneLine">
									<input
										type="text"
										placeholder="change climate"
										name="newClimate"
										className="smallInput"
										onChange={this.handleAddition}
									/>
									<FontAwesomeIcon
										className="black plus"
										icon="plus-square"
										onClick={this.addClimate}
									/>
								</div>
								<p className="climateDescription">
									{country[0].climate} <FontAwesomeIcon className="black" icon="window-close" />
								</p>
							</div>
						</div>
					</div>
					<div className="picturesContainer">
						<h1 id="picsHeader">Pictures</h1>
						{country[0].images.map((image) => {
							return (
								<div id="landscape">
									<img id="specialImage" src={`http://localhost:3001${image}`} alt={'country'} />
								</div>
							);
						})}
					</div>
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default Update;
