<template>
  <common-card
    title="今日交易用户数"
    value="81,014"
  >
    <template>
      <div id="today-chart" :style="{width: '100%', height: '100%'}"/>
    </template>
    <!--    底部-->
    <template v-slot:footer>
      <span>退货率</span>
      <span class="money">5.14%</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from "@/mixins/commonCardMixin";
  export default {
    mixins: [commonCardMixin],
    mounted() {
      const chartDom = document.getElementById('today-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        color: ['#3398db'],
        xAxis: {
          type: 'category',
          data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
          show: false,
          barWidth: '60%'
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'bar',
          data: [410, 82, 200, 334, 390, 200, 364, 541, 365, 259, 150, 290]
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
