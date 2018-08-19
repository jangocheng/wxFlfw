<template>
  <!--pages/person/dizhi/dizhi.wxml-->
  <div class = "dizhi">
    <Header :message = "titleInfo"></Header>
    <div class = "dizhiList">
      <li  v-for="(item,key) in address" >
        <div class = "dizhiList-header">
          <p>{{item.userName}}</p>
          <p class = "dizhiList-header-tel">{{item.userTel}}</p>
        </div>
        <div class = "dizhiList-contain">
          <i class="icon iconfont icon-dizhi"></i>
          <p>{{item.di}}{{item.zhi}}</p>
        </div>
        <div class = "dizhiList-footer">
          <div class = "rad"  @click="son(item,key)">
      <div class = "radioK" >
        <img src = "../../assets/image/cheak.png" v-if ="key==selected">
      </div>
      <p>设为默认</p>
    </div>
    <div class = "dizhiList-footer-right">
      <div class = "bianji" >
        <img src = "../../assets/image/bianji.png">
        <p>编辑</p>
      </div>
      <div class = "del" @click="delBtn(item,key)">
        <img src = "../../assets/image/del.png">
        <p >删除</p>
      </div>
    </div>
  </div>
  </li>
  </div>
  <div class = "dizhi-foot" >
    <router-link to="/addDz">
      <button>添加收货地址</button>
    </router-link>

  </div>
  </div>

</template>

<script>
  import Header from 'components/common/head.vue'
  import { mapState,mapActions,mapGetters } from 'vuex';
  import store from '../../store/index'
  export default {
    data () {
      return{
        selected:0,
        titleInfo:'地址管理',
      }
    },

    components: {
      Header

    },
    computed:{
        ...mapState({
        address:state=>state.dizhi.address
      }),
    },
    methods:{
      son(item,key){
        this.selected=key;
      },
      delBtn(item,key){
        this.address.splice(key, 1);
      },
    }

  }

</script>

<style scoped>

  .dizhi{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin-top: 40px;
  }
  .dizhiList{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    padding: 7.5px 0;
  }
  .dizhiList li{
    width: 94%;
    display: flex;
    padding: 0 3%;
    flex-direction: column;
    background-color: white;
    margin: 7.5px 0;
    box-shadow:1px 1px 5px lightgrey;
    -webkit-box-shadow:1px 1px 5px lightgrey;
    -moz-box-shadow:1px 1px 5px  lightgrey;
  }
  .dizhiList-header{
    flex-direction: row;
    justify-content: flex-start;
    height: 25px;
    width: 100%;
    margin-top: 7.5px;
    display: flex;
  }
  .dizhiList-header p{
    line-height: 25px;
    font-size: 15px;
  }
  .dizhiList-header-tel{
    margin-left: 10px;
  }
  .dizhiList-contain{
    width: 100%;
    border-bottom: 1px whitesmoke solid;
    padding-bottom: 7.5px;
    display: flex;
flex-direction: row;
    justify-content: flex-start;
  }
  .dizhiList-contain i{
     font-size: 15px;
    line-height: 25px;
    margin-right: 5px;
  }
  .dizhiList-contain p{
    line-height: 25px;
    font-size: 15px;
    color: grey;
  }
  .dizhiList-footer{
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .rad {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .rad .radioK{
    width: 15px;
    height: 15px;
    border: 1px green solid;
    border-radius: 50%;
    box-shadow: none;
    margin-top: 10px;
    margin-right: 5px;
  }
.radioK img{
    width: 100%;
    height: 100%;
  }
  .rad p{
    font-size: 15px;
    line-height: 35px;
  }


  .dizhiList-footer-right{
    display: flex;
    width: 40%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  .dizhiList-footer-right {
    display: flex;
    width: 40%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  .bianji{
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .del{
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .bianji img{
    margin-top: 7.5px;
    width: 17.5px;
    height: 17.5px;
    display: block;
  }
  .del img{
    margin-top: 7.5px;
    width: 17.5px;
    height: 17.5px;
    display: block;
  }
  .bianji p{
    font-size: 15px;
    line-height: 30px;
    color: grey;
    margin-left: 5px;
  }
  .del p{
    font-size: 15px;
    line-height: 30px;
    color: grey;
    margin-left: 5px;

  }
  .dizhi-foot{
    width: 100%;
    height: 50px;
    background-color: #ec2127;
    position: fixed;
    bottom: 0;
    left:0;
  }
  .dizhi-foot button{
    width: 100%;
    height: 100%;
    line-height: 50px;
    color: white;
    text-align: center;
    background-color: transparent;
  }
  button{
    border-radius:0;
    padding: 0;
    margin: 0;
  }
  .drop-meaue{
    width: 100%;
    height: 150px;
    background-color:#ec2127;
    position: fixed;
    bottom: 0;
    left:0;
  }

</style>

