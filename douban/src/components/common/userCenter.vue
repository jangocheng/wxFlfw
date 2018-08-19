<template>
  <!--pages/userCenter/userCenter.wxml-->

  <div class = "userCenter">
    <Header :message = "titleInfo"></Header>
    <div class = "userheader">
      <div class = "userheader-top">
      <div class = "user-headimg">
        <img src = "https://img.alicdn.com/bao/uploaded/i1/188124207/TB2WL1ok1GSBuNjSspbXXciipXa_!!188124207-0-item_pic.jpg_b.jpg">
      </div>
      <div class = "user-info">
        <div class = "user-name">
          <div class = "userName">{{userName}}<i class="icon iconfont vip-ico icon-vip5"></i></div>
          <router-link to="/renzheng">
          <div  class ="user-renzheng">
            <i class="icon iconfont icon-yonghu"></i>
            {{renzheng}}
          </div>
            </router-link>
          <!-- <div class = "goRenzheng">
          <img src = "../../image/shouzhi.png">
              <p>去认证</p>
          </div> -->
        </div>
      </div>
      </div>
      <div class = "userheader-bottom">
        <div class = "userheader-bottom-contain">
          <p>14</p>
          <p>收藏夹</p>
        </div>
        <div class = "userheader-bottom-contain">
          <p>14</p>
          <p>关注店铺</p>
        </div>
        <div class = "userheader-bottom-contain">
          <p>14</p>
          <p>足迹</p>
        </div>
        <router-link to="/dizhi">
        <div class = "userheader-bottom-contain">
          <p>3</p>
          <p>地址</p>
        </div>
        </router-link>
      </div>
      <div class = "guanggao">
        <div class = "guanggao-left">
          <p>特大喜讯</p>
          <p>哈哈哈</p>
        </div>
        <div class = "guanggao-right">
            <!--<div class = "tuijian-header">　{{item.title}}-->
            <!--</div>-->
            <swiper class = "qiang" :options="swiperOptiont" ref = "myswiper">
              <swiper-slide class = "sliderslide" v-for="(item,key) in guanggao">
                <div class = "swiper-text">
                  <p style="font-size: 14px;color:gray">{{item.title}}</p>
                  <p style="font-size: 12px;color: #5e5e5e">{{item.titlet}}</p>
                </div>

                <img  class = "swiper-img" :src="item.src">
              </swiper-slide>
            </swiper>

        </div>
      </div>
    </div>
    <!-- //图标 -->
    <div class="userspan">
      <ul>
        <li >
          <div class = "tubiao">
            <i class="icon iconfont fenleiicon icon-daifukuan"></i>
          </div>
          <p class = "fenlei-text">待付款</p>
        </li>
        <li>
          <div class = "tubiao">
            <i class="icon iconfont fenleiicon icon-daifahuo"></i>
          </div>
          <p class = "fenlei-text">待收货</p>
        </li>
        <li>
          <div class = "tubiao">
            <i class="icon iconfont fenleiicon icon-daipingjia"></i>
          </div>
          <p class = "fenlei-text">待评价</p>
        </li>
        <li>
          <div class = "tubiao">
            <i class="icon iconfont fenleiicon icon-shouhou"></i>
          </div>
          <p class = "fenlei-text">售后</p>
        </li>
        <router-link to="/ddGl">
        <li >
          <div class = "tubiao"  >
            <i class="icon iconfont fenleiicon icon-quanbudingdan"></i>
          </div>
          <p class = "fenlei-text" >全部订单</p>
        </li>
        </router-link>
      </ul>
    </div>
    <!-- //其他 -->
    <div class = "other-function">
      <ul>
        <router-link to="/zhanghu">
        <li>
          <div class = "function-left">
            <i class="icon iconfont fenleiicon icon-chongzhi360"></i>
            <p>我的账户</p>
          </div>
          <div class = "function-right">
            <i class="icon iconfont icon-you"></i>
            <p></p>
          </div>
        </li>
        </router-link>
        <li>
          <div class = "function-left">
            <i class="icon iconfont fenleiicon icon-youhuiquan-01"></i>
            <p>优惠券</p>
          </div>
          <div class = "function-right">
            <i class="icon iconfont icon-you"></i>
            <p></p>
          </div>
        </li>
        <li>
          <div class = "function-left">
            <i class="icon iconfont fenleiicon icon-wodexiaoxi"></i>
            <p>我的消息</p>
          </div>
          <div class = "function-right">
            <i class="icon iconfont icon-you"></i>
            <p>和卖家沟通在这里</p>
          </div>
        </li>
        <li>
          <div class = "function-left">
            <i class="icon iconfont fenleiicon icon-bangzhu"></i>
            <p>客服与帮助</p>
          </div>
          <div class = "function-right">
            <i class="icon iconfont icon-you"></i>
            <p></p>
          </div>
        </li>
        <li>
          <div class = "function-left">
            <i class="icon iconfont fenleiicon icon-opinion"></i>
            <p>意见反馈</p>
          </div>
          <div class = "function-right">
            <i class="icon iconfont icon-you"></i>
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/shezhi">
    <div class = "footer">
      <img src = "../../assets/image/shezhi.png">
      <p>设置</p>
    </div>
    </router-link>
  </div>



