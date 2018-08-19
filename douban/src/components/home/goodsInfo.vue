<template>
  <div class = "buyGoods">
    <Header :message = "titleInfo"></Header>
    <div class = "swiper">
      <swiper :options="swiperOption">
        <swiper-slide  class = "swiper-slide" data-swiper-parallax-opacity="0.5"  v-for="(item,key) in goodsImage">
            <img  class = "swiper-img" :src='item'>
        </swiper-slide>
      </swiper>

    </div>
    <div class = "goods-title">{{title}}</div>
    <div class = "goods-price"><p>￥</p>{{price}}</div>
    <div class = "goods-youfei">{{youfei}}</div>
    <div class = "baozheng">
      <div class = "baozheng-left">
        <ul>
          <li>
            <img src = "../../assets/image/gou.png">
            <p>72小时发货</p>
          </li>
          <li>
            <img src = "../../assets/image/gou.png">
            <p>7天无理由退货</p>
          </li>
          <li>
            <img src = "../../assets/image/gou.png">
            <p>退货补运费</p>
          </li>
        </ul>
      </div>
      <div class = "baozheng-right">

      </div>
    </div>
    <div class = "goods-guige">
      <h2 class="goods-guige-title">商品规格</h2>
      <div class = "goods-guige-table-contain">
      <table class="goods-guige-table">
        <tr><th style="width: 15%">组合</th><th style="width: 60%">颜色</th><th style="width: 15%">尺寸</th></tr>
        <tr><td style="width: 15%">组合一</td><td style="width: 60%">红黄蓝</td><td style="width: 15%">m</td></tr>
        <tr><td style="width: 15%">组合一</td><td style="width: 60%">红黄蓝</td><td style="width: 15%">m</td></tr>
        <tr><td style="width: 15%">组合一</td><td style="width: 60%">红黄蓝</td><td style="width: 15%">m</td></tr>
        <tr><td style="width: 15%">组合一</td><td style="width: 60%">红黄蓝</td><td style="width: 15%">m</td></tr>



      </table>
      </div>
    </div>
    <div class = "buyerSay">
      <div class = "headLine">
        <div class = "baozheng-leftt">
          <p>买家评价</p>
          <p>{{sayNum}}</p>
          <p>丨</p>
          <p>销量</p>
          <p>{{sealNum}}</p>
        </div>
      </div>
      <div class = "sayWorlds">
        <div class = "user">
          <img :src = "userImage">
        </div>
        <div class = "worlds">
          <div class = "userName">{{name}}</div>
          <div class = "userWorlds">{{worlds}}</div>
        </div>
      </div>
      <div class = "buyed-info">
        <p>{{time}}</p>
        <p>{{color}}</p>
        <p>{{chima}}</p>
      </div>
    </div>
    <div class = "shopInfo">
      <div class = "shop-img">
        <img :src = "shopImage">
      </div>
      <div class= "shopName">
        <div class = "shopTitle">{{shopTitle}}</div>
        <div class = "starts">
          <img src = "../../assets/image/start.png">
          <img src = "../../assets/image/start.png">
          <img src = "../../assets/image/start.png">
          <img src = "../../assets/image/start.png">
        </div>
      </div>
      <div class = "enterShop">
        进店逛逛
      </div>
    </div>
    <div class = "connectShop">
      <li>
        <p class = "ziti">{{Totalseal}}</p>
        <p>总销量</p>
      </li>
      <li class ="liwai">
        <p class = "ziti">{{shoucangNum}}</p>
        <p>收藏数</p>
      </li>
      <li >
        <div class = "oterDes">描述相符<p class = "redcolor">{{descrNum}}</p></div>
        <div class = "oterDes">质量满意<p class = "redcolor">{{zhiliangNum}}</p></div>
      </li>
    </div>
    <div class = "footer">
      <div class = "footone">
        <i class="icon iconfont icon-dianpu"></i>
        <p>小店</p>
      </div>
      <div class = "foottwo">
        <i class="icon iconfont icon-wodeshoucang"></i>
        <p>收藏</p>
      </div>
      <div  class = "footthree">加入购物车</div>
      <div class = "footfour" @click = "buyNow">立即购买</div>
    </div>

    <div class = "chooseList" v-if = "showChooseList">
      <div class = "List-header">
        <div class = "img-info">
          <img src = "https://img.alicdn.com/imgextra/TB1nqJndsuYBuNkSmRyL6UA3pXa_430x430q90.jpg">
        </div>
        <div class = "goods-info" v-for="(item,key) in goodsinfo" >
          <div class = "text-contain">
            <p style='font-size:20px;'>{{item.price}}</p>
            <p>库存：{{item.kucun}}</p>
            <p>请选择{{item.guige}}</p>
          </div>
          <img @click = "closeBuy" src = "../../assets/image/chacha.png">
        </div>
      </div>
      <div class ="guigeList">
        <li   v-for="(item,key) in guigeList">
          <div class = "guige-header">{{item.spec_name}}</div>
          <div class = "guigeInfo">
               <span  v-for="(item,key) in item.spec_val">{{item.spec_val_name}}</span>
          </div>
      </li>
    </div>
    <div class = "buy-number">
       <p>购买数量</p>
      <div class = "buybtton">
        <span style="width: 25%">-</span>
        <span style="width: 50%;border-left: 1px solid lightgrey;border-right: 1px solid lightgrey">{{buynum}}</span>
        <span style="width: 25%">+</span>
      </div>
    </div>
      <button  v-if = "gouwuche">确认</button>
      <router-link  class = "OKbuy" to  = '/dingdanXQ' v-if ="goumai">确认</router-link>
    </div>
  </div>




