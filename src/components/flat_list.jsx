import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  renderFlats = () => {
    return this.props.flats.map(flat => <Flat {...flat} key={flat.name} selectFlat={this.props.selectFlat} />);
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    );
  }
}

export default FlatList;
