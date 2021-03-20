function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }
  
function capture_screen(){ 
downloadURI(map.getCanvas().toDataURL(),'screen_capture.png'); 
}

function get_route_data(value){
    value=parseInt(value);
    var origin=JSON.parse(JSON.stringify(lineData));
    switch (value) {
        case -1:
            break;
        case 0:
            origin.features=[];
            break;
        default:
            origin.features=[origin.features[value-1],];
            break;
    }
    console.log(JSON.stringify(origin));
    return origin;
}

function get_district_data(value){
    value=parseInt(value);
    var origin=JSON.parse(JSON.stringify(district_data));
    switch (value) {
        case -1:
            break;
        case 0:
            origin.features=[];
            break;
        default:
            origin.features=[origin.features[value-1],];
            break;
    }
    return origin;
}

params.addEventListener('change', function (e) {
    if (e.target.name === 'route') {
        var value = e.target.value;
        var data=get_route_data(value);
        map.getSource('trips').setData(data);
    } 
    else if (e.target.name === 'district') {
        var value = e.target.value;
        var data=get_district_data(value);
        map.getSource('districtLayer').setData(data);
    }
});
