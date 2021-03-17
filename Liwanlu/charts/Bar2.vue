<template>
  <div class="bar2">
    <div id="main" style="width: 900px;height:600px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Bar2',
  methods: {
    myEcharts () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['近期存在消费', '近期无消费']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['20岁以下', '20-25岁', '25-30岁', '30-35岁', '35-40岁',
            '40-45岁', '45-50岁', '50-55岁', '55-60岁', '60岁以上']
        },
        series: [
          {
            name: '近期存在消费',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            color: '#b2dbbf',
            data: [4563, 24792, 18641, 13046, 8011, 4697, 4829, 2387, 1029, 477]
          },
          {
            name: '近期无消费',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            color: '#ef476f',
            data: [2407, 9520, 8692, 7019, 4902, 3056, 3404, 1955, 1047, 567]
          }
        ]
      }
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
