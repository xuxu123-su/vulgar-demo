<template>
  <div id="bar" style="height: 200px"></div>
</template>

<script>
export default {
  name: "saleMonth",
  data() {
    return {
    }
  },

  mounted() {
    const charts = document.getElementById('bar')
    const chart = this.$echarts.init(charts)
    chart.setOption({
      color: ['#baa0f8'],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          data: [410, 82, 200, 334, 390, 200, 364, 541, 365, 259, 150, 290],
        }
      ],
      grid: {
        top: 0,
        bottom: 20,
        left: 50,
        right: 0
      }
    })
  }
}
</script>

<style scoped>

</style>
