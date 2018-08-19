<template>
  <!--pages/fabu/fabu.wxml-->
  <div id = "fabu">
    <!-- //头部 -->
    <Header :message = "titleInfo"></Header>
    <div class = "headbar">
      <div class = 'topChoosen-header'>请在下方输入或选择需求详情</div>
      <div class = "xuqiuContain">
        <ul class = "xuqiuCon">
          <li>
            <p>需求名称</p>
            <input class = "inp-name">
          </li>
          <router-link to="/xuqiu">
          <li>

            <p>需求类型</p>
            <p class = "inp-xuqiu">{{xqlx}}</p>
            <i class="icon iconfont icon-you"></i>
          </li>
            </router-link >
          <router-link to="/guige">
          <li >
            <p>需求规格</p>
            <p class = "inp-xuqiu">{{xzgg}}</p>
            <i class="icon iconfont icon-you"></i>
          </li>
          </router-link>
          <li @click = "wantPrice">
            <p>意向价格</p>
            <i class="icon iconfont icon-you"></i>
          </li>
          <li>
            <p>需求数量</p>
            <input class = "neednumber" type='number'>
          </li>
        </ul>
      </div>
    </div>

    <!-- //点击隐藏上面菜单 -->
    <div  class = "elseItem">
      <!-- //需求详情 -->
      <div class = "needInfo" >
        <p>对需求的具体或者特殊要求(140字以内)</p>
        <textarea type="text"  value="" maxlength = "140"></textarea>
      </div>
      <!-- //上传图片 -->
      <div class = "uploadImage">
        <p>建议您上传样品图，越详细越好哟，最多支持8张</p>
        <div class = "addImage" >
          <img src = "../../assets/image/addImage.png">
          <p style="text-align: center">添加照片</p>
        </div>
      </div>
      <!-- //提交信息发布 -->
      <div class = "fabuButton">
        <button>确定发布</button>
      </div>

    </div>
    <div class = "dropTwo" v-if = "choosePrice">
      <div class = "dropTwo-header">x</div>
      <li >
        <P>散批价</p>
        <P class= "liwai">￥</p>
        <input type = 'number' placeholder='价格'>
        <P>丨</p>
        <input type = 'number' placeholder='数量'>
        <P>件起批</p>
      </li>
      <li >
        <P>拿批价</p>
        <P class= "liwai">￥</p>
        <input type = 'number'  placeholder='价格'>
        <P>丨</p>
        <input type = 'number'  placeholder='数量'>
        <P>件起批</p>
      </li>
      <li>
        <P>打包价</p>
        <P class= "liwai">￥</p>
        <input type = 'number'  placeholder='价格'>
        <P>丨</p>
        <input type = 'number'  placeholder='数量'>
        <P>件起批</p>
      </li>
      <div  class= 'dropTwofoot' @click="submitForm">保存</div>
    </div>
  </div>

</template>

<script>
  import Header from './head.vue'

  export default {
    data () {
      return{
       titleInfo:'我要发布',
        choosePrice:false,
      }
    },
    components: {
      Header,
    },
    methods:{
      wantPrice:function(){
          this.choosePrice = true;
      },
      submitForm(){
        this.choosePrice = false;
      }

    }

  }

</script>

