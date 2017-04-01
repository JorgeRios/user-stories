import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import SimpleMarker from 'google-map-react';
var style = require("css!./marker.css").toString();
console.log(style)

var clase = {
 color:'red'
};

const AnyReactComponent = ({ text }) => <div class={style.component}><Glyphicon glyph="star" />{text} </div>;

var divStyle = {
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20,
  width:1024,
  height:768
};



export default class YourComponent extends Component {
  static defaultProps = {
    center: {lat: 20.676759, lng: -103.373651},
    zoom: 14,
    apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
  };
  render() {
    return (
      <div style={divStyle}>
        <GoogleMapReact
	  defaultCenter={this.props.center}
	  bootstrapURLKeys={{ key: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'}}
          defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
	  lat={20.676759}
          lng={-103.373651}
          text={'aqui esta'}
        />
        </GoogleMapReact>
      </div>
    );
  }
}
