<template>
  <div class="sankey">
    <div id="main" style="width: 2000px;height:900px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'sankey',
  methods: {
    myEcharts () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option
      option = {

        title: {
          text: '桑基图'
        },
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: {
          type: 'sankey',
          focusNodeAdjacency: 'allEdges',
          nodeWidth: 25,
          nodeGap: 1,
          itemStyle: {
            borderWidth: 0,
            borderColor: '#aaa'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.5,
            opacity: 0.2
          },
          data: [{
            'name': 'Sta1'
          },
          {
            'name': 'Sta2'
          },
          {
            'name': 'Sta3'
          },
          {
            'name': 'Sta4'
          },
          {
            'name': 'Sta5'
          },
          {
            'name': 'Sta6'
          },
          {
            'name': 'Sta7'
          },
          {
            'name': 'Sta8'
          },
          {
            'name': 'Sta9'
          },
          {
            'name': 'Sta10'
          },
          {
            'name': 'Sta11'
          },
          {
            'name': 'Sta12'
          },
          {
            'name': 'Sta13'
          },
          {
            'name': 'Sta14'
          },
          {
            'name': 'Sta15'
          },
          {
            'name': 'Sta16'
          },
          {
            'name': 'Sta17'
          },
          {
            'name': 'Sta18'
          },
          {
            'name': 'Sta19'
          },
          {
            'name': 'Sta20'
          },
          {
            'name': 'Sta21'
          },
          {
            'name': 'Sta22'
          },
          {
            'name': 'Sta23'
          },
          {
            'name': 'Sta24'
          },
          {
            'name': 'Sta25'
          },
          {
            'name': 'Sta26'
          },
          {
            'name': 'Sta27'
          },
          {
            'name': 'Sta28'
          },
          {
            'name': 'Sta29'
          },
          {
            'name': 'Sta30'
          },
          {
            'name': 'Sta31'
          },
          {
            'name': 'Sta32'
          },
          {
            'name': 'Sta33'
          },
          {
            'name': 'Sta34'
          },
          {
            'name': 'Sta35'
          },
          {
            'name': 'Sta36'
          },
          {
            'name': 'Sta37'
          },
          {
            'name': 'Sta38'
          },
          {
            'name': 'Sta39'
          },
          {
            'name': 'Sta40'
          },
          {
            'name': 'Sta41'
          },
          {
            'name': 'Sta42'
          },
          {
            'name': 'Sta43'
          },
          {
            'name': 'Sta44'
          },
          {
            'name': 'Sta45'
          },
          {
            'name': 'Sta46'
          },
          {
            'name': 'Sta47'
          },
          {
            'name': 'Sta48'
          },
          {
            'name': 'Sta49'
          },
          {
            'name': 'Sta50'
          },
          {
            'name': 'Sta51'
          },
          {
            'name': 'Sta52'
          },
          {
            'name': 'Sta53'
          },
          {
            'name': 'Sta54'
          },
          {
            'name': 'Sta55'
          },
          {
            'name': 'Sta56'
          },
          {
            'name': 'Sta57'
          },
          {
            'name': 'Sta58'
          },
          {
            'name': 'Sta59'
          },
          {
            'name': 'Sta60'
          },
          {
            'name': 'Sta61'
          },
          {
            'name': 'Sta62'
          },
          {
            'name': 'Sta63'
          },
          {
            'name': 'Sta64'
          },
          {
            'name': 'Sta65'
          },
          {
            'name': 'Sta66'
          },
          {
            'name': 'Sta67'
          },
          {
            'name': 'Sta68'
          },
          {
            'name': 'Sta69'
          },
          {
            'name': 'Sta70'
          },
          {
            'name': 'Sta71'
          },
          {
            'name': 'Sta72'
          },
          {
            'name': 'Sta73'
          },
          {
            'name': 'Sta74'
          },
          {
            'name': 'Sta75'
          },
          {
            'name': 'Sta76'
          },
          {
            'name': 'Sta77'
          },
          {
            'name': 'Sta78'
          },
          {
            'name': 'Sta79'
          },
          {
            'name': 'Sta80'
          },
          {
            'name': 'Sta81'
          },
          {
            'name': 'Sta82'
          },
          {
            'name': 'Sta83'
          },
          {
            'name': 'Sta84'
          },
          {
            'name': 'Sta85'
          },
          {
            'name': 'Sta86'
          },
          {
            'name': 'Sta87'
          },
          {
            'name': 'Sta88'
          },
          {
            'name': 'Sta89'
          },
          {
            'name': 'Sta90'
          },
          {
            'name': 'Sta91'
          },
          {
            'name': 'Sta92'
          },
          {
            'name': 'Sta93'
          },
          {
            'name': 'Sta94'
          },
          {
            'name': 'Sta95'
          },
          {
            'name': 'Sta96'
          },
          {
            'name': 'Sta97'
          },
          {
            'name': 'Sta98'
          },
          {
            'name': 'Sta99'
          },
          {
            'name': 'Sta100'
          },
          {
            'name': 'Sta101'
          },
          {
            'name': 'Sta102'
          },
          {
            'name': 'Sta103'
          },
          {
            'name': 'Sta104'
          },
          {
            'name': 'Sta105'
          },
          {
            'name': 'Sta106'
          },
          {
            'name': 'Sta107'
          },
          {
            'name': 'Sta108'
          },
          {
            'name': 'Sta109'
          },
          {
            'name': 'Sta110'
          },
          {
            'name': 'Sta111'
          },
          {
            'name': 'Sta112'
          },
          {
            'name': 'Sta113'
          },
          {
            'name': 'Sta114'
          },
          {
            'name': 'Sta115'
          },
          {
            'name': 'Sta116'
          },
          {
            'name': 'Sta117'
          },
          {
            'name': 'Sta118'
          },
          {
            'name': 'Sta119'
          },
          {
            'name': 'Sta120'
          },
          {
            'name': 'Sta121'
          },
          {
            'name': 'Sta122'
          },
          {
            'name': 'Sta123'
          },
          {
            'name': 'Sta124'
          },
          {
            'name': 'Sta125'
          },
          {
            'name': 'Sta126'
          },
          {
            'name': 'Sta127'
          },
          {
            'name': 'Sta128'
          },
          {
            'name': 'Sta129'
          },
          {
            'name': 'Sta130'
          },
          {
            'name': 'Sta131'
          },
          {
            'name': 'Sta132'
          },
          {
            'name': 'Sta133'
          },
          {
            'name': 'Sta134'
          },
          {
            'name': 'Sta135'
          },
          {
            'name': 'Sta136'
          },
          {
            'name': 'Sta137'
          },
          {
            'name': 'Sta138'
          },
          {
            'name': 'Sta139'
          },
          {
            'name': 'Sta140'
          },
          {
            'name': 'Sta141'
          },
          {
            'name': 'Sta142'
          },
          {
            'name': 'Sta143'
          },
          {
            'name': 'Sta144'
          },
          {
            'name': 'Sta145'
          },
          {
            'name': 'Sta146'
          },
          {
            'name': 'Sta147'
          },
          {
            'name': 'Sta148'
          },
          {
            'name': 'Sta149'
          },
          {
            'name': 'Sta150'
          },
          {
            'name': 'Sta151'
          },
          {
            'name': 'Sta152'
          },
          {
            'name': 'Sta153'
          },
          {
            'name': 'Sta154'
          },
          {
            'name': 'Sta155'
          },
          {
            'name': 'Sta156'
          },
          {
            'name': 'Sta157'
          },
          {
            'name': 'Sta158'
          },
          {
            'name': 'Sta159'
          },
          {
            'name': 'Sta160'
          },
          {
            'name': 'Sta161'
          },
          {
            'name': 'Sta162'
          },
          {
            'name': 'Sta163'
          },
          {
            'name': 'Sta164'
          },
          {
            'name': 'Sta165'
          },
          {
            'name': 'Sta166'
          },
          {
            'name': 'Sta167'
          },
          {
            'name': 'Sta168'
          },
          {
            'name': 'Dist1'
          },
          {
            'name': 'Dist2'
          },
          {
            'name': 'Dist3'
          },
          {
            'name': 'Dist4'
          },
          {
            'name': 'Dist5'
          },
          {
            'name': 'Dist6'
          },
          {
            'name': 'Dist7'
          },
          {
            'name': 'Dist8'
          },
          {
            'name': 'Dist10'
          },
          {
            'name': '1号线'
          },
          {
            'name': '2号线'
          },
          {
            'name': '3号线'
          },
          {
            'name': '4号线'
          },
          {
            'name': '5号线'
          },
          {
            'name': '10号线'
          },
          {
            'name': '11号线'
          },
          {
            'name': '12号线'
          }
          ],
          links: [{
            'source': 'Dist1',
            'target': 'Sta152',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta63',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta1',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta159',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta108',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta104',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta9',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta163',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta53',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta78',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta79',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta18',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta129',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta47',
            'value': 1
          },
          {
            'source': 'Dist1',
            'target': 'Sta126',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta60',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta148',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta73',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta14',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta83',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta107',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta123',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta127',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta81',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta27',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta48',
            'value': 1
          },
          {
            'source': 'Dist2',
            'target': 'Sta151',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta136',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta137',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta154',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta150',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta64',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta89',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta80',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta97',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta110',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta106',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta34',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta128',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta74',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta149',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta49',
            'value': 1
          },
          {
            'source': 'Dist3',
            'target': 'Sta65',
            'value': 1
          },
          {
            'source': 'Dist4',
            'target': 'Sta68',
            'value': 1
          },
          {
            'source': 'Dist4',
            'target': 'Sta52',
            'value': 1
          },
          {
            'source': 'Dist4',
            'target': 'Sta76',
            'value': 1
          },
          {
            'source': 'Dist4',
            'target': 'Sta57',
            'value': 1
          },
          {
            'source': 'Dist4',
            'target': 'Sta71',
            'value': 1
          },
          {
            'source': 'Dist4',
            'target': 'Sta105',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta134',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta75',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta168',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta85',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta2',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta4',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta103',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta145',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta88',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta94',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta160',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta7',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta6',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta8',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta102',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta114',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta135',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta162',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta118',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta20',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta55',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta70',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta13',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta140',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta82',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta164',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta45',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta23',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta56',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta115',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta111',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta26',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta90',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta95',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta139',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta40',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta131',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta39',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta100',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta167',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta113',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta141',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta142',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta158',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta44',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta117',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta147',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta42',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta35',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta109',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta33',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta112',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta153',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta125',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta121',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta11',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta84',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta43',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta10',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta96',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta132',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta37',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta16',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta69',
            'value': 1
          },
          {
            'source': 'Dist5',
            'target': 'Sta54',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta120',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta130',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta146',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta25',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta3',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta93',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta92',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta32',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta91',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta72',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta116',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta24',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta133',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta22',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta138',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta41',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta30',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta67',
            'value': 1
          },
          {
            'source': 'Dist6',
            'target': 'Sta144',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta51',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta143',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta156',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta61',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta50',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta119',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta66',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta12',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta161',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta21',
            'value': 1
          },
          {
            'source': 'Dist7',
            'target': 'Sta155',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta157',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta87',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta46',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta86',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta15',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta101',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta17',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta31',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta29',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta5',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta98',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta59',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta19',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta62',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta165',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta58',
            'value': 1
          },
          {
            'source': 'Dist8',
            'target': 'Sta38',
            'value': 1
          },
          {
            'source': 'Dist10',
            'target': 'Sta77',
            'value': 1
          },
          {
            'source': 'Dist10',
            'target': 'Sta122',
            'value': 1
          },
          {
            'source': 'Dist10',
            'target': 'Sta36',
            'value': 1
          },
          {
            'source': 'Dist10',
            'target': 'Sta166',
            'value': 1
          },
          {
            'source': 'Dist10',
            'target': 'Sta99',
            'value': 1
          },
          {
            'source': 'Dist10',
            'target': 'Sta124',
            'value': 1
          },
          {
            'source': 'Dist10',
            'target': 'Sta28',
            'value': 1
          },
          {
            'source': '1号线',
            'target': 'Dist1',
            'value': 4
          },
          {
            'source': '1号线',
            'target': 'Dist2',
            'value': 2
          },
          {
            'source': '1号线',
            'target': 'Dist3',
            'value': 14
          },
          {
            'source': '2号线',
            'target': 'Dist1',
            'value': 8
          },
          {
            'source': '2号线',
            'target': 'Dist2',
            'value': 6
          },
          {
            'source': '2号线',
            'target': 'Dist4',
            'value': 6
          },
          {
            'source': '2号线',
            'target': 'Dist5',
            'value': 1
          },
          {
            'source': '2号线',
            'target': 'Dist6',
            'value': 1
          },
          {
            'source': '2号线',
            'target': 'Dist7',
            'value': 1
          },
          {
            'source': '3号线',
            'target': 'Dist1',
            'value': 1
          },
          {
            'source': '3号线',
            'target': 'Dist5',
            'value': 21
          },
          {
            'source': '3号线',
            'target': 'Dist6',
            'value': 7
          },
          {
            'source': '3号线',
            'target': 'Dist7',
            'value': 10
          },
          {
            'source': '3号线',
            'target': 'Dist8',
            'value': 3
          },
          {
            'source': '4号线',
            'target': 'Dist5',
            'value': 1
          },
          {
            'source': '4号线',
            'target': 'Dist8',
            'value': 6
          },
          {
            'source': '5号线',
            'target': 'Dist5',
            'value': 8
          },
          {
            'source': '10号线',
            'target': 'Dist5',
            'value': 17
          },
          {
            'source': '10号线',
            'target': 'Dist8',
            'value': 2
          },
          {
            'source': '11号线',
            'target': 'Dist1',
            'value': 2
          },
          {
            'source': '11号线',
            'target': 'Dist5',
            'value': 14
          },
          {
            'source': '11号线',
            'target': 'Dist6',
            'value': 5
          },
          {
            'source': '11号线',
            'target': 'Dist8',
            'value': 3
          },
          {
            'source': '11号线',
            'target': 'Dist10',
            'value': 7
          },
          {
            'source': '12号线',
            'target': 'Dist2',
            'value': 4
          },
          {
            'source': '12号线',
            'target': 'Dist3',
            'value': 2
          },
          {
            'source': '12号线',
            'target': 'Dist5',
            'value': 3
          },
          {
            'source': '12号线',
            'target': 'Dist6',
            'value': 6
          },
          {
            'source': '12号线',
            'target': 'Dist8',
            'value': 3
          }
          ]
        }
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
