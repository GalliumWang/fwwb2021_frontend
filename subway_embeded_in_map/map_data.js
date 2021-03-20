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



district_data={
    "features": [
      {
        "properties": {
          "fill": "#bf4040",
          "fillOpacity": 0.33,
          "fill-opacity": 0.33,
          "fillColor": "#bf4040",
          "color": "#bf4040",
          "contour": 10,
          "opacity": 0.33,
          "metric": "time"
        },
        "geometry": {
          "coordinates": [
            [
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
          ],
          "type": "Polygon"
        },
        "type": "Feature"
      }
    ],
    "type": "FeatureCollection"
  }