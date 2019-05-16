import React, { Component } from 'react';
import './Home.css';
import ladybug from './ladybug.png';

class Home extends Component {
	render() {
		return (
			<div className="mainTitleContainer">
				<h1 className="mainTitle">
					Travel Bug<img src={ladybug} />
				</h1>
				<h4>Explore.Plan.Go.</h4>
			</div>
		);
	}
}

export default Home;
