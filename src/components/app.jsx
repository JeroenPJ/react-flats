import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import GMap from './gmap.jsx';
import flats from './../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 48.87,
        lng: 2.33
      },
      selectedFlat: null
    }
  }

  selectFlat = (flat_name) => {
    const flat = flats.find(f => f.name === flat_name);

    this.setState({
      center: {
        lat: flat.lat,
        lng: flat.lng
      },
      selectedFlat: flat
    })
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} selectFlat={this.selectFlat} />
        <GMap selectedFlat={this.state.selectedFlat} center={this.state.center} />
      </div>
    );
  }
}

export default App;
