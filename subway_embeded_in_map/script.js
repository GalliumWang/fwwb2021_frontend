// TODO modify

// lineData & stops come from geojson files
// downloaded from NYC's Open Data project.


// line data
var lineData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "1",
        "url": "http://web.mta.info/nyct/service/",
        "rt_symbol": "1",
        "objectid": "753",
        "id": "2000393",
        "shape_len": "2438.20024902"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            120.196821,
            30.177019
          ],
          [
            120.182488,
            30.177183
          ],
          [
            120.174551,
            30.177559,
          ],
          [
            120.149576,
            30.181256
          ],
          [
            120.136105,
            30.186648
          ],
          [
            120.112519,
            30.186768
          ],
          [
            120.092044,
            30.175170
          ],
          [
            120.076355,
            30.184764
          ],
          [
            120.070768,
            30.222264
          ],
          [
            120.074389,
            30.234369
          ],
          [
            120.079048,
            30.253903
          ],
          [
            120.072639,
            30.270630
          ],
          [
            120.069270,
            30.286740
          ],
          [
            120.091450,
            30.299341
          ],
          [
            120.106281,
            30.313506
          ],
          [
            120.118878,
            30.339645
          ],
          [
            120.161193,
            30.340026
          ],
          [
            120.179858,
            30.289839
          ],
          [
            120.188515,
            30.245833
          ],
          [
            120.194695,
            30.228200
          ],
          // below not mated with some stop
          [
            120.207821,
            30.200019
          ],
          [
            120.196821,
            30.177019
          ]
        ]
      }
    }
  ]
};


//stop data
var stops = {
  "type": "FeatureCollection",
  "features": [    
    {
      "type": "Feature",
      "properties": {
        "name": "Astor Pl",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "1",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.196821,
          30.177019
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.182488,
          30.177183
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.174551,
          30.177559
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.149576,
          30.181256
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.136105,
          30.186648
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.112519,
          30.186768
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.092044,
          30.175170
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
            120.076355,
            30.184764
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.070768,
          30.222264
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.074389,
          30.234369
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
            120.079048,
            30.253903
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.072639,
          30.270630
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.069270,
          30.286740
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.091450,
          30.299341
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.106281,
          30.313506
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.118878,
          30.339645
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.161193,
          30.340026
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.179858,
          30.289839
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.188515,
          30.245833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "line": "4-6-6 Express",
        "url": "http://web.mta.info/nyct/service/",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates":[
          120.194695,
          30.228200
        ]
      }
    }
  ]
};



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

// if (!mapboxgl.supported()) {
//   alert("Your browser does not support Mapbox GL");
// } 
// else {

  /**
   * map configuration
   */
  const map = new mapboxgl.Map({
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
  });

  // if ("geolocation" in navigator) {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       map.flyTo({ center: [longitude, latitude], zoom: 14 });
  //     }
  //   );
  // }
// }