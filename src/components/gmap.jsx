import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div className="marker">{text}</div>;

class GMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 12
  };

  renderMarkers = () => {
    return this.props.flats.map(f => <Marker lat={f.lat} lng={f.lng} text={f.price} key={f.name} />);
  }

  renderSelectedFlat = () => {
    const flat = this.props.selectedFlat;
    if (flat) {
      return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} key={flat.name} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="map-container" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.renderSelectedFlat()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;
