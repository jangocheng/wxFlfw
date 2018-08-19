<template>

  <div class = "yinhangka">
    <Header :message = "titleInfo"></Header>

    <div class = "yinhangka-body">
      <li  v-for="(item,key) in  yinhangka" >
        <div class = "yinhangka-header">
          <i :class="item.icon" :style="{'color':item.activeColor}"></i>
          <p>{{item.yinhangName}}</p>
          <p>{{item.weihao}}</p>
          <div class = "leixing">
            {{item.leixing}}
          </div>
        </div>
        <div class = "yinhangka-kuaijie">
          <p>快捷支付已开通</p>
          <button>管理</button>
        </div>
      </li>
      <li class = "addYHK">
        <img src = "../../assets/image/addImage.png">
        <p>添加银行卡</p>
      </li>
    </div>
  </div>
</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {
      return{
        titleInfo:'银行卡管理',
        yinhangka:[
          {
            icon:"icon iconfont icon-zhongguogongshangyinhang",
            yinhangName:"中国工商银行",
            weihao:"尾号4458",
            leixing:"储蓄卡",
            activeColor:'red',

          },
          {
            icon: "icon iconfont icon-nongyeyinhang-",
            yinhangName: "中国农业银行",
            weihao: "尾号5628",
            leixing: "信用卡",
            activeColor:'#00b388',
          },
          {
            icon: "icon iconfont icon-youzhengyinhang-",
            yinhangName: "中国邮政",
            weihao: "尾号5866",
            leixing: "储蓄卡",
            activeColor:'green',

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
ul,li{
  list-style: none;
}
  .yinhangka{
    width: 100%;
    height: 100%;
    margin-top: 40px;
  }
  .yinhangka-body{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }
  .yinhangka-body li{
    width: 90%;
    height: 120px;
    margin:2% 5%;
    border: 1px whitesmoke solid;
    box-shadow:  7.5px 15px 15px 2px whitesmoke inset;
  }
  .yinhangka-body li .yinhangka-header{
    width:94%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3%;
    margin: 7.5px 0;
    position: relative;
  }
  .yinhangka-header i{
    font-size: 30px;

  }
  .yinhangka-header p{
    font-size:15px;
    color:grey;
    line-height: 35px;
  }
  .leixing{
    font-size: 12.5px;
    height: 25px;
    width: 40px;
    text-align: center;
    color: green;
    line-height: 25px;
    border: 1px lightgray solid;
  }
  .yinhangka-body li .yinhangka-kuaijie{
    width:100%;
    height: 50px;
    background-color: lightgrey;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .yinhangka-kuaijie p{
    width: 70%;
    height: 100%;
    line-height: 50px;
    font-size: 15px;
    color: green;
    margin-left: 10px;
  }
  .yinhangka-kuaijie button{
    width: 50px;
    height: 25px;
    font-size: 15px;
    text-align: center;
    border: 1px white solid;
    border-radius:0;
    margin: 0;
    padding: 0;
    line-height: 25px;
    background-color: transparent;
    margin-top: 12.5px;
    color: white;
  }
  .addYHK {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .addYHK img{
    width: 75px;
    height: 75px;
    margin-top: 15px;
    margin-bottom: 7.5px;
  }
  .addYHK p{
    font-size: 17.5px;
    color: grey;
  }

</style>

