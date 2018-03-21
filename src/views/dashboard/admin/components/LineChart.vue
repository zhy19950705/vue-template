<template>
    <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts';
  require('echarts/theme/macarons');
  import {debounce} from '@/utils';
  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '350px'
      },
      autoResize: {
        type: Boolean,
        default: true
      },
      chartData: {
        type: Object
      }
    },
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.initChart();
      if (this.autoResize) {
        // debugger;
        this.__resizeHanlder = debounce(() => {
          if (this.chart) {
            this.chart.resize();
          }
        }, 100);
        window.addEventListener('resize', this.__resizeHanlder);
      }
    },
    watch: {
      chartData: {
        deep: true
      }
    },
    methods: {
      setOptions({expectedData, actualData} = {}) {
        this.chart.setOption({
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          yAxis: {
            name: '真真',
            axisLabel: {
              formatter: function(value) {
                if (value === 0) {
                  return value;
                } else {
                  return value + '个真真';
                }
              }
            }
          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10],
            formatter: function(params) {
              return params[0].marker + params[0].seriesName + ':' + params[0].data + '<br/>' +
                params[1].marker + params[1].seriesName + ':' + params[1].data;
            }
          },
          legend: {
            // data: ['expected', 'actual']
          },
          series: [{
            name: 'expected',
            itemStyle: {

            },
            type: 'line',
            data: expectedData
          },
          {
            name: 'actual',
            type: 'line',
            data: actualData
          }]
        });
      },
      initChart() {
        // debugger
        this.chart = echarts.init(this.$el, 'macarons');
        this.setOptions(this.chartData);
      }
    }
  };
</script>

<style scoped>

</style>
