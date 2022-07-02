<template>
  <div class="bg">
    <van-overlay :show=show>
      <div class="wrapper">
<!--          左边-->
        <div>
          <img class="left-img" src="../../assets/img/left.png"/>
        </div>
<!--          右边-->
        <div class="right">
          <p class="right-td">Hello!</p>
          <p class="right-bd">欢迎来到Vulgar平台</p>
          <!--          账号-->
          <div class="wrapper_nav">
            <span class="wrapper_span">账号</span>
            <Input
              class="wrapper_input"
              type="text"
              placeholder="请填写账号"
              v-model="username"
              size="large"
            >
              <van-icon name="contact" color="#2bbac5" size="20" slot="prepend"></van-icon>
            </Input>
          </div>
          <!--          密码-->
          <div class="wrapper_nav">
            <span class="wrapper_span">密码</span>
            <Input
              class="wrapper_input"
              type="password"
              placeholder="请填写密码"
              v-model="password"
              size="large"
            >
              <van-icon name="eye-o" color="#2bbac5" size="20" slot="prepend"></van-icon>
            </Input>
          </div>
          <!--          验证码-->
          <div class="wrapper_nav">
            <span class="wrapper_span">验证码</span>
            <Input
              class="wrapper_inputs"
              placeholder="请填写验证码"
              v-model="verify"
              size="large"
            >
              <van-icon name="shield-o" color="#2bbac5" size="20" slot="prepend"></van-icon>
            </Input>
            <canvas id="canvas" @click="handleCanvas"></canvas>
          </div>
          <Button
            @click="onLogin"
            type="info"
            long
            @keyup.enter="onLogin"
          >登录</Button>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
  import {Toast} from "vant";

  export default {
    name: 'login',
    data() {
      return {
        show: true,
        username: '',
        password: '',
        verify: '',
        code_true: '', // 保存正确的验证码
        verify_arr: [], //用于传参并且数组长度不能多于下面验证码遍历的次数
      };
    },

    mounted() {
      this.draw(this.verify_arr);
      // 绑定监听事件
      window.addEventListener('keydown', this.keyDown)
    },

    methods: {
      // 验证码
      draw(show_num) {
        var canvas_width = document.querySelector("#canvas").clientWidth;
        var canvas_height = document.querySelector("#canvas").clientHeight;
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode =
          "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length // 获取到的数组长度
        // 4位验证码
        for(let i = 0; i <= 3; i++) {
          var j = Math.floor(Math.random() * aLength); // 获取随机索引值
          var deg = (Math.random() * 10 * Math.PI) / 180; // 产生0-30随机弧度
          var txt = aCode[j]; // 随机内容
          show_num[i] = txt.toLowerCase(); // 依次把取得的内容放到数组里面
          let x = 10 + i * 20; // 文字在canvas上的x坐标
          let y = 20 + Math.random() * 8; // 文字在canvas上的y坐标

          context.font = "bold 23px 微软雅黑";
          context.translate(x, y);
          context.rotate(deg);

          context.fillStyle = this.randomColor();
          context.fillText(txt, 0, 0);

          context.rotate(-deg);
          context.translate(-x, -y);
        }
        // 验证码上的线条
        for(let i = 0; i <= 4; i++) {
          context.strokeStyle = this.randomColor();
          context.beginPath();
          context.moveTo(
            Math.random() * canvas_width,
            Math.random() * canvas_height
          );
          context.stroke();
        }
        // 验证码显示小点
        for(let i = 0; i <= 30; i++) {
          context.strokeStyle = this.randomColor();
          context.beginPath();
          let x = Math.random() * canvas_width;
          let y = Math.random() * canvas_height;
          context.moveTo(x, y);
          context.lineTo(x + 1, y + 1);
          context.stroke();
        }
        // 把取得的验证码数组存起来
        console.log(show_num)
        var num = show_num.join("");
        this.code_true = num
      },
      // 得到随机颜色值
      randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
      },
      // canvas点击刷新
      handleCanvas() {
        this.draw(this.verify_arr)
      },
      // 登录
      onLogin() {
        console.log(this.verify_arr, this.verify, this.code_true)
        if(this.username === "" || this.password === "" || this.verify === "") {
          Toast("请填写账号、密码或验证码！")
        }else if(this.username === "admin" && this.password === "admin123" && this.verify === this.code_true) {
          Toast.success("登录成功！")
          this.$router.push("/home")
        }else {
          Toast("账号、密码或验证码错误！")
        }
      },
      // 回车登录
      keyDown(e) {
        if(e.keyCode === 13) {
          this.onLogin()
        }
      }
    },
    destroyed() {
      // 销毁事件
      window.removeEventListener('keydown', this.keyDown, false)
    }
  };
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100vh;
    background: url('https://clc-1253185145.cos.ap-guangzhou.myqcloud.com/clc/0503dec6-3e3f-40bb-9d22-9da325610fff.jpg') center center no-repeat space;
    background-size: cover;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    top: 50%;
    transform: translate(0, 25%);
  }
  .left-img {
    height: 600px;
  }
  /*animation: rotateImg 8s linear infinite;*/
  /*@keyframes rotateImg {*/
  /*  from {*/
  /*    transform: rotate(0deg);*/
  /*  }*/
  /*  to {*/
  /*    transform: rotate(360deg);*/
  /*  }*/
  /*}*/
  .right {
    height: 600px;
    background-color: #fff;
    padding: 20px;
  }
  .right-td {
    font-size: 40px;
    color: #587cc5;
    margin-top: 30px;
  }
  .right-bd {
    font-size: 26px;
    color: #587cc5;
    margin-bottom: 0.5rem;
  }
  .wrapper_nav {
    display: flex;
    margin-bottom: 30px;
  }
  .wrapper_span {
    width: 65px;
    margin: auto 0;
    color: #2bbac5
  }
  .wrapper_span::before {
    content: '*';
    color: red;
    margin-right: 5px;
  }
  .wrapper_input {
    width: 350px;
  }
  .wrapper_inputs {
    width: 210px;
  }
  /* 验证码 */
  #canvas {
    width: 120px;
    height: 32px;
    margin-left: 20px;
    background: #000;
    border-radius: 5px;
  }
</style>
