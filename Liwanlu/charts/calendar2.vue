<template>
  <div class="calendar2">
    <div id="main" style="width: 900px;height:600px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import bus from '@/store/index.js'
export default {
  name: 'calendar2',
  data () {
    return {
      datetime: '',
      status: ''
    }
  },
  methods: {
    myEcharts () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option
      var xData = (function () {
        var data = []
        for (var i = 1; i < 25; i++) {
          data.push(i + ':00')
        }
        return data
      }())
      console.log(this.status)
      if (this.status === '') {
        this.status = this.status
      } else {
        this.status = ` | ` + this.status
      }

      option = {
        backgroundColor: '#1A1835',
        title: {
          show: true,
          text: this.datetime + this.status,
          textStyle: {
            color: '#FFFFFF'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff'
            }
          }
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          x: '46%',
          top: '11%',
          textStyle: {
            color: '#90979c'
          },
          data: ['进站人数', '出站人数'] // 线路内总人数
        },

        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(204,187,225,0.5)'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: xData
        }],

        yAxis: [{
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(204,187,225,0.5)'
            }
          }
        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 30,
          'start': 10,
          'end': 80,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#5B3AAE'
          },
          textStyle: {
            color: 'rgba(204,187,225,0.5)'
          },
          fillerColor: 'rgba(67,55,160,0.4)',
          borderColor: 'rgba(204,187,225,0.5)'
        }, {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: [{
          name: '进站人数',
          type: 'line',
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            color: '#6f7de3'
          },
          markPoint: {
            label: {
              normal: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            data: [{
              type: 'max',
              name: '最大值'

            }, {
              type: 'min',
              name: '最小值'
            }]
          },
          data: [
            509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117, 2000, 1455, 1210, 719,
            733, 944, 2285, 2208, 3372, 3936, 3693, 2962, 2810
          ]
        }, {
          name: '出站人数',
          type: 'line',
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            color: '#c257F6'
          },
          markPoint: {
            label: {
              normal: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            data: [{
              type: 'max',
              name: '最大值'

            }, {
              type: 'min',
              name: '最小值'
            }]
          },
          data: [
            2136, 3693, 2962, 3810, 3519, 3484, 3915, 3823, 3455, 4310, 4019, 3433, 3544, 3885, 4208, 3372,
            3484, 3915, 3748, 3675, 4009, 4433, 3544, 3285, 4208
          ]
        }]
      }
      option && myChart.setOption(option)
    }
  },
  mounted () {
    this.myEcharts()
  },
  created () {
    this.datetime = bus.state.datetime
    this.status = bus.state.status
  }
}
</script>

<style scoped>

</style>
