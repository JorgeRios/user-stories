import { withGoogleMap } from "react-google-maps";
import React, { Component } from 'react';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  />
  ));

export default class GettinStartedExample extends Component {
  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={ 
	  <div style={{height:  `100%`}} />

	}
        mapElement={
	  <div style={{ height: `100%`}} />
        }
       /> 
    );
  }
}


