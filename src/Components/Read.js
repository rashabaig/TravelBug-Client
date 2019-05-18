import React, { Component } from 'react';

class Read extends Component {
	render() {
		let selectCountry = this.props.countriesData.filter((country) => country.name === this.props.match.params.name);
		if (selectCountry.length > 0) {
			return (
				<div>
					<div>
						<h1 className="white">{selectCountry[0].name}</h1>
					</div>
					<div className="readContainer">
						<div id="columnl">
							<div className="compartment">
								<h1 id="compartmentHeader"> Popular Cities </h1>
								<ul>
									{selectCountry[0].popularCities.map((city) => {
										return <li>{city}</li>;
									})}
								</ul>
							</div>
							<div className="compartment">
								<h1 id="compartmentHeader">Activities</h1>
								<ul>
									{selectCountry[0].activities.map((activity) => {
										return <li>{activity}</li>;
									})}
								</ul>
							</div>
						</div>
						<div id="columnm">
							<div className="compartment">
								<h1 id="compartmentHeader"> Popular Foods </h1>
								<ul>
									{selectCountry[0].popularFoods.map((food) => {
										return <li>{food}</li>;
									})}
								</ul>
							</div>
							<div className="compartment">
								<h1 id="compartmentHeader">Languages</h1>
								<ul>
									{selectCountry[0].languagesSpoken.map((language) => {
										return <li>{language}</li>;
									})}
								</ul>
							</div>
						</div>
						<div id="columnr">
							<div className="compartment" id="compartment">
								<h1 id="compartmentHeader"> Popular Attractions </h1>
								<ul>
									{selectCountry[0].attractions.map((attraction) => {
										return <li>{attraction}</li>;
									})}
								</ul>
							</div>
							<div className="compartment">
								<h1 id="compartmentHeader">Climate</h1>
								<p className="climateDescription">{selectCountry[0].climate}</p>
							</div>
						</div>
					</div>
					<div className="picturesContainer">
						<h1 id="picsHeader">Pictures</h1>
						{selectCountry[0].images.map((image) => {
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

export default Read;