</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Header from './head.vue'
  export default {
    data () {
      return{
          titleInfo:'个人中心',
        swiperOptiont: {
          observer:true,
          observeParents:true,
          direction:'vertical',
          speed:500,
          autoplay: true,
        },
        renzheng: '未实名认证点击认证',
        active:true,
        userName:"一直快乐的小青蛙",
        renzhengZT: ['已认证', '认证中等待审核', '未实名认证点击认证'],
        guanggao:[{
            title:"你妈妈",
            titlet:"你妈妈",
            src:require('../../assets/image/slidertwo.png'),
        },
          {
            title:"你大爷",
            titlet:"你妈妈",
            src:require('../../assets/image/sliderone.png'),
          },
          {
            title:"你儿子",
            titlet:"你妈妈",
            src:require('../../assets/image/sliderthree.png'),
          }]


      }
    },
    components: {
      swiper,
      swiperSlide,
      Header
    },
    methods: {

    }
  }

</script>

<style scoped>
  .userCenter{
    width: 100%;
    overflow-x: hidden;
    margin-bottom: 50px;
    margin-top: 40px;
  }

  .userheader{
    width: 94%;
    background-color: #ec2127;
    padding: 10px 3%;
    height: 130px;
    position: relative;
  }
  .guanggao{
    position: absolute;
    width: 90%;
    margin:10px 5%;
    height: 50px;
    border-radius: 12px;
    bottom: -40px;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: white;
    border: 1px solid #ec2127;
  }
  .guanggao-left{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid whitesmoke;
    margin-top: 6px;
  }
  .guanggao-right{
    width: 70%;
    display: flex;
    flex-direction: row;
   justify-content: flex-end;
  }
  .qiang{
    width: 100%;
    height: 100%;
  }
  .sliderslide{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .swiper-text{
      display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    height: 100%;
    margin-top: 6px;
  }
  .swiper-img{
    width: 60px;
    height: 35px;
    margin: 6px 8px;
    border-radius: 10px;
  }


  .vip-ico{
    font-size: 30px;
    color: grey;
  }
  .userheader-top{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .userheader-bottom{
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px auto;
    padding: 0 3%;
  }
  .userheader-bottom-contain{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .userheader-bottom-contain p{
    font-size: 12px;
    color:  lavenderblush;
  }
  .user-headimg{
    width: 50px;
    height: 50px;
    margin-top: 11px;
  }
  .user-headimg img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .user-info{
    float:left;
    width: 80%;
    padding-left: 5%;
    margin-top: 11px;
    overflow: hidden;
  }
  .user-name{
    width: 100%;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
  }
  .userName{
    float: left;
    font-size: 15px;
    line-height: 15px;
  }
  .user-name .user-renzheng{
    font-size:10px;
    line-height: 15px;
    box-shadow: 12.5px 15px 15px 2px #ec2127 inset;
    color: lavenderblush;
    border-radius: 12.5px;
    padding-right: 5px;
    margin-top: 10px;
    width: 140px;
  }
  .icon-yonghu{
    font-size: 15px;
    line-height: 15px;
    margin-right: 2.5px;
  }


  .icon-you{
    font-size: 12.5px;
    line-height: 20px;
    color: #ec2127;
  }
  .userspan{
    width: 100%;
    background-color: whitesmoke;
    overflow: hidden;
    margin-top: 40px;
  }
  .userspan ul{
    width: 100%;
  }
  .userspan li{
    width: 20%;
    float: left;
    background-color: white;
    padding:7.5px 0;
  }

  .tubiao{
    width: 100%;
    height: 25px;
    float: left;
    text-align: center;
  }
  .fenleiicon{
    font-size: 20px;
  }
  .fenlei-text{
    width: 100%;
    height: 15px;
    float: left;
    font-size: 12.5px;
    text-align: center;
  }
  .other-function{
    background-color: whitesmoke;
    padding: 7.5px 0;
    overflow: hidden;
  }
  .other-function ul{
    width: 100%;
  }
  .other-function ul li{
    width: 100%;
    height: 40px;
    overflow: hidden;
  }
  .function-left{
    float: left;
    width: 40%;
    background-color: white;
    border-bottom: 2px whitesmoke solid;
  }
  .function-left p{
    margin-left: 10px;
    font-size: 16px;
    line-height: 40px;
  }
  .function-left i{
    float: left;
    line-height: 40px;
    color: #ec2127;
    font-size: 19px;
    margin-left: 10px;
    margin-right: 5px;
  }

  .function-right{
    float: right;
    width: 60%;
    background-color: white;
    line-height: 40px;
    border-bottom: 2px whitesmoke solid;
  }
  .function-right p{
    float: right;
    line-height: 40px;
    font-size: 12.5px;
    color: grey;
    margin-right: 12.5px;
  }
  .function-right i{
    float: right;
    line-height: 40px;
    color: grey;
    margin-right: 10px;
  }
  .footer{
    width: 100%;
    height: 40px;
    background-color:#ec2127;
    display: flex;
    flex-direction: row;
  }
  .footer img{
    width: 25px;
    height: 25px;
    margin-top: 5px;
    margin-left: 7.5px;
    margin-right:7.5px;
  }
  .footer p{
    line-height:40px;
    font-size: 15px;
  }

</style>
