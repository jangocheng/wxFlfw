<template>
  <div class = "renzheng">
    <Header :message = "titleInfo"></Header>
    <div class = "renzheng-header">
    </div>
    <div class = "renzhengBody"  v-for="(item,key) in person" >
      <form action="">
        <ul class="renzhengBody-contain">
          <li>
            <label >{{item.name}}:</label>
            <input  :placeholder='item.namedes'>
          </li>
          <li>
            <label >{{item.tel}}:</label>
            <input  :placeholder='item.teldes' >
          </li>
          <li>
            <label>{{item.address}}:</label>
            <div class = "youxiang">
               <input style="width: 65%" :placeholder='item.addressdes'>
               <div class = "yxph"  >
                <input class = "drop" placeholder='@qq.com'  @click = 'showModel'>
                  <ul class="drop-meue" v-if="showemail" >
                    <li v-for="(item,key) in dropmeue"  @click = 'closeModel'>{{item}}</li>
                  </ul>
               </div>
            </div>

          </li>
  <li>
    <label >{{item.leixing}}:</label>
    <div class = "cheakAll">
      <div class = "whenCheak" v-if="cheaknan"></div>
    </div>
    <p style="margin-right: 10px;">男</p>
    <div class = "cheakAll">
      <div class = "whenCheak" v-if="cheaknv"></div>
    </div>
    <p>女</p>

  </li>
  <li>
    <label >认证方式:</label>
    <input  placeholder='请选择认证方式' disabled>
  </li>
  <li>
    <label>{{item.photo}}:</label>
    <input  :placeholder='item.photodes'>
  </li>
  </ul>
      <div class = "zhaopian">
        <div class = "zheng">
          <img  src = "../../assets/image/addImage.png">
          <p>{{item.zhengmian}}</p>
        </div>
        <div class = "fan">
          <img  src = "../../assets/image/addImage.png">
          <p>{{item.beimian}}</p>
        </div>
      </div>
  <button  class = "footer">点击认证</button>
   </form>

    </div>
  </div>

</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {
      return{
        titleInfo:'个人认证',
        cheaknan:false,
        cheaknv:false,
        showemail:false,
        dropmeue: ['@139.com', '@126.com', '@msn.com', '@qq.com','@live.com'],
        person:[
            {
            name:"姓名",
            namedes:"请输入您的真实姓名",
            tel:"手机号码",
            teldes:"请输入正在使用的手机号码",
            address:"电子邮箱",
            addressdes:"请输入邮箱",
            leixing:"性别",
            leixingOne:"男",
            leixingTwo:"女",
            photo:"证件号码",
            photodes:"请输入证件号码",
            zhengmian:"手持证件照正面",
            beimian:"手持证件照背面",
            }
        ],

      }
    },
    components: {
      Header
    },
    methods:{
      showModel(){
          this.showemail=true;
      },
      closeModel(){
        this.showemail=false;
      }

    }

  }

</script>

<style scoped>
  input::-webkit-input-placeholder {
    color: #acacac;
    font-size: 13px;
  }
  button{
    border-radius: 0;
    margin: 0;
    padding: 0;
  }
  .inp-pl{
    font-size: 30px;
  }

  .renzheng{
    width: 100%;
    height: 100%;
    margin-top: 40px;
  }
  .cheakAll{
    width: 20px;
    height: 20px;
    border: 1px solid lightgrey;
    border-radius: 50%;
    position: relative;
    margin-right: 10px;
  }
  .cheakChild{
    width: 20px;
    height: 20px;
    border: 1px solid lightgrey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
  .renzheng-header{
    width: 100%;
    height: 100px;
    background-color: #ec2127;
    position: relative;
  }
  .renzhengBody{
    width: 94%;
    margin-top: 50px;
    margin-bottom: 15px;
    padding:10px 3%;
  }
  .renzhengBody form{
    width: 100%;

  }
  .renzhengBody-contain{
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .renzhengBody-contain li{
    width: 100%;
    margin-bottom: 5px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-bottom: 1px solid whitesmoke;
    align-items: center;
  }
  .renzhengBody-contain li label{
    width: 25%;
    height: 100%;
    line-height: 35px;
    font-size: 15px;
    color: #363636;
    text-align: justify;
    font-family: "Microsoft YaHei UI";
  }
  p{
    font-size: 14px;
    color: #363636;
    font-family: "Microsoft YaHei UI";
  }
  .youxiang{
    width: 74%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .zhaopian{
    width: 90%;
    padding: 7.5px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 125px;
  }
  .zhaopian .zheng{
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .zhaopian .zheng img{
    width:60px;
    height: 60px;
    border: 1px #ec2127 solid;
    display: block;
  }
  .zhaopian .zheng p{
    font-size: 15px;
    text-align: center;
    margin-top: 7.5px;
  }
  .zhaopian .fan{
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .zhaopian .fan img{
    width:60px;
    height: 60px;
    border: 1px #ec2127 solid;
    display: block;
  }
  .zhaopian .fan p{
    font-size: 15px;
    text-align: center;
    margin-top: 7.5px;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    background-color: #ec2127;
    width: 100%;
    color:white;
  }
  input{
    font-size: 15px;
    color: grey;
    line-height: 35px;
    display: block;
    height: 35px;
    background-color: transparent;
    border: none;
  }
  radio{
    font-size: 15px;
    color: grey;
    line-height: 35px;
    display: block;
    height: 35px;
    transform:scale(0.8);
  }
  .drop-meue{
    position: absolute;
    left: 0;
    top:35px;
    width: 100%;
    background-color: white;
    padding-left: 5px;
  }
  .drop-meue li{
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #acacac;
    font-size: 13px;
    border: 1px white solid;
    font-family: "Microsoft YaHei UI";
  }
  .yxph{
    width: 100px;
    height: 100%;
    text-align: left;
    border-left:1px whitesmoke solid;
    position: relative;
    padding-left: 5px;
  }
  .yxph input{
    height: 100%;
    width: 100%;
  }

</style>

