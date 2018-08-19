<template>
  <div id="NavSlide">
    <Header :message = "titleInfo"></Header>
    <nav>
      <p v-for="(item,key) in arr" @click="toggle(item,key)" :class="key==selected?'active':''">{{item}}</p>
    </nav>
    <div class = "containBody">
      <dingdanList v-if= 'selected>0' :message="dingdanALL[selected-1]"></dingdanList>
      <dingdanAll  v-if= 'selected==0' :message="dingdanALL"></dingdanAll>
    </div>
  </div>
</template>
<script>
  import Header from 'components/common/head.vue'
  import dingdanList from '../dingdan/childList.vue'
  import dingdanAll from '../dingdan/all.vue'
  export default {
    data:function(){
      return {
        titleInfo:'我的订单',
        selected:0,
        arr:[
          "全部",
          "待付款",
          "待发货",
          "待收货",
          "待评价",
          "已评价",
          "退款中",
          "退款成功",
          "退款失败",
        ],
        dingdanALL:[
        [
          {
            shijian:'2019-06-26',
            zhuangtai:'待付款',
            imgsrc:'https://img.alicdn.com/bao/uploaded/i4/1039181416/TB2C8wngTJYBeNjy1zeXXahzVXa_!!1039181416-0-item_pic.jpg_b.jpg',
            title:'ahsbdsandna速度uanadnanananduasnu 空间三等奖卡萨诺的健康能杀掉了那块',
            price:'￥199.00',
            num:'x1',
            numtotal:'1',
            totalprice:'￥199.00',
            btn:[
              {
                title:'取消订单',
                color:{background:''},
                colorT:{color:''}
              },{
                title:'立即付款',
                color:{background:'red'},
                colorT:{color:'white'}
              },],


          },{
          shijian:'2019-06-26',
          zhuangtai:'待付款',
          imgsrc:'https://img.alicdn.com/bao/uploaded/i4/1039181416/TB2C8wngTJYBeNjy1zeXXahzVXa_!!1039181416-0-item_pic.jpg_b.jpg',
          title:'ahsbdsandna速度uanadnanananduasnu 空间三等奖卡萨诺的健康能杀掉了那块',
          price:'￥199.00',
          num:'x1',
          numtotal:'1',
          totalprice:'￥199.00',
          btn:[
            {
              title:'取消订单',
              color:{background:''},
              colorT:{color:''}
            },{
              title:'立即付款',
              color:{background:'red'},
              colorT:{color:'white'}
            },],
        }

        ],
          [
            {
          shijian:'2019-06-26',
          zhuangtai:'已发货',
          imgsrc:'https://img.alicdn.com/bao/uploaded/i2/408107205/TB1hvqjdQomBKNjSZFqXXXtqVXa_!!0-item_pic.jpg_b.jpg',
          title:'ahsbdsandna速度uanadnanananduasnu 空间三等奖卡萨诺的健康能杀掉了那块',
          price:'￥199.00',
          num:'x1',
          numtotal:'1',
          totalprice:'￥199.00',
          btn:[
            {
              title:'催物流',
              color:{background:''},
              colorT:{color:''}
            },{
              title:'查看物流',
              color:{background:''},
              colorT:{color:''}
            },{
              title:'确认收货',
              color:{background:'red'},
              colorT:{color:'white'}
            }],
        },

          ]
        ],

      }
    },
    components: {
      Header,
      dingdanList,
      dingdanAll

    },
    methods:{
      toggle(item,key){
        this.selected=key;
      }
    }
  }


</script>

<style>

  #NavSlide{
    width: 100%;
    overflow:hidden;
    margin-top: 40px;
    background-color: whitesmoke;
  }
  #NavSlide nav{
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
    background-color: #ec2127;
  }
  #NavSlide p{
    font-size: 12px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin: 5px;
  }
  #NavSlide p a{
    color: #E5E5E5;
    text-decoration: none;
  }
  .active{
    color: white;
  }
  .containBody{
    width: 100%;
  }
</style>
