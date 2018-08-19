<template>
  <div class="main_nav_bottom">
    <ul class="row" align="center">
      <li v-for="(item,key) in arrts"  @click="son(item,key)" >
          <img class = "imone"  :src="key==selected?item.imsrct:item.imsrc" alt="">
          <p :class="key==selected?'active':''">{{item.ptxt}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return{
      selected:0,
      arrts: [
        {
             imsrc:require( '../../assets/image/homePage.png'),
             imsrct:require( '../../assets/image/homePageon.png'),
             ptxt:'首页',
        },
        {
          imsrc:require( '../../assets/image/shoucang.png'),
          imsrct:require( '../../assets/image/shoucangon.png'),
          ptxt:'我的收藏',
        },
        {
          imsrc:require( '../../assets/image/fabu.png'),
          imsrct:require( '../../assets/image/fabuon.png'),
          ptxt:'我要发布',
        },
        {
          imsrc:require( '../../assets/image/car.png'),
          imsrct:require( '../../assets/image/caron.png'),
          ptxt:'购物车',
        },
        {
          imsrc:require( '../../assets/image/user.png'),
          imsrct:require( '../../assets/image/useron.png'),
          ptxt:'个人中心',
        },
      ]
    }
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
  p{
    margin: 0;
    font-size: 14px;
  }
  .main_nav_bottom{
    width: 96%;
    background-color: whitesmoke;
    position: fixed;
    left:0;
    bottom:0;
    padding:1% 2%;
    z-index: 99999;
  }
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
  .row li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .imone{
    width: 20px;
    height: 20px;
    margin-top: 2px;
  }
  .active{
    color: #ec2127;
  }
</style>

