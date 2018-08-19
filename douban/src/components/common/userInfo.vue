<template>
  <div class = "userInfo">
    <Header :message = "titleInfo"></Header>
    <div class = "infoList">
      <div class = "itemList" v-for="(item,key) in imfoInfo"  @click="son(item,key)">
        <router-link class = "itemList-contain" to="/user">
         <div class = "leftBody">
           <img :src="item.src" alt="" v-if="item.touxiang">
           <p>{{item.title}}</p>
         </div>
        <div class = "rightBody">
          <p>{{item.text}}</p>
          <i class="icon iconfont icon-you"></i>
        </div>
        </router-link>
      </div>

    </div>
  </div>

</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {
      return{
        titleInfo:'个人信息',
        imfoInfo:[
          {
              src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
            text:'修改头像',
            touxiang:true,
          },
          {
            title:'昵称',
            text:'手机用户姐姐',
            touxiang:false,
          },
          {
            title:'性别',
            text:'未设置',
            touxiang:false,
          },
          {
            title:'生日',
            text:'未设置',
            touxiang:false,
          },
        {
          title:'账号管理',
            text:'其他登陆方式',
          touxiang:false,
        },
          {
            title:'我的手机号',
            text:'1456666552',
            touxiang:false,
          },

          {
            title:'个性签名',
            text:'未设置',
            touxiang:false,
          },
          {
            title:'我的实名认证',
            touxiang:false,
          },
        ],
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
.userInfo{
  width: 100%;
  margin-top: 40px;
}
  .infoList{
    width: 94%;
    padding: 5px 3%;
    display: flex;
    flex-direction: column;
  }
  .itemList{
  width: 100%;
    border-bottom:1px solid whitesmoke;
    padding: 8px 5px;
  }
  .itemList-contain{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .leftBody{
    display: flex;
    flex-direction: column;
  }
.leftBody img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
  .rightBody{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
p{
  font-size: 12px;
  color: #6c6c6c;
  font-family: "Microsoft YaHei UI";
}
.icon-you{
  font-size: 14px;
  margin-left: 5px;
}

</style>

