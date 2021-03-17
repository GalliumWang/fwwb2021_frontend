<template>
  <div class="rose2">
    <div id="main" style="width: 900px;height:600px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'rose2',
  methods: {
    myEcharts () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      setTimeout(function () {
        option = {
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: true
          },
          dataset: {
            source: [
              ['time', '一月', '二月', '三月', '四月', '五月', '六月', '七月'],
              ['20岁以下', 21819, 608, 5620, 14263, 26331, 29693, 27562],
              ['20-25岁', 128849, 5702, 61543, 150135, 208216, 226836, 126077],
              ['25-30岁', 81624, 7710, 65434, 143906, 183240, 194369, 83754],
              ['30-35岁', 46356, 4276, 36991, 80437, 107953, 120498, 54661],
              ['35-40岁', 26217, 2413, 17623, 40854, 57005, 63822, 31699],
              ['40-45岁', 15919, 1244, 7895, 19701, 27595, 31612, 17505],
              ['45-50岁', 17478, 1251, 9110, 18587, 27941, 33502, 17870],
              ['50-55岁', 7948, 473, 4025, 7983, 13331, 15866, 8227],
              ['55-60岁', 2906, 163, 1093, 3403, 5339, 6460, 2762],
              ['60岁以上', 1541, 118, 664, 1502, 2392, 2757, 1657]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              emphasis: {focus: 'data'},
              label: {
                formatter: '{b}: {@一月} ({d}%)'
              },
              encode: {
                itemName: 'time',
                value: '一月',
                tooltip: '一月'
              }
            }
          ]
        }

        myChart.on('updateAxisPointer', function (event) {
          var xAxisInfo = event.axesInfo[0]
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            })
          }
        })
        myChart.setOption(option)
      })
      option && myChart.setOption(option)
    }
  },
  mounted () {
    this.myEcharts()
  }
}
</script>

<style scoped>

</style>
