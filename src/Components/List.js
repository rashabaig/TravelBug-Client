import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <ul>
              {this.props.items.map((item) => <li>{item}</li>)}  
            </ul>
        );
    }
}

export default List;

//in Read.js
<List items={selectCountry.popularFoods}/>
<List items={this.props.countriesData.attractions} />

//in App.js
<Read countriesDAta={this.StaticRange.countriesDAta}
