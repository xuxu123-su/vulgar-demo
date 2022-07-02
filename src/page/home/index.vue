<template>
  <div>
<!--    头部-->
    <top-assembly />
<!--    内容-->
    <div class="nav">
      <!--    导航组件-->
      <menu-assembly />
<!--      右部分-->
      <nav-assembly />
    </div>
  </div>
</template>

<script>
  import saleDay from "@/components/EchartSale/SaleDay.vue"
  // 头部组件
  import topAssembly from "@/components/common/topAssembly";
  // 导航组件
  import menuAssembly from "@/components/common/menuAssembly";
  // 展示条组件
  import Header from "@/components/common/Header";
  // 内容组件
  import navAssembly from "@/components/common/navAssembly";

  export default {
    name: 'home',
    components: {
      topAssembly,
      menuAssembly,
      Header,
      navAssembly,
      saleDay
    },
    data() {
      return {

      };
    },

    mounted() {

    },

    methods: {

    },
  };
</script>

<style scoped>
  /*展示*/
  .nav {
    width: 100%;
    display: flex;
  }
</style>
