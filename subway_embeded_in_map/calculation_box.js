    
    
    var draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        }
    });

    function updateArea(e) {
        var data = draw.getAll();
        var answer = document.getElementById('calculated-area');
        if (data.features.length > 0) {
            var area = turf.area(data);
            // restrict to area to 2 decimal points
            var rounded_area = Math.round(area * 100) / 100;
            answer.innerHTML =
                '<p><strong>' +
                rounded_area +
                '</strong></p><p>square meters</p>';
        } else {
            answer.innerHTML = '';
            if (e.type !== 'draw.delete')
                alert('Use the draw tools to draw a polygon!');
        }
    }

