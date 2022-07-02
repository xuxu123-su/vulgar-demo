<template>
  <div class="header">
    <div>
      <img width="240px" height="50px" src="~@/assets/img/logo.png"/>
    </div>
    <div class="active">
      <p>
        欢迎您，管理员
      </p>
      <span class="active_span">
          <van-icon name="contact" color="#fff" size="20"/>
        </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "topAssembly"
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .active {
    display: flex;
    height: 50px;
    line-height: 50px;
  }
  .active_span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #34bccd;
    text-align: center;
    line-height: 38px;
    margin: 9px 10px 0;
  }
</style>
