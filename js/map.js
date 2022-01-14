mapboxgl.accessToken = 'pk.eyJ1Ijoiam9tYTEiLCJhIjoiY2t5YnRobHhnMDRteTJudXJrbDhjbXJ1biJ9.heDAjvHjKrfqoQKDknNHLw';

navigator.geolocation.getCurrentPosition(successLocation,
errorLocation, { enableHighAccuracy :true
})

function successLocation(position){
   console.log(position);
   setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {}

function setupMap(center) {
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
   center: center,
   zoom: 15
})

const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
   accessToken: mapboxgl.accessToken
 });

 map.addControl(directions, 'top-left');
}
