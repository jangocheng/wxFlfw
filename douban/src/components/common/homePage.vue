<template>

  <div id="homePage" >
    <div class = "header">
      <mt-search
        autofocus
        class="serch-input"
        v-model="value"
        :result="filterResult">
      </mt-search>
    </div>
    <!-- //轮播图 -->

    <div id="WBAQPage" class="WBAQPage">
      <carousel :slides="slides" :inv="invTime"></carousel>
    </div>

    <div class = "fenlei">
      <ul class = "fenlei-contain">
        <div class = "fenlei-header"><img  src = "../../assets/image/fenlei.png">商品分类</div>
        <router-link to="/fenlei">
        <li v-for="(item,key) in SPspan" >
          <div class = "tubiao">
            <img :src = "item.src">
          </div>
          <div class = "fenlei-text">{{item.title}}</div>
        </li>
        </router-link>
      </ul>
    </div>

    <div class = "tuijian"  v-for="(item,key) in tuijianPL">

      <div v-if = "item.count">
        <div class = "tuijian-header">　{{item.title}}
        </div>
        <swiper class = "qiang" :options="swiperOption" ref = "myswiper">
          <swiper-slide class = "sliderslide" v-for="(item,key) in item.tuijiangoods">
            <img  class = "swiper-img" :src="item.src">
          </swiper-slide>
        </swiper>
      </div>
      <div v-if = "!item.count">
        <div class = "tuijian-header">　{{item.title}}
        </div>
        <swiper class = "qiang" :options="swiperOptiont" ref = "myswiper">
          <swiper-slide class = "sliderslide" v-for="(item,key) in item.tuijiangoods">
            <img  class = "swiper-img" :src="item.src">
          </swiper-slide>
        </swiper>
      </div>

    </div>
  <!--//店铺推荐待开发-->
    <div class = "newgoods">
      <div class = "newgoods-header"><img src = "../../assets/image/fenlei.png">最新单品</div>
      <goodList :message="goodsList"></goodList>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import goodList from './goodsList.vue'
  import Carousel from './Carousel.vue'



  export default {
  data () {
      return{
        value: '',
        swiperOption: {
          observer:true,
          observeParents:true,
          spaceBetween:2,
          direction:'horizontal',
          speed:300,//滑动速度
          autoplay: true,
          slidesPerView: 3,//一行显示3个
          slidesPerColumn: 2,//显示2行
          slidesPerColumnFill : 'row',
          slidesOffsetAfter : 10,
          qiehuanNum:0,
        },
        swiperOptiont: {
          observer:true,
          observeParents:true,
          spaceBetween:2,
          direction:'horizontal',
          speed:500,//滑动速度
          autoplay: true,
          slidesPerView : 3,
        },
        invTime: 2000,
        goodsList: [
          {
            Image: "https://img.alicdn.com/bao/uploaded/TB1Zk86nx1YBuNjy1zcSuvNcXXa.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i4/1766047907/TB2.QG4e1uSBuNjy1XcXXcYjFXa_!!1766047907-0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 85",
            conut: "销量： 10",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i1/1710396780/TB188Z1cNSYBuNjSspjXXX73VXa_!!0-item_pic.jpg_b.jpg",
            Ph: "白色t恤女宽松bf风ins超火的上衣短袖",
            price: "￥ 69",
            conut: "销量： 2000",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i4/1039181416/TB2C8wngTJYBeNjy1zeXXahzVXa_!!1039181416-0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i1/1644880265/TB1_TwNg.R1BeNjy0FmXXb0wVXa_!!0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i4/2076799937/TB14JEPf29TBuNjy1zbXXXpepXa_!!0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i2/912836044/TB1ZWWej7CWBuNjy0FaXXXUlXXa_!!0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i3/272205633/TB12vjRd5OYBuNjSsD4XXbSkFXa_!!0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",

          },

        ],
        slides: [
          {
            src:require('../../assets/image/sliderone.png'),
            title:'大促销啦',
          },
          {
            src:require('../../assets/image/slidertwo.png'),
            title:'今天的热点'
          },
          {
            src:require('../../assets/image/sliderthree.png'),
            title:'这是一个哈'
          },
          {
            src:require('../../assets/image/sliderfour.png'),
            title:'快点来'
          }
        ],
        SPspan:[
          {
            src: "https://img.alicdn.com/bao/uploaded/i1/3396001282/TB1XYpBfr5YBuNjSspoXXbeNFXa_!!0-item_pic.jpg_b.jpg",
            title: "男装"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i1/2113129346/TB2Td5fj3vD8KJjSsplXXaIEFXa_!!2113129346.jpg_b.jpg",
            title: "童装"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i3/1739733928/TB2hqO9XNAlyKJjSZFyXXbm_XXa_!!1739733928.jpg_b.jpg",
            title: "箱包"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i2/723989220/TB24oXWX79WBuNjSspeXXaz5VXa_!!723989220.jpg_b.jpg",
            title: "鞋靴"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i4/3278057401/TB23cV8ev9TBuNjy0FcXXbeiFXa_!!3278057401-0-item_pic.jpg_b.jpg",
            title: "运动装"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i4/2192876822/TB1geRydMmTBuNjy1XbXXaMrVXa_!!0-item_pic.jpg_b.jpg",
            title: "女装"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i1/730059346/TB1sLqMgeuSBuNjSsziXXbq8pXa_!!0-item_pic.jpg_b.jpg",
            title: "内衣"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i3/TB123k9RXXXXXasXVXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
            title: "衣饰"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i3/2194914040/TB1_6eseLfM8KJjSZPfXXbklXXa_!!0-item_pic.jpg_b.jpg",
            title: "职业装"
          },
          {
            src: "https://img.alicdn.com/bao/uploaded/i3/412129187/TB1aRnzk7KWBuNjy1zjXXcOypXa_!!0-item_pic.jpg_b.jpg",
            title: "休闲装"
          }
        ],
        tuijianPL:[
          {
              title:'男装推荐',
            count:true,
            tuijiangoods:[
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/394695430/TB1TJDiodzJ8KJjSspkXXbF7VXa_!!0-item_pic.jpg_b.jpg",
                title: "复古港味半袖T恤女装2018春夏装新款",
                count:"￥ 69.99"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i1/196993935/TB1UwQ7iN9YBuNjy0FfXXXIsVXa_!!0-item_pic.jpg_b.jpg",
                title: "女装 两穿花式打褶T恤(短袖) 408591 ",
                count: "￥ 59.00"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg",
                title: "女装 (UT) SANRIO印花T恤(短袖) 4069",
                count: "￥ 79.00"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/408107205/TB27VCwnbuWBuNjSszgXXb8jVXa_!!408107205-0-item_pic.jpg_b.jpg",
                title: "逸阳高腰韩版黑色显瘦九分裤",
                count: "￥ 149.00"

              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/420567757/TB1YoEWmkyWBuNjy0FpXXassXXa_!!0-item_pic.jpg_b.jpg",
                title: "VeroModa微弹铅笔小脚显瘦牛仔裤女",
                count: "￥ 139.50"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i2/408107205/TB1hvqjdQomBKNjSZFqXXXtqVXa_!!0-item_pic.jpg_b.jpg",
                title: "逸阳韩版显瘦不规则毛边喇叭裤",
                count: "￥ 199.00"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/408107205/TB27VCwnbuWBuNjSszgXXb8jVXa_!!408107205-0-item_pic.jpg_b.jpg",
                title: "逸阳高腰韩版黑色显瘦九分裤",
                count: "￥ 149.00"

              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/420567757/TB1YoEWmkyWBuNjy0FpXXassXXa_!!0-item_pic.jpg_b.jpg",
                title: "VeroModa微弹铅笔小脚显瘦牛仔裤女",
                count: "￥ 139.50"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i2/408107205/TB1hvqjdQomBKNjSZFqXXXtqVXa_!!0-item_pic.jpg_b.jpg",
                title: "逸阳韩版显瘦不规则毛边喇叭裤",
                count: "￥ 199.00"
              }
            ],

          },
          {
            title:'女装推荐',
            count:false,
            tuijiangoods:[
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/394695430/TB1TJDiodzJ8KJjSspkXXbF7VXa_!!0-item_pic.jpg_b.jpg",
                title: "复古港味半袖T恤女装2018春夏装新款",
                count:"￥ 69.99"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i1/196993935/TB1UwQ7iN9YBuNjy0FfXXXIsVXa_!!0-item_pic.jpg_b.jpg",
                title: "女装 两穿花式打褶T恤(短袖) 408591 ",
                count: "￥ 59.00"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg",
                title: "女装 (UT) SANRIO印花T恤(短袖) 4069",
                count: "￥ 79.00"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/408107205/TB27VCwnbuWBuNjSszgXXb8jVXa_!!408107205-0-item_pic.jpg_b.jpg",
                title: "逸阳高腰韩版黑色显瘦九分裤",
                count: "￥ 149.00"

              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i3/420567757/TB1YoEWmkyWBuNjy0FpXXassXXa_!!0-item_pic.jpg_b.jpg",
                title: "VeroModa微弹铅笔小脚显瘦牛仔裤女",
                count: "￥ 139.50"
              },
              {
                src: "https://img.alicdn.com/bao/uploaded/i2/408107205/TB1hvqjdQomBKNjSZFqXXXtqVXa_!!0-item_pic.jpg_b.jpg",
                title: "逸阳韩版显瘦不规则毛边喇叭裤",
                count: "￥ 199.00"
              }
            ],

          },

        ],
      }
    },
    components: {
      swiper,
      swiperSlide,
      goodList,
      Carousel,
    },
    methods:{
    },
  }

