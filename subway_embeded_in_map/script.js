// TODO modify

// lineData & stops come from geojson files
// downloaded from NYC's Open Data project.

//http://web.mta.info/developers/resources/line_colors.htm
const colorMap = {
  A: "#0039A6",
  B: "#FF6319",
  G: "#6CBE45",
  J: "#996633",
  L: "#A7A9AC",
  N: "#FCCC0A",
  S: "#808183",
  "1": "#EE352E",
  "4": "#00933C",
  "7": "#B933AD"
};

const linesMap = {};
lineData.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);

const colorStops = Object.keys(linesMap).map(key => [
  key,
  colorMap[linesMap[key]]
]);

const maxBounds = stops.features.reduce(
  (acc, stop) => {
    const [[swLon, swLat], [neLon, neLat]] = acc;
    const [lon, lat] = stop.geometry.coordinates;
    return [
      [Math.min(swLon, lon), Math.min(swLat, lat)],
      [Math.max(neLon, lon), Math.max(neLat, lat)]
    ];
  },
  [[-74, 40.7328], [-74, 40.7328]]
);

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJhZGRhaWx5IiwiYSI6ImNqN21iam90ZzJ3MnEzM3F1anNkNWIydjMifQ.Dez6MhslaJs8ROSplWPSpQ";

if (!mapboxgl.supported()) {
  alert("Your browser does not support Mapbox GL");
} else {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v9",
    center: [-74, 40.7328],
    zoom: 11,
    maxBounds: [
      [maxBounds[0][0] - 0.1, maxBounds[0][1] - 0.1],
      [maxBounds[1][0] + 0.1, maxBounds[1][1] + 0.1]
    ]
  });

  map.on("load", function() {
    map.addLayer({
      id: "trips",
      type: "line",
      source: {
        type: "geojson",
        data: lineData
      },
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": {
          property: "name",
          type: "categorical",
          stops: colorStops
        },
        "line-width": {
          base: 1,
          stops: [[9, 1], [11, 1], [13, 5], [15, 10]]
        }
      }
    });

    map.addLayer({
      id: "stations",
      source: {
        type: "geojson",
        data: stops
      },
      type: "circle",
      paint: {
        "circle-radius": {
          base: 1,
          stops: [[9, 0], [12, 0], [13, 5], [15, 10]]
        },
        "circle-color": "white",
        "circle-stroke-color": "black",
        "circle-stroke-width": {
          base: 1,
          stops: [[9, 0], [12, 0], [13, 1], [15, 2]]
        }
      }
    });

    map.addLayer({
      id: "stations-label",
      source: "stations",
      type: "symbol",
      paint: {
        "text-color": "white",
        "text-halo-color": "black",
        "text-halo-width": 1,
        "text-halo-blur": 4
      },
      layout: {
        "text-font": ["Open Sans Regular"],
        "text-field": "{name} ({line})",
        "text-size": {
          base: 12,
          stops: [[9, 0], [12, 0], [14, 12], [17, 20]]
        },
        "text-anchor": "right",
        "text-offset": [-1.5, 0]
      }
    });
  });

  // if ("geolocation" in navigator) {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       map.flyTo({ center: [longitude, latitude], zoom: 14 });
  //     }
  //   );
  // }
}