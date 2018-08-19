<template>
  <div class = "okForm">
    <Header :message = "titleInfo"></Header>
    <div class  = "adress">
      <li v-for="(item,key) in userInfo">
        <router-link to="dizhi">
        <div class = "leftPlace">
          <i class="icon iconfont icon-dizhi"></i>
          <div class = "adressInfo">
            <div class = "adressInfo-top">
              <p>{{item.userName}}</p><p>{{item.tel}}</p>
            </div>
            <p class = "addr">{{item.adress}}</p>
          </div>
        </div>
        </router-link>
        <i class="icon iconfont icon-you"></i>
      </li>
    </div>
    <SPXX :messaget ="daifukuan"></SPXX>
    <div class = "goodsInfo-item">
        <div class = "okForm-footer">
          <div class= "tishi">
            <img src = "../../assets/image/jinggao.png">
            <p>不要相信任何人通过短信、QQ等发送的所谓的"退款链接"</p>
          </div>
          <div class = "jiesuan">
            <div class = "jiesuanleft">
              <p class= "zongji">总计：￥</p>
              <p class = "charge-Price">{{price}}</p>
            </div>
            <div class = "jiesuanright">
              <p class = "gong">共{{buynum}}件商品</p>
             <router-link class="submitForm" to = '/payFor'>提交订单</router-link>
            </div>
          </div>
        </div>
    </div>
    <div class = "wantSay">
      <input  placeholder='有什么想对卖家说的可以在这儿说哟~'>
    </div>

  </div>

</template>

<script>
  import Header from 'components/common/head.vue'
  import SPXX from './shangPXX.vue'
  export default {
    data () {
      return{
        titleInfo:'订单详情',
        price:'69.02',
        buynum:'1',
        userInfo:[{
          userName:"小明",
          tel:"1582365326",
          adress:"贵州省遵义市红花岗区和圣诞节快接啊三百多块",
        }
        ],
        daifukuan: [
          {
            title: '等待买家付款',
            clock: '还剩08天07小时43分',
            dianName: '啊西莫的鞋铺',
            imgSrc: 'https://img.alicdn.com/bao/uploaded/i1/2146742267/TB1CzINb1OSBuNjy0FdXXbDnVXa_!!0-item_pic.jpg_b.jpg',
            goodstitle: '勾花镂空针织衫拉夏贝尔2018夏季新款单排扣开衫百搭短外套女士',
            goodsguige: '颜色：黑色金属扣 尺码：37',
            prePrice: '￥98.66',
            nowPrice: '￥69.02',
            buynum: ' 1',
            baoyou: '全国包邮',
            price: 69.02,
            pay: '付款',
            showwuliu: false,
            youfei:"0.00",
          },
        ],

      }
    },
    components: {
      SPXX,
      Header

    },
    methods: {

    }
  }

</script>

<style scoped>
  .okForm{
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 40px;
  }
  .adress{
    background-color: white;
    width: 100%;
  }
  .adress li{
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:7.5px 3%;
  }
  .adress li i{
    font-size: 15px;
    line-height: 50px;
  }
  .adress li .adressInfo{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .adressInfo .adressInfo-top{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .adressInfo-top p{
    font-size: 15px;
    margin-right: 7.5px;
    line-height: 25px;
  }
  .adressInfo .addr{
    font-size: 12.5px;
    line-height: 20px;
    color:grey;
  }
  .leftPlace{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .goodsInfo-item{
    width:94%;
    overflow:hidden;
    padding:  0 3%;
    background-color: white;
  }
  .goodsInfo-item li{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: whitesmoke;
  }
  .wantSay{
    width: 94%;
    height: 35px;
    padding: 0 3%;
    background-color: white;
    margin-top: 7.5px;
  }
  .wantSay input{
    width: 97%;
    background-color: whitesmoke;
    font-size: 15px;
    padding-left: 3%;
  }
  input .inp-say{
    font-size: 14px;
    color: grey;
    line-height: 35px;
  }
  .okForm-footer{
    width: 100%;
    background-color: white;
    position: fixed;
    bottom:0;
    left:0;
  }

  .okForm-footer .tishi{
    width: 94%;
    background-color: whitesmoke;
    padding: 0 3%;
    display: flex;
    flex-direction: row;
  }
  .okForm-footer .tishi img{
    width: 20px;
    height: 20px;
    display: block;
    margin-top: 5px;
  }
  .okForm-footer .tishi p{
    line-height: 30px;
    font-size: 12.5px;
    color: black;
    margin-left: 5px;
  }
  .jiesuan{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .jiesuanleft{
    display: flex;
   flex-direction: row;
    justify-content: flex-start;
    width: 50%;
  }
  .jiesuanright{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .jiesuan .zongji{
    font-size: 15px;
    line-height: 45px;
    margin-left: 3%;
  }
  .jiesuan .gong{
    font-size: 10px;
    color: grey;
    line-height: 45px;
  }
 .submitForm{
    background-color:#ec2127;
    font-size: 15px;
    line-height: 45px;
    border-radius: 0;
    border: none;
    margin: 0;
   padding: 0 10px;
    color: white;
    margin-left: 10px;
  }
  .jiesuan .charge-Price{
    font-size: 20px;
    line-height: 45px;
    color: red;
  }

</style>
