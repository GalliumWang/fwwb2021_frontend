$('#lookup-station').click(function(){
    $('#station-lookup-panel').addClass('open');
  });
  
$('#station-lookup-panel .close').click(function(){
  $('#station-lookup-panel').removeClass('open');
});

$('#capture-screen').click(function(){
  $('#screen_capture').addClass('open');
  $('#capture_preview').attr("src",map.getCanvas().toDataURL());
});

$('#screen_capture .close').click(function(){
$('#screen_capture').removeClass('open');
});

$('#display-control').click(function(){
  $('#display-control-popup').addClass('open');
});

$('#display-control-popup .close').click(function(){
  $('#display-control-popup').removeClass('open');
  });


$('#download-capture').click(function(){
  downloadURI($('#capture_preview').attr("src"),'screen_capture.jpg');
});

var station_lookup_line_choose_panel=document.getElementById('station-lookup-line-choose-panel');
station_lookup_line_choose_panel.addEventListener('change', function (e) {
  // console.log(e.target.value);
  show_station_for_specific_route(e.target.value);
});


function show_station_for_specific_route(route_number){
  station_select_panel=document.getElementById("station-select-panel");
  station_select_panel.innerHTML=`<h4 id="station-lookup-line-choose-title" value="${route_number}" class="txt-m txt-bold mb6 mapbox-form-title">选择查看的站点</h4>`;

  station_num=route_total_info[route_number]["station_num"];

  var NUM_PER_ROW=0;

  if(station_num<=28){
    NUM_PER_ROW=7;
  }
  else{
    NUM_PER_ROW=11;
  }

  row_nums=parseInt(station_num/NUM_PER_ROW);

  for(var i=0;i<=row_nums;i++){
      var tempElementP = document.createElement('DIV');
      var tempStringP=`<div class="mb12 mr12 toggle-group align-center"></div>`;
      tempElementP.innerHTML=tempStringP;
      var elementP=tempElementP.lastChild;

    for(var j=1;j<=NUM_PER_ROW&&i*NUM_PER_ROW+j<=station_num;j++){
      var station_index=i*NUM_PER_ROW+j;
      var stationName=stationNames[route_number][station_index-1];
      var tempElement = document.createElement('DIV');
      var tempString=`<label class="toggle-container">
      <input name="station-select" type="radio" class="station-label" value="${station_index}" />
      <div class="toggle toggle--active-null toggle--null">${stationName}</div>
      </label>
      `;
      tempElement.innerHTML=tempString;
      elementP.appendChild(tempElement.firstChild);
    }

    station_select_panel.appendChild(elementP);

  }

$('.station-label').click(function(){
    var route_number=document.getElementById('station-lookup-line-choose-title').getAttribute("value");
    route_number=parseInt(route_number);
    var station_numer=this.value;

    // station_select_panel=document.getElementById("station-select-panel");
    // station_select_panel.innerHTML=`<h4 class="txt-m txt-bold mb6 mapbox-form-title">选择查看的站点</h4>`;
  

    $('#station-lookup-panel').removeClass('open');
    fly_to_station(route_number,station_numer);
});
}


function fly_to_station(route_number,station_numer){

      neLon=route_total_info[route_number]["station_location"][station_numer-1][0];
      neLat=route_total_info[route_number]["station_location"][station_numer-1][1];
      map.setZoom(14);
      fly_to(neLon,neLat);

      temp_mark_counter++;

      map.addSource(`temp_source_${temp_mark_counter}`, {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [neLon,neLat]
              }
            }
          ]
        }
      });
    
      map.addLayer({
        'id': `temp_mark_${temp_mark_counter}`,
        'type': 'symbol',
        'source': `temp_source_${temp_mark_counter}`,
        'layout': {
          'icon-image': 'sticker2',
          'icon-size': 0.1
        }
  
      });
    }

document.getElementById('station-lookup-default-route').click();
show_station_for_specific_route(1);