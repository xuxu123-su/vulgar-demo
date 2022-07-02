<template>
  <div class="sale">
<!--    第二行组件-->
    <Card>
      <sale-menu @radioValue="radioValue" @activeValue="activeValue"/>
      <div class="ranking">
<!--        销售额组件-->
        <sale-day v-if="dataActive == 1 && active == 1"/>
        <sale-week v-if="dataActive == 2 && active == 1"/>
        <sale-month v-if="dataActive == 3 && active == 1"/>
        <sale-year v-if="dataActive == 4 && active == 1"/>
<!--        访问量组件-->
        <visit-day v-if="dataActive == 1 && active == 2"/>
        <visit-week v-if="dataActive == 2 && active == 2"/>
        <visit-month v-if="dataActive == 3 && active == 2"/>
        <visit-year v-if="dataActive == 4 && active == 2"/>
      </div>
    </Card>
  </div>
</template>

<script>
  // 切换栏
  import SaleMenu from "@/components/EchartSale/SaleMenu";
  // echart销售额组件
  import SaleDay from "@/components/EchartSale/SaleDay"
  import SaleWeek from "@/components/EchartSale/SaleWeek"
  import SaleMonth from "@/components/EchartSale/SaleMonth"
  import SaleYear from "@/components/EchartSale/SaleYear"
  // echart访问量组件
  import VisitDay from "@/components/EchartSale/VisitDay"
  import VisitWeek from "@/components/EchartSale/VisitWeek"
  import VisitMonth from "@/components/EchartSale/VisitMonth"
  import VisitYear from "@/components/EchartSale/VisitYear"

  export default {
    name: "index",
    components: {
      SaleMenu,
      SaleDay,
      SaleWeek,
      SaleMonth,
      SaleYear,
      VisitDay,
      VisitWeek,
      VisitMonth,
      VisitYear,
    },
    data() {
      return {
        active: 1,
        dataActive: 1,
      }
    },
    methods: {
      activeValue(e){
        this.active = e
      },
      radioValue(e) {
        this.dataActive = e
      }
    }
  }
</script>

<style scoped>
  .sale {
    margin: 20px 0;
  }

  .ranking {
    width: 62vw;
  }
</style>
