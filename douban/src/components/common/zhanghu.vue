<template>
  <!--pages/qiye/children/zjgl/zjgl.wxml-->
  <div class = "zjgl">
    <Header :message = "titleInfo"></Header>
    <!-- //头部 -->
    <div class = "zjgl-header">
      <p class = "one">余额账户（元）</p>
      <p class = "two">{{price}}</p>
    </div>
    <!-- //身体 -->
    <div class = "zjgl-body">
      <li>
        <div class = "zjgl-body-left">
          <i class="icon iconfont icon-chongzhi0101"></i>
          <p>充值</p>
        </div>
        <i class="icon iconfont icon-you"></i>

      </li>
      <li>
        <div class = "zjgl-body-left">
          <i class="icon iconfont icon-tixian"></i>
          <p>提现</p>
        </div>
        <i class="icon iconfont icon-you"></i>

      </li>
      <router-link to="/yinhangka">
      <li >
        <div class = "zjgl-body-left">
          <i class="icon iconfont icon-tubiaolunkuo-"></i>
          <p>银行卡</p>
        </div>
        <i class="icon iconfont icon-you"></i>
      </li>
      </router-link>
    </div>

  </div>

</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {
      return{
        titleInfo:'我的账户',
        price:"92566.00",
      }
    },
    components: {
      Header
    },
    methods:{

    }

  }

</script>

<style scoped>

  .zjgl{
    width: 100%;
    height: 100%;
    margin-top: 40px;
  }
  .zjgl-header{
    width: 94%;
    height: 75px;
    background-color: #ec2127;
    padding: 10px 3%;
    display: flex;
    flex-direction: column;
  }
  .zjgl-header .one{
    font-size: 15px;
    color: white;
  }
  .zjgl-header .two{
    font-size: 35px;
    color: white;
    line-height: 50px;
  }
  .zjgl-body{
    width: 100%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
  }
  .zjgl-body li{
    width: 96%;
    background-color: white;
    padding: 0 2%;
    border-bottom:1px whitesmoke solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
  }
  .zjgl-body-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .zjgl-body-left p{
    font-size: 15px;
    line-height: 40px;
    margin-left: 7.5px;
  }
  .zjgl-body-left i{
    font-size: 18px;
    line-height: 40px;
    color:#ec2127;
  }
 .icon-you{
    font-size: 14px;
    line-height: 40px;
    color:#ec2127;
  }

</style>

