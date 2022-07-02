<template>
  <div class="sale-header">
    <!--          导航菜单-->
    <Menu
      mode="horizontal"
      active-name="1"
      @on-select="onMenuClick"
    >
      <Menu-item name="1">销售额</Menu-item>
      <Menu-item name="2">访问量</Menu-item>
    </Menu>
    <div class="right">
      <!--          radio导航-->
      <Radio-group v-model="button" type="button" @on-change="radioClick">
        <Radio label="1">今日</Radio>
        <Radio label="2">本周</Radio>
        <Radio label="3">本月</Radio>
        <Radio label="4">今年</Radio>
      </Radio-group>
      <!--          日期排行榜-->
      <el-date-picker
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "SaleMenu",
    data() {
      return {
        // 日期
        radioBtn: ['1', '2', '3', '4'],
        button: '1',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      }
    },
    methods: {
      onMenuClick(e) {
        this.$emit('activeValue', e)
      },
      // 单选框按钮
      radioClick(e) {
        this.$emit('radioValue', e)
      }
    }
  }
</script>

<style scoped>
  .sale-header {
    display: flex;
    justify-content: space-between;
  }
  .right {
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
  }
  /*menu*/
  .ivu-menu-horizontal {
    height: 36px !important;
    line-height: 40px !important;
  }
  /*日期选择器*/
  .el-range-editor.el-input__inner {
    padding: 0 10px !important;
  }
  .el-input__inner {
    height: 33px !important;
  }
</style>
