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
        "name": "G",
        "url": "http://web.mta.info/nyct/service/",
        "rt_symbol": "G",
        "objectid": "753",
        "id": "2000393",
        "shape_len": "2438.20024902"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -73.99487524803018,
            40.6802035460625
          ],
          [
            -73.99427469414127,
            40.68081016270495
          ],
          [
            -73.9942168049715,
            40.68088280879707
          ],
          [
            -73.9941660725898,
            40.68094977567929
          ],
          [
            -73.99411471677327,
            40.681016234616614
          ],
          [
            -73.9940635700395,
            40.68108477012707
          ],
          [
            -73.99401368539809,
            40.6811526149855
          ],
          [
            -73.99396235156854,
            40.68122105948818
          ],
          [
            -73.99391126703496,
            40.681291555351955
          ],
          [
            -73.99386095364044,
            40.68136199360065
          ],
          [
            -73.99381034674546,
            40.6814328424454
          ],
          [
            -73.99375975375001,
            40.68150569581264
          ],
          [
            -73.99370975453519,
            40.681577696402535
          ],
          [
            -73.99365946654771,
            40.68165011029012
          ],
          [
            -73.99360890506807,
            40.68172392984253
          ],
          [
            -73.99355835994191,
            40.68179873453544
          ],
          [
            -73.99350838602531,
            40.681873696827665
          ],
          [
            -73.99066967148987,
            40.6860692553028
          ]
        ]
      }
    }
  ]
};


//stop data
var stops = {
  "type": "FeatureCollection",
  "features": [    {
      "type": "Feature",
      "properties": {
        "name": "Astor Pl",
        "url": "http://web.mta.info/nyct/service/",
        "line": "4-6-6 Express",
        "objectid": "1",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.99106999861966,
          40.73005400028978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canal St",
        "url": "http://web.mta.info/nyct/service/",
        "line": "4-6-6 Express",
        "objectid": "2",
        "notes": "4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.00019299927328,
          40.71880300107709
        ]
      }
    }]

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

//TODO replace with my token
mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJhZGRhaWx5IiwiYSI6ImNqN21iam90ZzJ3MnEzM3F1anNkNWIydjMifQ.Dez6MhslaJs8ROSplWPSpQ";


const MAP_MARGIN=0.1


if (!mapboxgl.supported()) {
  alert("Your browser does not support Mapbox GL");
} 
else {
  /**
   * map configuration
   */
  const map = new mapboxgl.Map({
    container: "map", // id of the element to serve as map
    style: "mapbox://styles/mapbox/dark-v9",
    center: [ (maxBounds[0][0]+maxBounds[1][0])/2 , (maxBounds[0][1]+maxBounds[1][1])/2 ], // center of map
    zoom: 11, // 14 for stops display
    maxBounds: [
      [maxBounds[0][0] - MAP_MARGIN, maxBounds[0][1] - MAP_MARGIN],
      [maxBounds[1][0] + MAP_MARGIN, maxBounds[1][1] + MAP_MARGIN]
    ]
  });



  // TODO continue
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