</template>

<script>
  import Header from 'components/common/head.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {

    data () {
      return{
        titleInfo:'商品详情',
        buynum:0,
        swiperOption: {
          effect : 'flip',
          direction:'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
          loop: true,  //无限滚动
          speed:300,//滑动速度
          centeredSlides: true,
          slidesPerView: "auto",
          zoom:true,
          parallax:true,
        },
        showChooseList:false,
        gouwuche:false,
        goumai:true,
        guigeList: [

          {
              spec_name:'组合',
            spec_val:[{
              spec_val_name:'红橙黄绿'
            },{
              spec_val_name:'黑红白紫'
            },{
              spec_val_name:'红蓝紫白'
            },{
              spec_val_name:'祈祷下雨'
            },{
              spec_val_name:'纯村促进的'
            }]

          },
          {
              spec_name:'尺码',
            spec_val:[{
              spec_val_name:'M'
            },{
              spec_val_name:'S'
            },{
              spec_val_name:'XL'
            },{
              spec_val_name:'XS'
            },{
              spec_val_name:'XXS'
            }]

          }

        ],
        goodsinfo:[{
          price:'￥69.30',
          kucun:'1056件',
          guige:'尺码 颜色'
        }],
        goodsImage: ["https://img.alicdn.com/imgextra/TB1nqJndsuYBuNkSmRyL6UA3pXa_430x430q90.jpg",
          "https://img.alicdn.com/imgextra/i8/TB1DlRbl_tYBeNjy1XdYXFXyVXa_M2.SS2_430x430q90.jpg",
          "https://img.alicdn.com/imgextra/i7/TB1cd4_dC8YBeNkSnb4YXGevFXa_M2.SS2_430x430q90.jpg"
        ],
        title:'妖精的口袋木耳边休闲短裤夏装2018新款宽松做旧荷叶边裤子女J',
        price:'69.00',
        youfei:'免邮费',
        sayNum:'10',
        sealNum:'129',
        userImage:'https://img.alicdn.com/bao/uploaded/TB2VKR.lH1YBuNjSszeXXablFXa_!!362409818-0-item_pic.jpg_250x250.jpg',
        worlds:"哇，这个短裤超级好看啊，真是买对了，以前觉得他家质量一般，现在这么不错呐，超级喜欢，下次再做活动准备入一条白色，168，110斤穿m，穿L估计会宽松一点，唔，吃胖了，喜欢喜欢",

        name: 'pmis***r',
        color:'颜色：薄荷绿',
        chima:'尺码：S',
        time:'2018-03-27',
        shopImage:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2115664439,4225334969&fm=58&s=AA023A666C6A77205843986E0300D07B&bpow=121&bpoh=75",
        shopTitle:"妖精的口袋旗舰店",
        Totalseal:'3530',
        shoucangNum:'485',
        descrNum:'4.8',
        zhiliangNum:'4.78',

      }
    },
    components: {
      swiper,
      swiperSlide,
      Header

    },
    methods:{
      buyNow:function(){
        this.showChooseList=!this.showChooseList;
         this.goumai=true;
         this.gouwuche=false;
      },
      closeBuy:function(){
        this.showChooseList=!this.showChooseList;
        this.goumai=false;
        this.gouwuche=true;
      },

    }

  }

