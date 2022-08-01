// Get data from cities.js
let cityData = cities;

// Create the map object with a center and zoom level.
var map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 4
  });

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location,{
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

//  Add a marker to the map for Los Angeles, California.
// L.circleMarker([34.0522, -118.2437], {
//   radius: 300,
//   fillColor: '#ffffa1',
//   color: 'black'
  

// }).addTo(map);

  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  // id: "mapbox/dark-v10",
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);