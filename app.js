mapboxgl.accessToken = "YOUR_TOKEN";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [14.5, 46.05],
  zoom: 9
});
