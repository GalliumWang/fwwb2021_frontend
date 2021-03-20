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

//mapped color for each line
const colorStops = Object.keys(linesMap).map(key => [
  key,
  colorMap[linesMap[key]]
]);


var init_point=stops.features[0].geometry.coordinates;

const maxBounds = stops.features.reduce(
  (acc, stop) => {
    const [[swLon, swLat], [neLon, neLat]] = acc;
    const [lon, lat] = stop.geometry.coordinates;
    return [
      [Math.min(swLon, lon), Math.min(swLat, lat)],
      [Math.max(neLon, lon), Math.max(neLat, lat)]
    ];
  },
   [init_point,init_point] // [[-74, 40.7328], [-74, 40.7328]]
);

//TODO replace with my token
mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJhZGRhaWx5IiwiYSI6ImNqN21iam90ZzJ3MnEzM3F1anNkNWIydjMifQ.Dez6MhslaJs8ROSplWPSpQ";


const MAP_MARGIN_HON=Math.abs(maxBounds[0][0]-maxBounds[1][0])
const MAP_MARGIN_VER=Math.abs(maxBounds[0][1]-maxBounds[1][1])


var map;

if (!mapboxgl.supported()) {
  alert("Your browser does not support Mapbox GL");
} 
else {

  /**
   * map configuration
   */
  map = new mapboxgl.Map({
    preserveDrawingBuffer:true,

    container: "map", // id of the element to serve as map
    // style: "mapbox://styles/mapbox/satellite-v9",
    // style: "mapbox://styles/mapbox/dark-v9",
    // style: "mapbox://styles/mapbox/navigation-preview-day-v4",
    // style: "mapbox://styles/mapbox/navigation-preview-night-v4",
    // style: "mapbox://styles/mapbox/navigation-guidance-day-v4",
    style: "mapbox://styles/mapbox/navigation-guidance-night-v4",
    center: [ (maxBounds[0][0]+maxBounds[1][0])/2 , (maxBounds[0][1]+maxBounds[1][1])/2 ], // center of map
    zoom: 11, // 14 for stops display
    maxBounds: [
      [maxBounds[0][0] - MAP_MARGIN_HON, maxBounds[0][1] - MAP_MARGIN_HON],
      [maxBounds[1][0] + MAP_MARGIN_VER, maxBounds[1][1] + MAP_MARGIN_VER]
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

    map.addLayer(
      {
        'id': 'districtLayer',
        'type': 'fill',
        'source': {
          type: "geojson",
          data: district_data
        },
        'layout': {},
        'paint': {
          'fill-color': '#5a3fc0',
          'fill-opacity': 0.3
        }
      },
      'poi-label'
    );


  });

  // if ("geolocation" in navigator) {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       map.flyTo({ center: [longitude, latitude], zoom: 14 });
  //     }
  //   );
  // }
}


// add subway icon for use
map.loadImage('./static/image/EXPERIENCE_JAPAN_PICTOGRAM/png/T_CHIKATETSU.png', function(error, image) {
   if (error) throw error;
   map.addImage('subway_icon', image);
});