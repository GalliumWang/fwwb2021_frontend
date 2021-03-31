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
lineData1.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);
lineData2.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);
lineData3.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);
lineData4.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);
lineData5.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);
lineData10.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);
lineData11.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);

lineData12.features.map(
  line => (linesMap[line.properties.name] = line.properties.rt_symbol)
);

//mapped color for each line
const colorStops = Object.keys(linesMap).map(key => [
  key,
  colorMap[linesMap[key]]
]);


var init_point=stops1.features[0].geometry.coordinates;

const maxBounds = stops1.features.reduce(
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


const MAP_SCALE=1.5
const MAP_MARGIN_HON=Math.abs(maxBounds[0][0]-maxBounds[1][0])*MAP_SCALE;
const MAP_MARGIN_VER=Math.abs(maxBounds[0][1]-maxBounds[1][1])*MAP_SCALE;


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
      id: "trips1",
      type: "line",
      source: {
        type: "geojson",
        data: lineData1
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
        id: "trips2",
        type: "line",
        source: {
          type: "geojson",
          data: lineData2
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
        id: "trips3",
        type: "line",
        source: {
          type: "geojson",
          data: lineData3
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
        id: "trips4",
        type: "line",
        source: {
          type: "geojson",
          data: lineData4
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
        id: "trips5",
        type: "line",
        source: {
          type: "geojson",
          data: lineData5
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
        id: "trips10",
        type: "line",
        source: {
          type: "geojson",
          data: lineData10
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
        id: "trips11",
        type: "line",
        source: {
          type: "geojson",
          data: lineData11
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
        id: "trips12",
        type: "line",
        source: {
          type: "geojson",
          data: lineData12
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
      id: "stations1",
      source: {
        type: "geojson",
        data: stops1
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
      id: "stations2",
      source: {
        type: "geojson",
        data: stops2
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
      id: "stations3",
      source: {
        type: "geojson",
        data: stops3
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
      id: "stations4",
      source: {
        type: "geojson",
        data: stops4
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
      id: "stations5",
      source: {
        type: "geojson",
        data: stops5
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
      id: "stations10",
      source: {
        type: "geojson",
        data: stops10
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
      id: "stations11",
      source: {
        type: "geojson",
        data: stops11
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
      id: "stations12",
      source: {
        type: "geojson",
        data: stops12
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


    // TODO:add labels
    // map.addLayer({
    //   id: "stations-label1",
    //   source: "stations",
    //   type: "symbol",
    //   paint: {
    //     "text-color": "white",
    //     "text-halo-color": "black",
    //     "text-halo-width": 1,
    //     "text-halo-blur": 4
    //   },
    //   layout: {
    //     "text-font": ["Open Sans Regular"],
    //     "text-field": "{name} ({line})",
    //     "text-size": {
    //       base: 12,
    //       stops: [[9, 0], [12, 0], [14, 12], [17, 20]]
    //     },
    //     "text-anchor": "right",
    //     "text-offset": [-1.5, 0]
    //   }
    // });

    map.addLayer(
      {
        'id': 'districtLayer1',
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


    map.addControl(new mapboxgl.NavigationControl());


    // add subway icon for use
    map.loadImage('./static/image/EXPERIENCE_JAPAN_PICTOGRAM/png/T_CHIKATETSU.png', function(error, image) {
      if (error) throw error;
      map.addImage('subway_icon', image);
    });

    map.loadImage('./static/image/sticker/1.png', function(error, image) {
      if (error) throw error;
      map.addImage('sticker1', image);
    });

    map.loadImage('./static/image/sticker/2.png', function(error, image) {
      if (error) throw error;
      map.addImage('sticker2', image);
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



function fly_to(neLon, neLat){
  map.flyTo({
    center: [neLon,neLat],essential: true
    });
}

setTimeout(function(){
  var elem = document.getElementsByClassName("mapboxgl-ctrl-bottom-right")[0];
  elem.remove();
},3000)

var temp_mark_counter=0;