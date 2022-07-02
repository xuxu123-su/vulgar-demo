<template>
  <div class="nav-bd">
    <!--        右侧内容-->
    <div v-if="active == 1">
      <!--        报表管理-->
      <header name="chart-trending-o" span="报表管理"/>
      <echart-card />
      <echart-sale />
    </div>
    <!--        商品管理-->
    <div v-if="active == 2">
      <header name="shopping-cart-o" span="商品管理"/>
    </div>
    <!--        订单管理-->
    <div v-if="active == 3">
      <header name="balance-list-o" span="订单管理"/>
      333
    </div>
  </div>
</template>

<script>
  // 接收menu组件传值
  import eventBut from "../../assets/js/eventBut"
  // card组件
  import EchartCard from "@/components/Card/EchartCard"
  import EchartSale from "@/components/Card/EchartSale"
  export default {
    name: "navAssembly",
    components: {
      EchartCard,
      EchartSale
    },
    data() {
      return {
        active: 1,
      };
    },
    mounted() {
      eventBut.$on('sendBus', e => {
        this.active = e
      })
    }
  }
</script>

<style scoped>
  .nav-bd {
    width: 100%;
    margin: 0 10px;
  }
</style>
