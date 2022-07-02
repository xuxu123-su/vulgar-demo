<template>
  <div>
    <v-chart :option="option" style="height: 200px"/>
  </div>
</template>

<script>
  export default {
    name: "VisitDay",
    data() {
      return {
        option: {
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
              data: [10, 82, 20, 34, 30, 20, 36, 54, 35, 29, 15, 29],
            }
          ],
          grid: {
            top: 0,
            bottom: 20,
            left: 50,
            right: 0
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
