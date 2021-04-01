<template>
  <div class="calendar">
    <div id="main" style="width: 900px;height:600px;"></div>
    <div id="ll"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import bus from '@/store/index.js'
export default {
  name: 'calendar',
  data () {
    return {
      startDate: '2020-05',
      endDate: '2020-06'
    }
  },
  methods: {
    myEcharts () {
      var myChart = echarts.init(document.getElementById('main'))
      var thing = document.getElementById('ll')
      var cellSize = [100, 100] // 每一小格大小
      var pieRadius = 30 // 大小
      var self = this
      var json = [
        {'data': [{'name': '1号线', 'value': 1}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 2}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 3}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 4}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 5}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 6}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 7}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 8}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 9}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 10}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 11}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 12}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 13}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 14}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 15}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 16}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 17}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 18}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 19}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 20}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 21}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 22}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 23}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 24}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 25}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 26}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 27}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 28}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 29}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 30}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]},
        {'data': [{'name': '1号线', 'value': 31}, {'name': '2号线', 'value': 103}, {'name': '3号线', 'value': 56}]}
      ]
      var startDate = '2020-05'
      var endDate = '2020-06'
      var dataName = ['1号线', '2号线', '3号线'] // 该出应该是从数据库中读取
      var options = calendar(cellSize, pieRadius, startDate, endDate, json, dataName)
      myChart.setOption(options)
      myChart.on('click', function (params) {
        // 控制台打印数据的名称

        var rr = params.dataIndex + 1
        var yearMonth = startDate
        var day = params.seriesIndex
        if (day === 0) {
          day = rr
        }
        if (day < 10) {
          day = '0' + day
        }
        var yearMonthDay = yearMonth + '-' + day // 获取当前点击的年月日
        var status = params.name // 获取当前点击状态名称
        getThisClickData({'datetime': yearMonthDay, 'status': status})
      })
      function calendar (cellSize, pieRadius, startDate, endDate, json, dataName) {
        var dataArr = []

        for (var i = 0; i < json.length; i++) {
          dataArr.push(json[i].data)
        }

        function getVirtulData () {
          var date = +echarts.number.parseDate(startDate)
          var end = +echarts.number.parseDate(endDate)
          var dayTime = 3600 * 24 * 1000
          var data = []
          var count = []
          var j = 0
          for (var i = 0; i < dataArr.length; i += 1) {
            count[i] = (json[i].data[0].value + json[i].data[1].value + json[i].data[2].value)
          }
          for (var time = date; time < end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(count[j])
            ])
            j += 1
          }
          return data
        }
        function getPieSeries (scatterData, chart) {
          return echarts.util.map(scatterData, function (item, index) {
            var center = chart.convertToPixel('calendar', item)

            return {
              id: index + 'pie',
              type: 'pie',
              center: center,
              label: {
                normal: {
                  formatter: '{c}',
                  position: 'inside'
                }
              },
              radius: pieRadius,
              data: dataArr[index]
            }
          })
        }
        function getPieSeriesUpdate (scatterData, chart) {
          return echarts.util.map(scatterData, function (item, index) {
            var center = chart.convertToPixel('calendar', item)
            return {
              id: index + 'pie',
              center: center
            }
          })
        }

        var scatterData = getVirtulData()

        var option = {
          tooltip: {},
          legend: {
            data: dataName,
            bottom: 20
          },
          calendar: {
            top: 'middle',
            left: 'center',
            orient: 'vertical',
            cellSize: cellSize,
            yearLabel: {
              show: false,
              textStyle: {
                fontSize: 30
              }
            },
            dayLabel: {
              margin: 20,
              firstDay: 1,
              nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
            monthLabel: {
              show: false
            },
            range: [startDate]
          },
          series: [{
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0])
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                  color: '#000',
                  fontSize: 14
                }
              }
            },
            data: scatterData
          }]
        }

        if (!myChart.inNode) {
          var pieInitialized
          setTimeout(function () {
            pieInitialized = true
            myChart.setOption({
              series: getPieSeries(scatterData, myChart)
            })
          }, 10)

          myChart.onresize = function () {
            if (pieInitialized) {
              myChart.setOption({
                series: getPieSeriesUpdate(scatterData, myChart)
              })
            }
          }
        }
        return option
      }
      function getThisClickData (data) {
        thing.innerHTML = '<p>传入后台数据格式：{"datetime":' + data.datetime + ',"status":' + data.status + '}<p>向后台请求当前点击的数据</p>'
        bus.state.datetime = data.datetime
        bus.state.status = data.status
        if (data.datetime.search('-00') === -1) {
          self.$router.push({
            name: 'yy'
          })
        } else {
          bus.state.status = ''
          self.$router.push({
            name: 'yy'
          })
        }
      }
    }
  },
  mounted () {
    this.myEcharts()
  }
}
</script>

<style scoped>

</style>
