import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import SimpleMarker from 'google-map-react';
var data = require('json!./store_directory.json');
var style = require("css!./marker.css");
console.log(data);
var clase = {
 color:'red'
};

const AnyReactComponent = ({ text }) => <div style={markerStyle} onMouseEnter={toggle} onMouseLeave={toggle}>
 
</div>;

let  divStyle = {
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20,
  width:1024,
  height:768
};


let  markerStyle = {
  width:'20px',
  'borderRadius': '6px',
  border: '2px solid',
  background:'green',
  height:'20px',
  color:'red',
};

let toggle = ()=>{
  hover = !hover
  if (hover){
    markerStyle.background= 'green'
  } else {
    markerStyle.background= 'blue'
  }
};

var hover = true;

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
