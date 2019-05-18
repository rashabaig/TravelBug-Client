import React, { Component } from 'react';
import './Home.css';
import ladybug from './ladybug.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClipboardList, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch, faClipboardList, faGlobeAmericas);

class Home extends Component {
	render() {
		return (
			<div>
				<div className="mainTitleContainer">
					<h1 className="mainTitle">
						Travel Bug<img src={ladybug} />
					</h1>
					<h4>Explore. Plan. Go.</h4>
				</div>
				<div className="description">
					<div className="infoBox1">
						<FontAwesomeIcon className="mainPageIcon" icon="search" />
						<h1 id="mainPageSubheadings">Browse</h1>
						<ul>
							<li>Browse countries in Travel Bug's Database</li>
							<li>Learn about the destination</li>
						</ul>
					</div>
					<div className="infoBox2">
						<FontAwesomeIcon className="mainPageIcon" icon="clipboard-list" />
						<h1 id="mainPageSubheadings">Get Inspired</h1>
						<ul>
							<li>Get inspiration to plan your travel ininerary</li>
						</ul>
					</div>
					<div className="infoBox3">
						<FontAwesomeIcon className="mainPageIcon" icon="globe-americas" />
						<h1 id="mainPageSubheadings">Contribute</h1>
						<ul>
							<li>Add content to Travel Bug's database, to inspire others</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