</script>

<style scoped>
  input::-webkit-input-placeholder {
    color: salmon;
    font-size: 12px;

  }

  #homePage{
    margin-bottom: 50px;
    width: 100%;
    overflow-x:hidden;
  }
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
  }
  .serch-input{
    height: 100%;
    width: 100%;
  }
  .WBAQPage{
    width: 96%;
    padding: 0 2%;
    height: 200px;
    margin-top: 60px;
  }
  .fenlei{
    width: 100%;
    overflow: hidden;
    padding-bottom: 10px;
    background-color: whitesmoke;
    margin-bottom: 10px;
  }
  .fenlei-header{
    width: 100%;
    height: 40px;
    line-height: 50px;
    font-size: 20px;
    color: grey;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: white;
    margin-bottom: 7.5px;
    padding-left: 2%;
  }
  .fenlei-header img{
    width: 22.5px;
    height: 22.5px;
    margin-right: 7.5px;
  }
  .fenlei-contain{
    width: 100%;
  }
  .fenlei-contain li{
    margin-top: 5px;
    float: left;
    width: 20%;
  }
  .tubiao{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tubiao img{
    width: 35px;
    height:35px;
    border-radius: 50%;

  }
  .fenlei-text{
    width: 100%;
    float: left;
    font-size: 15px;
    text-align: center;
    color: grey;
    margin-top: 5px;
  }
  .tuijian{
    width: 100%;
    background-color:#ec2127 ;
    margin-bottom: 10px;
  }
  .tuijian-header{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    color: white;
  }
  .newgoods{
    width: 100%;
    overflow: hidden;
    background-color:whitesmoke;
  }
  .newgoods-header{
    width: 100%;
    height: 40px;
    line-height: 50px;
    font-size: 20px;
    color: grey;
    padding-left: 2%;
    background-color: whitesmoke;
    margin-top: 10px;
    display: flex;
    justify-content:left;
    align-items: center;
  }
  .newgoods-header img{
    width: 22.5px;
    height: 22.5px;
    margin-right: 7.5px;
  }

  .newgoods-image img{
    width: 100%;
    height: 100%;
    border-radius: 2%;
  }
  .qiang{
    width: 100%;
    padding: 0 10px 3%;
  }
  .swiper-img{
    width: 100px;
    height: 100px;
  }
  .sliderslide{
    width: 30%;
  }


</style>
