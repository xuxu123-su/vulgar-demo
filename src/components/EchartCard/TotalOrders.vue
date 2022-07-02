<template>
  <common-card
    title="累计订单量"
    value="2,157,420"
  >
    <template>
      <div id="order-chart" :style="{width: '100%', height: '100%'}"/>
    </template>
    <!--    底部-->
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="money">￥ 2,000,000</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from "@/mixins/commonCardMixin";
  export default {
    mixins: [commonCardMixin],
    mounted() {
      const chartDom = document.getElementById('order-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 562, 142, 533, 525, 456, 534, 977, 657, 358, 468],
          areaStyle: {
            color: 'purple',
          },
          lineStyle: {
            // 线条
            width: 0
          },
          itemStyle: {
            // 折线点
            opacity: 0
          },
          // 曲度
          smooth: true
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 15
        }
      })
    }
  }
</script>

<style scoped>

</style>
