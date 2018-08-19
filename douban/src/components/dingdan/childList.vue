<template>
  <div class = "dingdanLB" >
    <li v-for="(item,key) in message">
      <div class = "item-top">
        <p>{{item.shijian}}</p>
        <p>{{item.zhuangtai}}</p>
      </div>
      <div class = "item-center">
        <img :src="item.imgsrc" alt="">
        <div class = "item-center-contain">
          <p>{{item.title}}</p>
        </div>
        <div class = "item-center-right">
          <span>{{item.price}}</span>
          <span>{{item.num}}</span>

        </div>
      </div>
      <div class = "item-bottom">
        <div class = "item-bottom-top">
          <p>共{{item.numtotal}}件</p>
          <div class = "item-bottom-top-right">
            <p style="margin:5px 0">应付总额：</p>
            <p style="color: red;margin:5px 0;">{{item.totalprice}}</p>
          </div>
        </div>
        <div class = "item-bottom-bottom">
          <span  v-for="(item,key) in item.btn" :style="[item.color,item.colorT]">{{item.title}}</span>
        </div>
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
    props:{
      message:String
    },
    components: {

    },
    methods:{
      son(item,key){
        this.$emit('qiehuan',key);
        this.selected=key;
      }
    }

  }

</script>

<style scoped>
  .dingdanLB{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  ul,li{
    list-style: none;
  }
  p{
    font-size: 12px;
    color: #363636;
  }
  .dingdanLB li{
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 94%;
    padding: 5px 3%;
  }
  .item-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom:1px solid whitesmoke;
  }
  .item-center{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom:1px solid whitesmoke;
    padding: 8px 0;
  }
  .item-center img{
    display: block;
    width: 50px;
    height: 40px;

  }
  .item-center-contain{
    width: 60%;
    text-align: left;
  }
  .item-center-right{
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  .item-bottom-bottom span{
    border: 1px solid lightgrey;
    padding: 5px 8px;
    font-size: 12px;
    border-radius: 20px;
    margin-left: 5px;
  }
  .item-bottom-bottom{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .item-bottom{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .item-bottom-top{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .item-bottom-top-right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 5px;
  }
</style>

