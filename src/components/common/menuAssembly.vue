<template>
  <Menu
    :theme="theme"
    active-name="1"
    class="menu"
    @on-select="menuSelect"
  >
    <Menu-item  name="1">
      <van-icon name="chart-trending-o" />
      报表管理
    </Menu-item >
    <Menu-item name="2">
      <Icon type="ios-cart-outline"></Icon>
      商品管理
    </Menu-item>
    <Menu-item  name="3">
      <van-icon name="balance-list-o" />
      订单管理
    </Menu-item >
    <Submenu name="4">
      <template slot="title">
        <van-icon name="friends-o" />
        用户管理
      </template>
      <Menu-item name="3-1">圆形</Menu-item>
      <Menu-item name="3-2">方形</Menu-item>
    </Submenu>
  </Menu>
</template>

<script>
  // 传值给nav组件
  import eventBut from "../../assets/js/eventBut"
  export default {
    name: "menuAssembly",
    data() {
      return {
        theme: 'dark',
      }
    },
    methods: {
      menuSelect(e) {
        eventBut.$emit('sendBus', e)
      }
    },
  }
</script>

<style scoped>
  .menu {
    min-width: 240px;
    height: calc(100vh - 60px);
    background-color: #363e4f;
  }
</style>