<style scoped>
  input::-webkit-input-placeholder {
    color: lightgrey;
    font-size: 12px;
  }
  p{
    font-size: 12px;
    color: #6a6a6a;
  }
  .icon{
    font-size: 14px;
  }
  #fabu{
    width: 100%;
    overflow-x: hidden;
    margin-bottom: 70px;
    margin-top: 40px;
  }
  .menu dt{
    font-size: 15px;float:left;width: 24.99%;height: 38px;
    border-bottom: 1px solid #d2d2d2; text-align: center;background-color: #f4f4f4; color: #5a5a5a;line-height: 38px;
  }
  .menu dt input{
    width: 100%;
    height: 100%;
  }
  .menu dd{background-color: white; position: absolute;width: 100%;top:155px; left:0;z-index:1000;}

  .menu li{
    font-size: 14px; line-height: 34px;color: #575757;height: 34px;display: block;padding-left: 8px;
    background-color: #fff;border-bottom: 1px solid #dbdbdb;
  }
  .menu li text{
    float: left;
  }

  .hidden-item ul{
    width: 100%;
    margin-top: 7.5px;
    overflow: hidden;
  }
  .hidden-item ul li{
    float: left;
    width: 27%;
    margin: 10px 5px;
    height: 30px;
    border: 1px #ec2127 solid;
    text-align: center;
    line-height: 30px;
    color: #ec2127;
    font-size: 12px;
  }
  .elseItem{
    width: 100%;
    background-color: white;
    padding-top: 10px;
  }
  .topChoosen-header{
    width: 97%;
    padding-left: 3%;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    color: whitesmoke;
    background-color: #ec2127;
    margin-bottom: 10px;
    font-family: "Microsoft YaHei UI";
  }
  .needInfo{
    width: 94%;
    background-color: white;
    padding: 3%;
  }
  .needInfo textarea{
    width: 95%;
    height: 160px;
    margin:5px 0 3%;
    background-color:whitesmoke;
    text-align: left;
    color: black;
    font-size: 15px;
  }
  .needInfo text{
    display: inline-block;
    width: 90%;
    margin-left: 3%;
    margin-bottom: 10px;
    height: 15px;
    font-size: 15px;
    color: grey;
  }
  .uploadImage{
    width: 94%;
    height: 135px;
    background-color: white;
    margin: 0 3%;
  }
  .uploadImage text{
    width: 100%;
    height: 40px;
    font-size: 12.5px;
    color: grey;
  }
  .addImage {
    margin-top: 12.5px;
    width: 25%;
    height: 80px;
    border: 1px grey solid;
  }
  .addImage img{
    width: 50%;
    height: 50%;
    margin: 0 25%;
    margin-top: 9%;
  }
  .addImage text{
    width: 56%;
    height: 33%;
    margin: 0 22%;
    text-align: center;
    font-size: 12.5px;
    color:grey;
  }
  .fabuButton{
    width: 100%;
    height: 40px;
    margin-top: 10px;
    background-color: white;
    font-size: 13px;
  }
  .fabuButton button{
    width: 100%;
    height: 40px;
    font-size: 17.5px;
    color: whitesmoke;
    background-color:#ec2127;
    border-radius: 0;
  }
  .xuqiuContain{
    width: 94%;
    overflow: hidden;
    background-color: white;
    padding:0 3%;
  }
  .xuqiuContain ul{
    width: 100%;
    height: 100%;
   display: flex;
    flex-direction: column;
  }
  .xuqiuContain ul li{
    width: 100%;
    height:40px;
    border-bottom: 1px whitesmoke solid;
    display: flex;
    flex-direction: row;
    font-size: 17.5px;
    line-height: 40px;
    margin-top: 5px;
    justify-content: space-between;
  }
  .xuqiuContain ul li text{
    width: 25%;
    float: left;
    width: 25%;
    float: left;
  }
  .inp-xuqiu{
    height: 100%;
    width: 50%;
    float: left;
    text-align:right;
    font-size: 15px;
    color:grey;
  }
  .inp-name{
    width: 75%;
    height: 100%;
    text-align: right;
    padding: 0;
    margin: 0;
    border: none;
  }
  .xuqiuContain ul li i{

    float: right;
  }

  .neednumber{
    width: 60px;
    text-align: center;
    border-bottom: 1px #ec2127 solid;
  }
  input{
    padding: 0;
    border: none;
    margin: 0;
    border-radius: 0;
    background-color: transparent;
  }
  .dropTwo{
    width: 84%;
    position: fixed;
    top:30%;
    left:5%;
    padding: 10px 3%;
    border: 1px #FF7F50 solid;
    box-shadow: 1px 25px 150px 2px whitesmoke inset;
  }
  .dropTwo li{
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
    border-bottom: 1px whitesmoke solid;
  }
  .dropTwo li .liwai{
    color:red;
  }
  .dropTwo-header{
    width: 20px;
    height: 20px;
    font-size: 20px;
    border: 1px whitesmoke solid;
    line-height: 20px;
    color: red;
    margin-left: 335px;
    background-color: whitesmoke;
  }
  .dropTwo li p{
    height: 40px;
    font-size: 12px;
    line-height: 40px;
  }
  .dropTwo li input{
    width: 30%;
    height: 40px;
    font-size: 15px;
    line-height: 40px;
    padding: 0;
    border: 0;
  }
  .dropTwofoot{
    width: 100%;
    font-size: 15px;
    line-height: 35px;
    height: 35px;
    text-align: center;
    margin-top: 5px;
    background-color: whitesmoke;
  }
  .inpV{
    height:100%;
    float:left;
    text-align:right;
    font-size:15px;
    color:grey;
  }
  .elseinpv{
    margin-left: 50px;
  }
</style>

