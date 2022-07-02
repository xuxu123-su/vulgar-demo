<template>
  <common-card
    title="累计用户数"
    value="1,087,503"
  >
    <template>
      <div id="user-chart" :style="{width: '100%', height: '100%'}"/>
    </template>
    <!--    底部-->
    <template v-slot:footer>
      <div class="total-footer">
        <span>日同比</span>
        <span class="money">8.73%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="money">35.91%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from "@/mixins/commonCardMixin";
  export default {
    mixins: [commonCardMixin],
    mounted() {
      const chartDom = document.getElementById('user-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 15
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 10,
            data: [750],
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            stack: 'total',
            data: [250],
            itemStyle: {
              color: '#3398db'
            }
          },
          {
            type: 'custom',
            stack: 'total',
            data: [750],
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z',
                      x: -5,
                      y: -15,
                      width: 10,
                      height: 10,
                    },
                    style: {
                      fill: 'red'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M131.974144 648.752128c-30.418944 30.430208-6.474752 84.301824 34.917376 84.301824L858.258432 733.053952c42.899456 0 65.325056-53.85216 34.916352-84.301824L547.487744 302.569472c-19.930112-19.974144-49.374208-19.95264-69.327872 0L131.974144 648.752128z',
                      x: -5,
                      y: 5,
                      width: 10,
                      height: 10,
                    },
                    style: {
                      fill: 'red'
                    }
                  },
                ],
              }
            }
          }
        ]
      })
    }
  }
</script>

<style scoped>
  .total-footer {
    display: flex;
    align-items: center;
  }
  .month {
    margin-left: 10px;
  }
</style>