</script>

<style scoped>
  ul,li{
    list-style: none;
  }

.buy-number{
  width: 94%;
  display: flex;
  flex-direction: row;
  padding :3%;
  margin-bottom: 20px;
  justify-content: space-between;
}
.buybtton{
  display: flex;
  flex-direction: row;
  border-radius: 2px;
  border: 1px lightgrey solid;
  height: 20px;
  width: 60px;
  text-align: center;
}
  .buyGoods{
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    padding-bottom: 75px;
    overflow-x: hidden;
    margin-top: 40px;
  }
  .goods-title{
    font-size: 15px;
    line-height: 20px;
    text-align: left;
    padding: 0 3%;
  }
  .goods-price{
    font-size: 25px;
    line-height: 40px;
    text-align: left;
    height: 40px;
    padding: 0 3%;
    display: flex;
    flex-direction: row;
  }
  .goods-price p{
    font-size: 15px;
    color: red;
  }
  .goods-youfei{
    width: 20%;
    height: 25px;
    font-size: 12.5px;
    color:grey;
    line-height: 25px;
    padding: 0 3%;
  }
  .baozheng{
    width: 100%;
    height: 35px;
    display: flex;
    align-items: left;
    justify-content: center;
    padding-left: 3%;
  }
  .baozheng-left{
    width: 100%;
    height: 100%;
    overflow: hiddeen;
  }
  .baozheng-left ul{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: left;
    justify-content: center;
  }
  .baozheng-left li{
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .baozheng-left li img{
    width: 15px;
    height: 15px;
  }
  .baozheng-left li p{
    font-size: 12.5px;
  }
  .buyerSay{
    width: 100%;
    background-color: white;
    padding-left: 3%;
  }
  .headLine{
    width: 100%;
    height: 35px;
    display: flex;
    align-items: left;
    justify-content: left;
  }
  .baozheng-leftt{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .baozheng-leftt p{
    font-size: 12.5px;
    color:grey;
    line-height: 35px;
  }
  .sayWorlds{
    width: 100%;
    height: 52.5px;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .sayWorlds .user{
    width:20%;
    height: 40px;
  }
  .sayWorlds .user img{
    width:40px;
    height: 100%;
    border-radius: 50%;
    display: inline-block;
    line-height: 75px;
  }
  .worlds{
    width: 70%;
    height: 100%;
  }
  .userName{
    width: 100%;
    height: 20px;
    font-size: 15px;
  }
  .userWorlds{
    margin-top: 10px;
    width: 100%;
    font-size: 15px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
  }
  .buyed-info{
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .buyed-info p{
    font-size: 12.5px;
    color: grey;
    margin-left: 5px;
  }
  .shopInfo{
    width: 100%;
    padding: 3% 3%;
    margin: 10px 0;
    background-color: white;
    display: flex;
    align-items: left;
    justify-content: left;
  }
  .shop-img{
    width: 15%;
    height: 50px;
    border: 1px grey solid;
  }
  .shop-img img{
    width: 100%;
    height: 100%;
  }
  .shopName{
    margin-left: 7.5px;
  }
  .shopTitle{
    width: 100%;
    height: 20px;
    font-size: 15px;
    line-height: 20px;
    text-align: left;
  }
  .starts{
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .starts img{
    width: 17.5px;
    height: 17.5px;
  }
  .enterShop{
    border: 1px red solid;
    text-align: center;
    height: 20px;
    font-size: 12.5px;
    color:red;
    margin-left: 56px;
    line-height: 20px;
  }
  .connectShop{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .connectShop li{
    width: 33%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    color: grey;
  }
  .connectShop .liwai{
    border-left: 1px grey solid;
    border-right: 1px grey solid;
  }
  .connectShop li p{
    font-size: 15px;
  }
  .oterDes{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
  }
  .ziti{
    color: black;
  }
  .redcolor{
    color: red;
    margin-left: 5px;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #ec2127;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .footone{
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: white;
    justify-content:center;
  }
  .footone i{
  font-size: 20px;
  }
  .footone p{
    font-size: 12.5px;
  }
  .foottwo i{
   font-size: 20px;
  }
  .foottwo p{
    font-size: 12.5px;
  }
  .foottwo{
    border-left: 1px whitesmoke solid;
    border-right: 1px whitesmoke solid;
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height: 100%;
    background-color: white;
  }

  .footthree{
    width: 34%;
    font-size: 15px;
    height: 100%;
    line-height: 50px;
    text-align:center;
    background-color:whitesmoke;
  }
  .footfour{
    width: 34%;
    font-size: 15px;
    height: 100%;
    line-height: 50px;
    text-align:center;
    background-color:#ec2127;
    color:white;
  }
  .chooseList{
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    background-color: white;
    z-index: 62;
  }
  .List-header{
    width: 100%;
    height: 75px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border-bottom: 1px whitesmoke  solid;
  }
  .img-info{
    position: absolute;
    bottom: 25px;
    left:12.5px;
    width: 25%;
    height: 100px;
  }
  .img-info img{
    width: 100%;
    height: 100%;
  }
  .goods-info{
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .text-contain{
    display: flex;
    flex-direction: column;
  }
  .text-contain p{
    font-size: 13px;
    text-align: left;
  }
  .goods-info img{
    display: block;
    width: 25px;
    height: 25px;
    margin-top: 7.5px;
    margin-right: 7.5px;
  }
  .guigeList{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 7.5px;
  }
  .guigeList li{
    width: 100%;
    padding-bottom: 10px;
  }
  .guige-header{
    width: 100%;
    font-size: 14px;
    color: grey;
    margin-left: 7.5px;
    text-align: left;
  }
  .guigeInfo{
    width: 100%;
    padding-top: 7.5px;
  }
.guigeInfo  span{
  font-size: 15px;
  padding: 2px 5px;
  border: 1px orangered solid;
  display: inline-block;
  color: orange;
  border-radius: 3px;
  margin: 3px 4px;
  height: 15px;
}
  .chooseList button{
    width: 100%;
    height: 50px;
    font-size: 17.5px;
    color: white;
    background-color: #ec2127;
    line-height: 50px;
    text-align-last: center;
    border-radius: 0;
    padding: 0;
    margin: 0;
  }
  .goods-guige{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .goods-guige-title{
    width: 100%;
    display: block;
    height: 20px;
    font-size: 18px;
    color: grey;
    padding: 2%;
  }
  .goods-guige-table-contain{
    width: 96%;
     margin: 2% auto;
  }
  .goods-guige-table{
    width: 100%;
    border: 1px solid white;
  }
  .goods-guige-table tr{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    color: grey;
    border-bottom: 1px solid white;
  }
  .goods-guige-table td{
    width: 10%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: black;
    vertical-align:middle;
    border-right:1px white solid ;
  }
  .OKbuy{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color:#ec2127;
    color: white;
    font-size: 14px;
    text-align: center;
    display: inline-block;
  }
  .swiper{
    margin: 10px auto;
    width :100%;
    height: 300px;
    overflow: hidden;
  }
  .swiper .swiper-slide{
    width :90%;
  }
  .swiper .swiper-slide img{
    display: block;
    margin: 0 auto;
    margin-top: 3.5%;
    width: 90.625%;
    height: 90.625%;
    vertical-align: middle;
    -webkit-transition: all 1s ease 0s;
    -moz-transition: all 1s ease 0s;
    -ms-transition: all 1s ease 0s;
    -o-transition: all 1s ease 0s;
    transition: all 1s ease 0s;
  }
</style>

