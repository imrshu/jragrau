import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React, { Component } from 'react'


class Maps extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 28.675594, lng: 77.120238 }}
        >
          <Marker position={{ lat: 28.675594, lng: 77.120238 }} />
        </Map>
      );
    }
  }


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCSu-oO-IUzPTJbkrX-P7yHpIjeYjyDIkg'
  })(Maps);
