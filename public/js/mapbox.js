const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3ZldGxhIiwiYSI6ImNrdjB3dnFvcjBiNm8ybnBuczRuMDR0eTkifQ.7uB3ufwFpDSZbt9zCuJamA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/svetla/ckv0y4q6z290z14l9w2b2j9wm',
  scrollZoom: false,
  //   center: [-118.304652, 34.011055],
  //   zoom: 4,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    right: 100,
    left: 100,
  },
});
