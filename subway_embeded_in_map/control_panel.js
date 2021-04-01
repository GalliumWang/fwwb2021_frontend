function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
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

function set_route_display(element_id){
    var show_or_not=$(`#${element_id}`).prop("checked");
    var route_index = $(`#${element_id}`).prop("value");

    if(show_or_not){
        map.setLayoutProperty(`trips${route_index}`, 'visibility', 'visible');
        map.setLayoutProperty(`stations${route_index}`, 'visibility', 'visible');
        map.setLayoutProperty(`stations-label${route_index}`, 'visibility', 'visible');
    }
    else{
        map.setLayoutProperty(`trips${route_index}`, 'visibility', 'none');
        map.setLayoutProperty(`stations${route_index}`, 'visibility', 'none');
        map.setLayoutProperty(`stations-label${route_index}`, 'visibility', 'none');
    }
}

function set_district_display(element_id){
    var show_or_not=$(`#${element_id}`).prop("checked");
    var district_index = $(`#${element_id}`).prop("value");

    if(show_or_not){
        map.setLayoutProperty(`districtLayer${district_index}`, 'visibility', 'visible');
    }
    else{
        map.setLayoutProperty(`districtLayer${district_index}`, 'visibility', 'none');
    }
}


function set_board_display(element_id){
    var show_or_not=$(`#${element_id}`).prop("checked");

    if(element_id=="board-start-diaplay"){
        var board_category='board-points-layer';    
    }
    else{
        var board_category='board-points-end-layer';
    }

    if(show_or_not){
        map.setLayoutProperty(board_category, 'visibility', 'visible');
    }
    else{
        map.setLayoutProperty(board_category, 'visibility', 'none');
    }
}


params.addEventListener('change', function (e) {
    if (e.target.name === "route-display") {
        set_route_display(e.target.id);
    } 
    else if (e.target.name === 'district') {
        set_district_display(e.target.id);
    }
    else if(e.target.name === 'board-diaplay'){
        set_board_display(e.target.id);
    }

});
