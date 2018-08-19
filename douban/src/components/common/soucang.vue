<template>
  <!--pages/pipei/pipei.wxml-->

  <div class = "pipei">
    <!-- //头部 -->
    <Header :message = "titleInfo"></Header>
    <div class = "pipei-header">
      <ul class = "tabbar">
        <li v-for="(item,key) in title" @click="son(item,key)" :class="key==selected?'active':''">{{item}}</li>
      </ul>
    </div>

    <!-- //收藏的宝贝 -->
    <div class = "pipei-contain-baobei" v-if="selected==0">
      <div class = "baobei-tabar">
        <li v-for="(item,key) in titleT" @click="sont(item,key)" :class="key==selectedt?'baobeiActive':'baobei-all'">{{item}}</li>
      </div>
      <ul class = "baobeiGoods" v-if = "selectedt==0">
        <li v-for="(item,key) in baobeiGoods" >
          <div class = "baobeiGoods-img">
            <img :src = "item.src">
          </div>
          <div class = "baobeiGoods-info">
            <div class = "baobeiGoods-title">{{item.title}}</div>
            <div class = "baobeiGoods-price">{{item.price}}</div>
          </div>
        </li>
      </ul>
      <div class = "lowshow" v-if ="selectedt==1">

        <p>亲~ 你还没有收藏商品哦</p>
      </div>

    </div>
    <!-- //收藏的店铺-->
    <div class = "pipei-contain-dianpu" v-if="selected==1">
      <ul class = "dianpu-contain">
        <li  v-for="(item,key) in dianpulist"  >
          <div class = "dianpulist-head">
            <div class = "dianpulist-head-img">
              <img :src = "item.dianpuimg">
            </div>
            <div class = "dianpulist-head-contain">
              <div class = "dianpulist-head-title">{{item.dianpuName}}</div>
              <div class = "dianpulist-head-text">{{item.dianpuText}}</div>
            </div>
          </div>
          <div class = "dianpulist-contain">
            <swiper class='scroll'  :options="swiperOption" ref = "myswiper">
              <swiper-slide class='dianpulist-goods' v-for="(item,key) in item.dianpuGoods">
                <img  class='dianpulist-imgCover' :src='item.src'>
              </swiper-slide>
            </swiper>
          </div>
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Header from './head.vue'
  export default {
    data () {
      return{
          titleInfo:'我的收藏',
        swiperOption: {
          observer:true,
          observeParents:true,
          spaceBetween:2,
          direction:'horizontal',
          speed:500,//滑动速度
          slidesPerView : 3,
        },
        selected:0,
        selectedt:0,
        title:['宝贝','店铺'],
        titleT:['全部','低库存'],
        baobeiGoods:[
          {
            src:"https://img.alicdn.com/bao/uploaded/i2/2264201946/TB1zRBpdY1YBuNjSszeXXablFXa_!!0-item_pic.jpg_b.jpg",
            title:"LRUD短袖T恤女2018夏装新款韩版百搭休闲打底衫宽松学生半袖上衣",
            price: "¥ 49.00"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i4/2265724160/TB1uyMBXljTBKNjSZFwXXcG4XXa_!!0-item_pic.jpg_b.jpg",
            title: "短袖t恤女夏装2018新款宽松韩版圆领条纹半袖体恤潮流女装上衣服",
            price: "¥ 59.00"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i4/912836044/TB2n9DLj41YBuNjy1zcXXbNcXXa_!!912836044-0-item_pic.jpg_b.jpg",
            title: "夏季上衣宽松韩版怪味少女印花复古港味红色ins短袖t恤女2018新款",
            price: "¥ 65.00"
          },
          {
            src: "",
            title: "",
            price: ""
          },

        ],
        dianpulist:[
          {
            dianpuimg:"https://img.alicdn.com/bao/uploaded/dc/11/TB1qGOFkfBNTKJjSszeSuwu2VXa.jpg_80x80.jpg",
            dianpuName:"七格格官方旗舰店",
            dianpuText:"销量 1　收藏 3",
            dianpuGoods: [
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/394695430/TB1pjslg7CWBuNjy0FaXXXUlXXa_!!0-item_pic.jpg_220x220.jpg" },
              { src: "https://img.alicdn.com/bao/uploaded/i2/394695430/TB1O8yOX.R1BeNjy0FmXXb0wVXa_!!0-item_pic.jpg_220x220.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i1/394695430/TB1RkkllhSYBuNjSspjXXX73VXa_!!0-item_pic.jpg_220x220.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i1/394695430/TB1AKX_mvDH8KJjy1XcXXcpdXXa_!!0-item_pic.jpg_220x220.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i3/394695430/TB1g5MVbOOYBuNjSsD4XXbSkFXa_!!0-item_pic.jpg_220x220.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i2/394695430/TB1SBF1X5jQBKNjSZFnXXa_DpXa_!!0-item_pic.jpg_220x220.jpg" }
            ]

          },
          {
            dianpuimg: "https://img.alicdn.com/bao/uploaded/2c/93/TB12Ga5cmYH8KJjSspdSuwRgVXa.jpg_80x80.jpg",
            dianpuName: "哥芭诗旗舰店",
            dianpuText: "销量 10　收藏 5",
            dianpuGoods: [
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/3440406238/TB2gMuIgVGWBuNjy0FbXXb4sXXa_!!3440406238.jpg_220x220.jpg"
              },
              { src: "https://img.alicdn.com/bao/uploaded/i3/3440406238/TB2t7pEcnmWBKNjSZFBXXXxUFXa_!!3440406238.jpg_220x220.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i2/3440406238/TB29sAkhnlYBeNjSszcXXbwhFXa_!!3440406238.jpg_220x220.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i4/3440406238/TB2gT8Gb2iSBuNkSnhJXXbDcpXa_!!3440406238.jpg_220x220.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i3/3440406238/TB2KTX6gN9YBuNjy0FfXXXIsVXa_!!3440406238.jpg_220x220.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i3/3440406238/TB2wqzAaOMnBKNjSZFoXXbOSFXa_!!3440406238.jpg_220x220.jpg" }
            ]

          },
          {
            dianpuimg: "https://gdp.alicdn.com/imgextra/i1/3896764926/TB2EooxnHSYBuNjSspfXXcZCpXa_!!3896764926.jpg",
            dianpuName: "森林鸟旗舰店",
            dianpuText: "销量 20　收藏 15",
            dianpuGoods: [
              {
                src: "https://img.alicdn.com/bao/uploaded/i2/3896764926/TB2cL3GdS8YBeNkSnb4XXaevFXa_!!3896764926-0-item_pic.jpg_180x180.jpg"
              },
              { src: "https://img.alicdn.com/bao/uploaded/i1/3896764926/TB2LghPmkSWBuNjSszdXXbeSpXa_!!3896764926-0-item_pic.jpg_180x180.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i3/3896764926/TB27eLXdviSBuNkSnhJXXbDcpXa_!!3896764926-0-item_pic.jpg_180x180.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i3/3896764926/TB2n.xAl9tYBeNjSspkXXbU8VXa_!!3896764926-0-item_pic.jpg_180x180.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i3/3896764926/TB2pdz3l7KWBuNjy1zjXXcOypXa_!!3896764926-0-item_pic.jpg_180x180.jpg" }
              ,
              { src: "https://img.alicdn.com/bao/uploaded/i1/3896764926/TB2q282lVuWBuNjSspnXXX1NVXa_!!3896764926-0-item_pic.jpg_180x180.jpg" }
            ]

          }
        ]
      }
    },
    methods: {
      son(item,key){
        this.selected=key;
      },
      sont(item,key){
        this.selectedt=key;
      }

    },
    components: {
      Header,
      swiper,
      swiperSlide,

    },
  }

