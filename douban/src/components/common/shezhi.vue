<template>
<div class = "shezhi">
    <Header :message = "titleInfo"></Header>
  <div class = "shezhiList">

    <div class = "itemList" v-for="(item,key) in shezhiInfo"  @click="son(item,key)">
      <router-link class = "itemList-contain" :to="item.path">
      <p>{{item.name}}</p>
      <div class = "rightBody">
        <p>{{item.banben}}</p>
        <i class="icon iconfont icon-you"></i>
      </div>
      </router-link>
    </div>


  </div>
  <div class = "foot">
    <button type="button">退出当前账号</button>
  </div>
</div>

</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {

      return{
        selected:-1,
        titleInfo:'设置',
        shezhiInfo:[{
            name:'个人信息',
          path:'/userInfo'
        },
          {
            name:'清除缓存',
            path:''
          },
          {
            name:'关于服来服往',
            banben:'v1.1.1',
            path:''
          },
        ],
      }
    },
    components: {
      Header
    },
    methods:{
      son(item,key){
        this.selected=key;
      }
    }

  }

</script>

<style scoped>
.shezhi{
  width: 100%;
  margin-top: 40px;
}
  .shezhiList{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .itemList-contain{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .itemList{
    width: 94%;
    padding: 10px 3%;
    border-bottom: 1px solid whitesmoke;

  }
  .rightBody{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

p{
  font-size: 13px;
  font-family: "Microsoft YaHei UI";
  color: #6c6c6c;
}
  .foot{
    width: 100%;
  }
.foot button{
  width: 100%;
  height: 30px;
  color: red;
  font-size:13px;
  text-align: center;
  line-height: 30px;
  margin-top: 15px;
  background-color: whitesmoke;
  border: 0;
}
</style>

