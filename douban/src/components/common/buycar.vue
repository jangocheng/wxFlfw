<template>
  <div class = "buycarPage">
    <Header :message = "titleInfo"></Header>
    <div class = "otherFunction">
      <div class = "shoucang">
        <p>加入收藏夹</p>
      </div>
      <div class = "del">
        <p>删除</p>
      </div>
    </div>
<div class = "buycar">

  <!--//购物列表-->
  <div class = "buycar-list"  v-for="(item,key) in  cars">
    <div class = "shopLine">
      <div class = "cheakChild">
        <div class = "whenCheakch" v-if="item.Status"></div>
      </div>
      <div class = "shopInfo">
        <i class="icon iconfont icon-dianpu"></i>
        <p>{{item.shoptitle}}</p>
        <i class="icon iconfont icon-you"></i>
      </div>
    </div>
    <ul class = "goodIm">
    <li class = "buygoodsInfo" v-for="(item,key) in  item.buyGoods">
      <div class = "cheakChild" style="margin-top: 25px">
        <div class = "whenCheakch" v-if="item.Status"></div>
      </div>
      <img :src="item.src" alt="">

      <div class = "goodsInfo">
         <div class = "goodsTitle">{{item.title}}</div>
         <div class = "goodsGuige"  v-for="(item,key) in  item.guige">
           <span>{{item.title}}</span>
           <div class = "buybtton">
             <span style="width: 25%">-</span>
             <span style="width: 50%;border-left: 1px solid lightgrey;border-right: 1px solid lightgrey">{{item.num}}</span>
             <span style="width: 25%">+</span>
           </div>
         </div>
        <div class = "goodsCharge">
          <p>{{item.price}}</p>
          <i class="icon iconfont icon-shanchu"></i>
        </div>
      </div>

    </li>
    </ul>
  </div>
  <div class = "buycar-footer">
    <div class = "buycar-footer-left">
      <div class = "cheakAll">
        <div class = "whenCheak" v-if="selectAllStatus"></div>
      </div>
      <p>全选</p>
    </div>
    <div class = "buycar-footer-right">
      <p>合计：</p>
      <p style="margin-left: 3px;color: red">￥25.00</p>
      <button type="button" class="mui-btn">结算<span class="mui-badge">1</span></button>
    </div>
  </div>

  </div>
  </div>
</template>

