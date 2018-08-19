<template>

  <div class = "user">
    <Header :message = "titleInfo"></Header>
    <!--//修改昵称-->
    <div class = "userList">
       <div class = "nichen" v-if="">
         <div class = "nichenTop">
         <input type="text" placeholder="hahahahah">
         <div class = "clear">x</div>
         </div>
         <button type="submit">保存</button>

       </div>
      <!---->
      <!--//第三方登陆-->
      <div class = "threeLogin" v-if="">
        <div class = "LoginStyle" v-for="(item,key) in threeLog" >
        <div class = "headLine"><p>{{item.title}}</p></div>
          <div class = "LoginStyle-body">
             <div class = "LoginStyle-list" v-for="(item,key) in item.list">
               <div class = "LoginStyle-list-left">
                 <i :class="item.iconsym"  :style="{'color':item.activeColor}"></i>
                 <div class = "LoginStyle-list-left-right">
                   <p>{{item.style}}</p>
                   <p>{{item.name}}</p>
                 </div>
               </div>
               <div class = "LoginStyle-list-right">
                 <p>{{item.text}}</p>
                 <i class="icon iconfont icon-you"></i>
               </div>
             </div>

          </div>
        </div>

      </div>

<!--//修改电话-->
      <div class = "tel" v-if="">
        <div class = "tel-text">
          <p>当前的手机账号</p>
          <p style="color: #5bc0de;margin-left: 5px">{{tel}}</p>
        </div>
        <div class = "tel-bottom">
          <button>更换</button>
          <p>一年内可更换5次，一个月内只能更换1次</p>
        </div>

      </div>
      <div class = "gexing" v-if="">
          <textarea maxlength="20" placeholder="请输入个性签名">
          </textarea>
          <span class = "zishu">0/30</span>
          <button type="submit">保存</button>
      </div>


    </div>
  </div>

</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {
      return{
          tel:'5161516111',
        titleInfo:'银行卡管理',
        threeLog:[
          {
            title:'我的主账号',
            list:[
              {
                iconsym:'icon iconfont icon-icon-test',
                style:'手机账号',
                name:'115315312',
                text:'更换手机账号',
                activeColor:'red',
              }
            ],
          },
          {
            title:'其他登陆方式',
            list:[
              {
                iconsym:'icon iconfont icon-88',
                style:'微信',
                name:'',
                text:'未绑定',
                activeColor:'',
              },
              {
                iconsym:'icon iconfont icon-qq1',
                style:'qq',
                name:'',
                text:'为绑定',
                activeColor:'',
              },
              {
                iconsym:'icon iconfont icon-zhifubao',
                style:'支付宝',
                name:'',
                text:'未绑定',
                activeColor:'',
              },
              {
                iconsym:'icon iconfont icon-weibo',
                style:'新浪微博',
                name:'',
                text:'未绑定',
                activeColor:'',
              },
            ],
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
  .user{
    width: 100%;
    margin-top: 40px;
  }
  .userList{
    width: 100%;
  }
  button{
    width: 100%;
    background-color: whitesmoke;
    color: #acacac;
    height: 30px;
    border: 0;
    border: 1px #6c6c6c solid;
  }
  .nichen{
    width: 94%;
    display: flex;
    flex-direction: column;
    padding: 0 3%;
    align-items: center;
    background-color: whitesmoke;
  }
  .nichenTop{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  .nichen input{
   border: none;
    background-color: transparent;
    padding: 15px 0;
    font-size: 12px;
  }

  .clear{
    width: 15px;
    height: 15px;
    background-color: whitesmoke;
    color: red;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    border-radius: 50%;
  }
  .threeLogin{
    width: 100%;
  }
.LoginStyle{
  width: 100%;
  display: flex;
  flex-direction: column;
  }
  .headLine{
    width: 100%;
    background-color: whitesmoke;
  }
  .headLine p{
    font-size: 14px;
    padding: 10px;
    color: #6c6c6c;
    font-family: "Microsoft YaHei UI";
  }
.LoginStyle-body{
  width: 100%;
  display: flex;
  flex-direction: column;
}
  .LoginStyle-list{
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    padding: 0 3%;
  }
  .LoginStyle-list-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .LoginStyle-list-left-right{
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }
  .LoginStyle-list-right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  p{
    font-size: 12px;
    color: #6c6c6c;
    font-family: "Microsoft YaHei UI";
  }
  .icon{
    font-size: 25px;
    color: silver;
    padding: 10px 0;
  }
  .icon-you{
    font-size: 14px;
    margin-left: 5px;
  }
  .tel{
    width: 100%;
    background-color: whitesmoke;
  }
  .tel-text{
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 3%;
  }
  .tel-bottom{
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 5px 5%;
  }
  .tel-bottom button{
    width: 100%;
    height: 30px;
    background-color: #5bc0de;
    color: white;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .gexing{
    width: 100%;
    position: relative;
  }
  .gexing textarea{
    width: 100%;
    height: 100px;
    background-color: whitesmoke;
  }
  .zishu{
    position: absolute;
    bottom: 35px;
    right: 5px;
    font-size: 12px;
    color: #6c6c6c;
    font-family: "Microsoft YaHei UI";
  }
</style>

