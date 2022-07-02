<template>
  <common-card
    title="累计销售额"
    value="￥ 32,039,165"
  >
<!--    card-->
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="money">7.33%</span>
          <div class="increase"/>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="money">41.28%</span>
          <div class="decrease"/>
        </div>
      </div>
    </template>
<!--    底部-->
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="money">￥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from "@/mixins/commonCardMixin";
  export default {
    mixins: [commonCardMixin]
  }
</script>

<style scoped>
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
</style>
