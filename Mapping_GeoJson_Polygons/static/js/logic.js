
 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  // id: "mapbox/dark-v10",
  id: "mapbox/streets-v11",
  // id: "mapbox/satellite-streets-v11",
  //  id: "mapbox/light-v10",
  accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  // id: "mapbox/dark-v10",
  //id: "mapbox/streets-v11",
   id: "mapbox/satellite-streets-v11",
  //  id: "mapbox/light-v10",
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Streets: streets,
  "Satellite Streets": satelliteStreets
};
// Create the map object with a center and zoom level.
var map = L.map("mapid", {
    center: [
      43.7, -79.3
    ],
    zoom: 11,
    layers: [satelliteStreets]
  });

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Grabbing our GeoJSON data.
d3.json("torontoNeighborhoods.json").then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  color: 'blue',
  fillColor: 'yellow',
  weight: 1,
  onEachFeature: function(feature, layer){
    layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME  + "</h3>");
  }
}).addTo(map);
});