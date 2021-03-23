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

$('#download-capture').click(function(){
  downloadURI($('#capture_preview').attr("src"),'screen_capture.jpg');
});
