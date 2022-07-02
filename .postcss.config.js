module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 设置根元素字体大小
      propList: ['*'], // 可以从px更改到rem属性
      exclude: /node_modules/i, // 排除node_modules目录
      selectorBlackList: ['vant-'], // 过滤掉vant-开头的选择器
    },
  },
};
