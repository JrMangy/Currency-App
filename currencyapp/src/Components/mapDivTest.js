import React from 'react';
import firebase from 'firebase';


class Map extends React.Component {
constructor() {
    super();
    // state = {
    //     map: this.map
    // }
    }
    
  initMap() {
      // The location of destination
      var uluru = {lat: -25.344, lng: 131.036};
      // The map, centered at marker
      var map = new google.maps.Map(
          this.map, {zoom: 4, center: uluru});
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: uluru, map: map});
    } 
    render() {
        return(
        <div id="map"></div>)}
}
export default Map
//   
// Replace the value of the key parameter with your own API key.


// #map {
//   height: 400px;
//   width: 100%;
//  }