<script>
  import Header from './head.vue'
  export default {
    data () {
      return{
          titleInfo:'购物车',
        selectAllStatus: true ,
         cars:[{
           Status:true,
            shoptitle:"BEAKBNO",
            buyGoods:[
              {
                Status:true,
                  src:'https://gd1.alicdn.com/imgextra/i1/670429260/TB2msiejYSYBuNjSspfXXcZCpXa_!!670429260.jpg_400x400.jpg_.webp',
                title:'BEALBNO自制穿上秒变小仙女春夏吊带雪纺性感羽毛连衣裙女',
                guige:[{
                  title:'组合一：M（黑白红）',
                  num:1

                }],
                price:'￥54.0',
              },
              {
                Status:true,
                src:'https://gd1.alicdn.com/imgextra/i1/670429260/TB2msiejYSYBuNjSspfXXcZCpXa_!!670429260.jpg_400x400.jpg_.webp',
                title:'BEALBNO自制穿上秒变小仙女春夏吊带雪纺性感羽毛连衣裙女',
                guige:[{
                    title:'组合一：M（黑白红）',
                  num:1

                },{
                  title:'组合一：M（黑白红）',
                  num:2

                },{
                  title:'组合一：M（黑白红）',
                  num:1
                }],
                price:'￥54.0',
              },
            ]

         },
           {
             Status:false,
             shoptitle:"BEAKBNO",
             buyGoods:[
               {
                 Status:false,
                 src:'https://gd1.alicdn.com/imgextra/i1/670429260/TB2msiejYSYBuNjSspfXXcZCpXa_!!670429260.jpg_400x400.jpg_.webp',
                 title:'BEALBNO自制穿上秒变小仙女春夏吊带雪纺性感羽毛连衣裙女',
                 guige:[{
                   title:'组合一：M（黑白红）',
                   num:1

                 },{
                   title:'组合一：M（黑白红）',
                   num:2

                 },{
                   title:'组合一：M（黑白红）',
                   num:1
                 }],
                 price:'￥54.0',
               }
             ]
           },

         ]

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
  .buycarPage{
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    margin-top: 40px;
  }
  .goodIm{
    width: 100%;
  }
  .otherFunction{
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 40px;
    top:50;
    left: 0;
    align-items: center;
  }
  .shoucang p{
    display: block;
    border: 1px solid orange;
    font-size: 12px;
    color: orange;
    padding: 1px 10px;
    border-radius: 12px;
  }
  .del{
    margin-right: 10px;
    margin-left: 10px;
  }
  .del p{
    display: block;
    border: 1px solid red;
    font-size: 12px;
    color: red;
    padding: 1px 10px;
    border-radius: 12px;
  }
  p{
    font-size: 12px;
    color: black;
  }
  .buycar{
    width: 94%;
    padding: 10px 3%;
    margin-bottom: 100px;
    background-color: whitesmoke;
  }
  .buycar-list{
    width: 94%;
    margin:10px 0;
    padding: 3%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  .shopLine{
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .icon-dianpu{
    font-size: 20px;
    margin-right: 10px;
  }
  .icon-you{
    font-size: 10px;
    margin-left: 10px;
    color: lightgrey;
  }
  .shopInfo{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .buygoodsInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .buygoodsInfo img{
    width: 78px;
    height: 80px;
  }
  .goodsInfo{
    width:61%;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
  .goodsTitle{
    font-size: 12px;
    font-family: "Microsoft YaHei UI";
    line-height: 14px;
    margin-bottom: 10px;
  }
  .goodsGuige{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .goodsGuige span{
    display: block;
    color:lightgrey;
    font-size: 5px;
    width: 90%;
    font-family: "Microsoft YaHei UI";
  }
  .goodsCharge{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
  }
  .goodsCharge p{
    display: block;
    color: red;
    font-size: 14px;
  }
  .buybtton{
    height: 20px;
    width:40%;
    display: flex;
    flex-direction: row;
    border-radius: 2px;
    border: 1px lightgrey solid;

  }
  .buybtton{
    display: flex;
    flex-direction: row;
    border-radius: 2px;
    border: 1px lightgrey solid;
    height: 20px;
    width: 60px;
  }
  .buybtton span{
    display: block;
    text-align: center;
    line-height: 20px;
    font-size: 11px;
    color: lightgrey;
  }

  .buycar-footer{
    width: 94%;
    height: 45px;
    background-color: white;
    padding: 5px 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position:fixed;
    left: 0;
    bottom: 50px;

  }
  .buycar-footer-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .cheakAll{
    width: 25px;
    height: 25px;
    border: 1px solid lightgrey;
    border-radius: 50%;
    position: relative;
    margin-right: 10px;
  }
  .cheakChild{
    width: 20px;
    height: 20px;
    border: 1px solid lightgrey;
    border-radius: 50%;
    display: flex;
    align-items: center;
   justify-content: center;
    margin-right: 10px;
  }
  .whenCheakch{
    width: 50%;
    height: 50%;
    background: -webkit-radial-gradient( red, whitesmoke);
    border-radius: 50%;
  }
  .whenCheak{
    width: 50%;
    height: 50%;
    background: -webkit-radial-gradient( red, whitesmoke);
    border-radius: 50%;
    position: absolute;
    left:25%;
    top:25%;
  }
  .buycar-footer-right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .mui-btn{
    background-color: red;
    border-radius: 30px;
    color: white;
    margin-left: 10px;
    padding: 4px 15px;
    margin-bottom: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
.mui-badge{
  background-color: white;
  color: red;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  line-height: 13px;
  display: block;
  margin-left: 5px;
}
</style>

