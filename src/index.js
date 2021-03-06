const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiaGJrb3BlbnNraSIsImEiOiJjamQxdW53eWoxajA3MnBwNHdyODNiZmRxIn0.TXwOjJij8cr0_hO8ObwblQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
}); 

const buildMarker = require("./marker");

const marker = buildMarker("activities", [-74.009151, 40.705086]);
marker.addTo(map);