</script>

<style scoped>
ul,li{
  list-style: none;
}
  .pipei{
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    margin-top: 40px;
  }

  .pipei-header{
    width: 90%;
    overflow: hidden;
    padding: 0 5%;

  }
  .pipei-header .tabbar{
    width: 100%;
    height: 50px;
  }
  .tabbar li{
    float: left;
    width: 50%;
    height: 100%;
    font-size: 15px;
    text-align: center;
    line-height: 50px;
  }
  .active{
    border-bottom: 1px red solid;
    color: red;
  }
  .pipei-contain-baobei{
    width: 90%;
    padding: 0 5%;
    margin-top: 10px;
  }
  .pipei-contain-dianpu{
    width: 100%;
    margin-top: 10px;
  }
  .dianpu-contain{
    width: 100%;
    overflow: hidden;
  }
  .dianpu-contain li{
    width: 100%;
    padding: 3% 5%;
    float: left;
  }
  .dianpulist-head{
    width: 90%;
    height: 40px;
    margin-bottom: 5px;
  }
  .dianpulist-head-img{
    width: 40px;
    height: 40px;
    float: left;
  }
  .dianpulist-head-img img{
    width: 80%;
    border-radius: 50%;
    height: 80%;
    margin-top: 10%;
  }
  .dianpulist-head-contain{
    margin-left: 10px;
    float: left;
    width: 70%;
    height: 40px;
  }
  .dianpulist-head-contain{
    margin-left: 10px;
    float: left;
    width: 70%;
    height: 40px;
  }
  .dianpulist-head-title{
    width: 100%;
    height: 50%;
    font-size: 17.5px;
  }
  .dianpulist-head-text{
    width: 100%;
    height: 50%;
    font-size: 12.5px;
    line-height: 20px;
    color: lightgrey;
  }
  .dianpulist-contain{
    width: 100%;
    white-space: nowrap;
  }
  .dianpulist-goods{
    display: inline-block;
    position: relative;
    height: 100px;
    width: 30%;
    padding: 5px 5px;
  }
  .dianpulist-goods .dianpulist-imgCover{
    width: 100%;
    height: 96%;
    border-radius: 2%;
  }
  .baobei-tabar{
    width: 50%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .baobei-all{
   padding: 1px 2px;
    border: 1px grey solid;
    text-align: center;
    line-height: 20px;
    color: grey;
    font-size: 15px;
    height: 20px;
  }
  .baobeiActive{
    height: 20px;
    padding: 1px 2px;
    text-align: center;
    line-height: 20px;
    font-size: 15px;
    border: 1px red solid;
    color: red;
    transform: ;
  }
  .baobeiGoods{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .baobeiGoods li{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .baobeiGoods-img{
    width: 30%;
    height: 90%;
  }
  .baobeiGoods-img img{
    width: 100%;
    height: 100%;
  }
  .baobeiGoods-info{
   display: flex;
    flex-direction: column;
    width: 65%;
  }

  .baobeiGoods-title{
    font-size: 15px;
  }
  .baobeiGoods-price{
    font-size: 15px;
    height: 10%;
    margin-top: 5px;
    color: red;
  }
  .lowshow{
    width: 100%;
  }
{
    margin-left: 25%;
    font-size: 15px;
    color:grey;
    text-align: center;
  }



</style>
