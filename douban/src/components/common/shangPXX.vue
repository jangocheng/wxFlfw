<template>
  <div class = "templeTwo" >
    <li  v-for="(item,key) in messaget">
      <div class = "goodsInfo-headLine">
        <i class="icon iconfont icon-dianpu"></i>
        <p >{{item.dianName}}</p>
        <div class = "goodsInfo-head-right">
        <img src = "../../assets/image/chat.png">
        <p class = "goodsInfo-clock">联系商家</p>
        </div>
        </div>
        <div class = "goodsInfo-bodyContain">
        <div class = "goodsInfo-goodsInfo">
        <img :src = "item.imgSrc">
        <div class = "goodsInfo-good-right">
        <div class = "goodsInfo-item-left">
        <p class = "goodsInfo-goodinfoTitle">{{item.goodstitle}}</p>
        <p class = "goodsInfo-goodinfoGuige">{{item.goodsguige}}</p>
        </div>

        <div class = "goodsInfo-item-right">
        <p class = "goodsInfo-oneitem">{{item.prePrice}}</p>
        <p class = "goodsInfo-twoitem">{{item.nowPrice}}</p>
        <p class = "goodsInfo-threeitem">x {{item.buynum}}</p>
        </div>
        </div>
        </div>

        <ul class = "goodsInfo-fuwuList">
            <li class ="goodsInfo-li">
              <p>快递运费: {{item.baoyou}}</p>
              <p>￥{{item.youfei}}</p>

            </li>
            <li class ="goodsInfo-li">
                <p>退货运费补贴</p>
                <p>卖家赠送</p>
            </li>
          <li class ="goodsInfo-li">
              <p>店铺合计总价：</p>
              <p>{{item.price}}</p>
          </li>
        </ul>
        </div>
    </li>
  </div>
</template>

<script>

  export default {
    data () {
      return{
      }
    },
    props:["messaget"],
    methods: {

    }
  }

</script>

<style scoped>
  .templeTwo{
    width: 100%;
  }
  ul,li{
    list-style: none;
  }
  .goodsInfo-headLine{
    display: flex;
    flex-direction: row;
    width: 94%;
    height: 30px;
    justify-content: space-between;
    padding: 0 3%;
    background-color: white;
  }
 .icon-dianpu{
   line-height: 30px;
   color: #5bc0de;
 }
  .goodsInfo-headLine p{
    height: 100%;
    line-height: 35px;
    font-size: 15px;
  }
  .goodsInfo-headLine .goodsInfo-head-right{
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .goodsInfo-dianname{
    font-size: 15px;
    line-height: 35px;
    border-bottom: 1px whitesmoke solid;
    padding: 0 1%;
    width: 98%;
    background-color: white;
  }

  .goodsInfo-head-right img{
    width: 17.5px;
    height: 17.5px;
    display: block;
    margin-top: 7.5px;
    margin-right: 5px;
  }
  .goodsInfo-head-right .goodsInfo-clock{
    height: 100%;
    line-height: 35px;
    font-size: 15px;
    text-align: right;
    color: grey;
  }
  .goodsInfo-bodyContain{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  .goodsInfo-goodsInfo{
    width: 94%;
    display: flex;
    flex-direction: row;
    padding: 5px 3%;
    border-bottom: 1px whitesmoke solid;
  }

  .goodsInfo-goodsInfo img{
    width: 75px;
    height: 80px;
    display: block;
    margin-top: 10px;
  }
  .goodsInfo-goodsInfo .goodsInfo-good-right{
    width: 80%;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
  }
  .goodsInfo-goodsInfo .goodsInfo-good-right .goodsInfo-item-left{
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;

  }
  .goodsInfo-item-left .goodsInfo-goodinfoTitle{
    font-size: 12px;
    line-height: 17.5px;
    width: 100%;
    height: 80%;
    display:block;
    white-space: pre-wrap;
  }
  .goodsInfo-item-left .goodsInfo-goodinfoGuige{
    font-size: 12.5px;
    line-height: 15px;
    width: 100%;
    height: 30%;
    color:grey;
  }
  .goodsInfo-goodsInfo .goodsInfo-good-right .goodsInfo-item-right{
    width: 19%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
  .goodsInfo-item-right .goodsInfo-oneitem{
    font-size: 12.5px;
    text-decoration: line-through;
    color:grey;
    text-align: right;
  }
  .goodsInfo-item-right .goodsInfo-twoitem{
    font-size: 12.5px;
    text-align: right;
  }
  .goodsInfo-item-right .goodsInfo-threeitem{
    font-size: 12.5px;
    color:grey;
    text-align: right;
  }
  .goodsInfo-fuwuList{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .goodsInfo-fuwuList .goodsInfo-li{
    width: 94%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3%;
    margin: 2.5px 0;
    border-bottom: 1px whitesmoke solid;
    background-color: white;
  }
  .goodsInfo-fuwuList li p{
    line-height: 35px;
    font-size: 15px;
  }

</style>
