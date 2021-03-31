// lineData & stops come from geojson files
// downloaded from NYC's Open Data project.
var lineGeoData1=[
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
  ]
];
var lineGeoData2=[[120.199997,30.263419],[120.212932,30.251752],[120.204452,30.236589],[120.243618,30.239397],[120.219903,30.261921],[120.214441,30.281758],[120.214082,30.292798],[120.215879,30.309698],[120.208189,30.331302],[120.189001,30.344019],[120.176371,30.347929],[120.1588,30.351607],[120.144086,30.354396],[120.12073,30.360006],[120.090332,30.364618],[120.071791,30.382502],[120.060401,30.387767],[120.042794,30.398171],[120.019869,30.411938],[119.996442,30.43162],[119.967552,30.419725]];
var lineGeoData3=[[120.191373,30.307625],[120.18548,30.301514],[120.177216,30.293095],[120.16773,30.286047],[120.162196,30.282117],[120.162196,30.274632],[120.165789,30.271638],[120.176569,30.266585],[120.186558,30.260409],[120.190008,30.252111],[120.185265,30.244998],[120.181887,30.239444],[120.18045,30.235263],[120.180737,30.228648],[120.188786,30.225278],[120.195541,30.227837],[120.206033,30.231581],[120.21861,30.185733],[120.252386,30.23155],[120.262878,30.216072],[120.259572,30.203713],[120.21958,30.189104],[120.210669,30.194723],[120.205494,30.196097],[120.19802,30.19335],[120.19184,30.19335],[120.180198,30.191227],[120.158208,30.187106],[120.153752,30.17899],[120.158639,30.170372],[120.169275,30.169123],[120.177467,30.16675],[120.187959,30.169248],[120.198308,30.166875],[120.217568,30.16138],[120.223029,30.148514],[120.225185,30.135521],[120.225616,30.1269],[120.229928,30.115655],[120.212537,30.107407],[120.194283,30.107282]];
var lineGeoData4=[
  [
    120.176524,
    30.192542
  ],
  [
   120.211486,
   30.208898
  ],
  [
    120.230745,
    30.219103
  ],
  [
    120.238866,
    30.229276
  ],
  [
    120.239153,
    30.229307
  ],
  [
    120.243286,
    30.239261
  ],
  [
    120.250328,
    30.247217
  ]
];

var lineGeoData5=[[120.187205,30.136084],[120.191768,30.143611],[120.213399,30.161755],[120.237078,30.189823],[120.237186,30.18976],[120.226963,30.193382],[120.224197,30.205742],[120.224197,30.205742]]
var lineGeoData10=[
  [
    120.223774,30.20612
  ]
  ,
  [
     120.218744,30.187891
   ]
   ,
   [
     120.217882,30.182334
   ],[
     120.209761,30.181585
   ],[
     120.197041,30.182834
   ],[
     120.189136,30.183083
   ],[
     120.174404,30.183583
   ],[
     120.17426,30.17353
   ],[
     120.178572,30.165225
   ],[
     120.181734,30.16435
   ],[
     120.184968,30.163788
   ],[
     120.184968,30.163788
   ],[
     120.190142,30.161915
   ],[
     120.187555,30.154982
   ],[
     120.188489,30.149923
   ],[
     120.194885,30.152484
   ],[
     120.200993,30.155794
   ],[
     120.206527,30.159854
   ],[
     120.206527,30.159854
   ]
];
var lineGeoData11=[
  // dist10  7-stations
  [
      120.130134,30.182387
  ],
  [
      120.142638,30.17708
  ],
  [
      120.155789,30.183636
  ],
  [
      120.166425,30.187507
  ],
  [
      120.175193,30.19119
  ],
  [
      120.17972,30.186883
  ],
  [
      120.181445,30.176393
  ],
  //dist5  11-stations
  [
      120.180151,30.169275
  ],
  [
      120.180439,30.159783
  ],
  [
      120.180008,30.147043
  ],
  [
      120.190787,30.142171
  ],
  [
      120.208322,30.152539
  ],
  [
      120.227438,30.16428
  ],
  [
      120.23908,30.154288
  ],
  [
      120.248854,30.149666
  ],
  [
      120.246698,30.124805
  ],
  [
      120.225426,30.11231
  ],
  [
      120.195818,30.094939
  ],
  // dist8  3-stations
  [
      120.175624,30.062001
  ],
  [
      120.165894,30.113621
  ],
  [
      120.113389,30.11937
  ],
  // dist1  1-stations
  [
      120.093925,30.148857
  ],
  // dist6  5-stations
  [
      120.084931,30.159846
  ],
  [
      120.09413,30.16709
  ],
  [
      120.102178,30.176331
  ],
  [
      120.103903,30.165341
  ],
  [
      120.098154,30.155349
  ],
  // dist1  1-station
  [
      120.101029,30.144357
  ],
  // dist5  1-station
  [
      120.124025,30.136612
  ]
];

