<template>
  <div class="title">
    <van-icon
      :name="name"
      color="#000"
      size="24"
      style="margin: 0 10px"
    />
    <span class="title-span">{{span}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      span: String,
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .title {
    background-color: #fff;
    padding: 10px 0 6px;
    margin-bottom: 15px;
  }
  .title-span {
    font-size: 16px;
  }
</style>
