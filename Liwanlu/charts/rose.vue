<template>
  <div class="rose">
    <div id="main" style="width: 900px;height:600px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Echarts',
  methods: {
    myEcharts () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        series: [
          {
            type: 'pie',
            radius: ['10%', '60%'],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              {value: 6970, name: '20岁以下'},
              {value: 34053, name: '20-25岁'},
              {value: 27333, name: '25-30岁'},
              {value: 20065, name: '30-35岁'},
              {value: 12913, name: '35-40岁'},
              {value: 7753, name: '40-45岁'},
              {value: 8233, name: '45-50岁'},
              {value: 4342, name: '50-55岁'},
              {value: 2076, name: '55-60岁'},
              {value: 1044, name: '60岁以上'}
            ],
            color: [
              /* 莫兰迪配色，低饱和度保障:) */
              '#ef476f',
              '#f78c6b',
              '#ffd166',
              '#06d6a0',
              '#118ab2',
              '#073b4c',
              '#ff1654',
              '#f3ffbd',
              '#b2dbbf',
              '#70c1b3'
            ]
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

<style>

</style>
