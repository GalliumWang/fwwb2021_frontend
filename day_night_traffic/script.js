var data = [
      { y: '1月', a: 50, b: 90},
      { y: '2月', a: 65,  b: 75},
      { y: '3月', a: 50,  b: 50},
      { y: '4月', a: 75,  b: 60},
      { y: '5月', a: 80,  b: 65},
      { y: '6月', a: 90,  b: 70},
      { y: '7月', a: 100, b: 75},
      { y: '8月', a: 115, b: 75},
      { y: '9月', a: 120, b: 85},
      { y: '10月', a: 145, b: 85},
      { y: '11月', a: 160, b: 95},
      { y: '12月', a: 41, b: 88}
    ],
  config = {
      data: data,
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['早高峰流量', '晚高峰流量'],
      fillOpacity: 0.6,
      // hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['red','gray'],
      parseTime: false
  };


config.element = 'chart';
Morris.Area(config);

// config.element = 'line-chart';
// Morris.Line(config);
// config.element = 'bar-chart';
// Morris.Bar(config);
// config.element = 'stacked';
// config.stacked = true;
// Morris.Bar(config);

function attr_sum(data,attr){
  var sum=0;
  for(record of data){
    sum+=record[attr];
  }
  console.log(sum);
  return sum;
}

Morris.Donut({
  element: 'pie-chart',
  data: [
    {label: "早高峰", value: attr_sum(data,"a")},
    {label: "晚高峰", value: attr_sum(data,"b")}
  ]
});