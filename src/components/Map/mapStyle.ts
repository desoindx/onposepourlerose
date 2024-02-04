// From https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json
// Without boundary-land-level-4
// Without places

export const mapStyle = {
  version: 8,
  name: "Bright",
  metadata: {
    "mapbox:autocomposite": false,
    "mapbox:groups": {
      "1444849242106.713": { collapsed: false, name: "Places" },
      "1444849334699.1902": { collapsed: true, name: "Bridges" },
      "1444849345966.4436": { collapsed: false, name: "Roads" },
      "1444849354174.1904": { collapsed: true, name: "Tunnels" },
      "1444849364238.8171": { collapsed: false, name: "Buildings" },
      "1444849382550.77": { collapsed: false, name: "Water" },
      "1444849388993.3071": { collapsed: false, name: "Land" },
    },
    "mapbox:type": "template",
    "openmaptiles:mapbox:owner": "openmaptiles",
    "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t",
    "openmaptiles:version": "3.x",
  },
  center: [0, 0],
  zoom: 1,
  bearing: 0,
  pitch: 0,
  sources: {
    openmaptiles: {
      type: "vector",
      url: "https://api.maptiler.com/tiles/countries/tiles.json?key=rlJTJM6Xs5Ir5er30l80",
    },
  },
  sprite: "https://openmaptiles.github.io/osm-bright-gl-style/sprite",
  glyphs:
    "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=rlJTJM6Xs5Ir5er30l80",
  layers: [
    {
      id: "boundary-land-level-4",
      type: "line",
      source: "openmaptiles",
      "source-layer": "administrative",
      filter: ["all", ["==", "level", 1], ["in", "iso_a2", "FR", "ES"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      paint: { "line-color": "#ee91b4" },
    },
  ],
  id: "bright",
};
