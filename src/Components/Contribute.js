import React, { Component } from 'react';
import '../Components/Contribute.css';
import axios from 'axios';
const URL = 'http://localhost:3001/countries/';

class Contribute extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			popularCities: [],
			attractions: [],
			popularFoods: [],
			languagesSpoken: [],
			climate: '',
			images: []
		};
		this.submitNewCountry = this.submitNewCountry.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	submitNewCountry() {
		axios
			.post(URL, {
				name: this.state.name,
				popularCities: this.state.popularCities,
				attractions: this.state.attractions,
				popularFoods: this.state.popularFoods,
				languagesSpoken: this.state.languagesSpoken,
				climate: this.state.climate,
				activities: this.state.activities,
				images: this.state.images
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	handleInput(evt) {
		let target = evt.target;
		let value = target.value;
		let name = target.name;
		this.setState({ [name]: value });
	}
	render() {
		return (
			<div className="main">
				<h1 className="white red">Dont see a country listed? Share what you know!</h1>
				<div className="form">
					<form>
						<h3>Add a new country to Travel Bug's database</h3>
						<div>
							<input
								type="text"
								placeholder="country name"
								className="name"
								name="name"
								onChange={this.handleInput}
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="popular cities"
								name="popularCities"
								onChange={this.handleInput}
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="attractions"
								name="attractions"
								onChange={this.handleInput}
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="popular foods"
								name="popularFoods"
								onChange={this.handleInput}
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="languages spoken"
								name="languagesSpoken"
								onChange={this.handleInput}
							/>
						</div>
						<div>
							<input type="text" placeholder="climate" name="climate" onChange={this.handleInput} />
						</div>
						<div>
							<input type="text" placeholder="activities" name="activities" onChange={this.handleInput} />
						</div>
						<div>
							<input type="file" accept="image/*" name="images" onChange={this.handleInput} />
						</div>
						<input type="submit" value="submit" className="submit" onClick={this.submitNewCountry} />
					</form>
				</div>
			</div>
		);
	}
}

export default Contribute;
