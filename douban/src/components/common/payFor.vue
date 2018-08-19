<template>
  <div class = "payForm">
    <Header :message = "titleInfo"></Header>
    <div class = "payChoose">
      <li v-for="(item,key) in payCooseList" @click="choosened(item,key)">
        <div class = "listLeft">
          <img :src="item.src" alt="">
          <p>{{item.payStyle}}</p>
        </div>
        <div class = "chooseBtn">
          <img  src="../../assets/image/cheak.png" alt="" v-if="key==selected">
        </div>
      </li>
    </div>
    <div class = "payList-foot">
      <div class = "payList-foot-left">
        <p>支付：￥{{price}}<p>
        <div class = "clock">{{clockTime}}</div>
      </div>
      <button>付款</button>
    </div>
  </div>

</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {
      return{
        titleInfo:'收银台',
        price:69.02,
          selected:0,
        clockTime:'倒计时：12:00:00',
        payCooseList:[
            {
            src:require("../../assets/image/weixin.png"),
              payStyle:'微信支付'
        },
          {
            src:require("../../assets/image/zhifubao.png"),
            payStyle:'支付宝支付'
        },
          {
              src:require("../../assets/image/qq.png"),
            payStyle:'QQ钱包'

        },
          {
            src:require("../../assets/image/yinhangka.png"),
            payStyle:'银行卡支付'
        }
        ],

      }
    },
    components: {
      Header

    },
    methods: {
      choosened(item,key){
        this.selected=key;
      }

    }
  }

</script>

<style scoped>
  .payForm{
    width: 100%;
    margin-top: 40px;
  }
  ul,li{
    list-style: none;
  }
  .payChoose{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 5px;
  }
  .payChoose li{
    width: 94%;
    height: 30px;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3%;
    border-bottom: 1px solid whitesmoke;
  }
  .listLeft{
    display: flex;
    flex-direction: row;
    line-height: 30px;
    justify-content: flex-start;
  }
  .listLeft img{
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-top: 5px;
    margin-right: 5px;
  }
  .listLeft p{
    font-size: 13px;
  }
.chooseBtn{
  width: 18px;
  height: 18px;
  border: 1px solid lightgrey;
  border-radius: 50%;
  margin-top: 6px;
}

  .chooseBtn img{
    width: 100%;
    height: 100%;
margin-bottom: 5px;
  }
  .payList-foot{
    width: 100%;
    height: 50px;
    background-color: whitesmoke;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .payList-foot .payList-foot-left{
    display: flex;
    flex-direction: column;
  }
  .payList-foot-left {
    color: red;
    line-height: 25px;
    font-size: 14px;
    margin-left: 7.5px;
  }
  .payList-foot-left .clock{
    line-height: 35px;
    font-size: 14px;
    color: lightslategrey;
    line-height: 20px;
  }
  .payList-foot button{
    width: 70px;
    height: 35px;
    font-size: 15px;
    color: white;
    background-color: #ec2127 ;
    border-radius: 0;
    margin-top: 7.5px;
    margin-left: 0;
    margin-right: 10px;
  }


</style>