var lineGeoData12=[
  // dist2  4-stations
  [
      120.169156,30.351003
  ],
  [
      120.133511,30.357484
  ],
  [
      120.067971,30.353994
  ],
  [
      120.033476,30.343772
  ],

  // dist6  4-stations
  [
      120.034626,30.31335
  ],
  [
      120.080906,30.293895
  ],
  [
      120.14501,30.269445
  ],
  [
      120.175768,30.235755
  ],

  // dist8  1-stations
  [
      120.196177,30.227892
  ],

  // dist6  2-stations
  [
      120.188128,30.225146
  ],
  [
      120.173755,30.21516
  ],

  // dist5  3-stations
  [
      120.180654,30.199431
  ],
  [
      120.196608,30.181701
  ],
  [
      120.203651,30.203675
  ],

  // dist8  2-stations
  [
      120.238433,30.229639
  ],
  [
      120.286726,30.266825
  ],

  // dist3  2-stations
  [
      120.288882,30.312976
  ],
  [
      120.309292,30.3606
  ]
];

var lineDataTemplate={
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
        ]
      }
    }
  ]
};


function lineDataFactory(name,symbol,geoData){
  var template=JSON.parse(JSON.stringify(lineDataTemplate));
  template.features[0].geometry.coordinates=JSON.parse(JSON.stringify(geoData));
  template.features[0].properties.name=name;
  template.features[0].properties.rt_symbol=symbol;
  return template;
}

var lineData1=lineDataFactory("1","1",lineGeoData1);
var lineData2=lineDataFactory("2","4",lineGeoData2);
var lineData3=lineDataFactory("3","7",lineGeoData3);
var lineData4=lineDataFactory("4","A",lineGeoData4);
var lineData5=lineDataFactory("5","B",lineGeoData5);
var lineData10=lineDataFactory("10","G",lineGeoData10);
var lineData11=lineDataFactory("11","J",lineGeoData11);
var lineData12=lineDataFactory("12","L",lineGeoData12);
  

  var stopsTemplate={
    "type": "FeatureCollection",
    "features": []
  };
  var stopTemplate={
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
      "coordinates":[]
    }
  }

  function stopsFactory(geoData){
    var stopsObj=JSON.parse(JSON.stringify(stopsTemplate));
    for(corData of geoData){
      stopObj=JSON.parse(JSON.stringify(stopTemplate));
      stopObj.geometry.coordinates=corData;
      stopsObj.features.push(stopObj)
    }
    return stopsObj;
  }

  var stops1=stopsFactory(lineGeoData1);

  //stop data
  var stopsX = {
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
                120.186821,
                30.177019
                ],
                [
                120.077044,
                30.165170
                ],
                [
                120.029270,
                30.276740
                ],
                [
                120.108878,
                30.329645
                ],
                [
                120.151193,
                30.330026
                ],
                [
                120.186821,
                30.167019
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

  //TODO

  route_total_info={
    1:{
      "station_num":20,
      "station_location":[
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
        ]
      ]
    },
    2:{
      "station_num":23
    },
    3:{
      "station_num":42
    },
    4:{
      "station_num":7
    },
    5:{
      "station_num":8
    },
    10:{
      "station_num":19
    },
    11:{
      "station_num":31
    },
    12:{
      "station_num":18
    }
  }