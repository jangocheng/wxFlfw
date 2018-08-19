<template>

      <div class = "logPage">


        <div class = "modelShow" v-if = "showModel">
          <div class = "modeTop">
            <h3 style="font-size: 18px;font-family: 'Microsoft YaHei UI'">提示</h3>
            <p  style="font-size: 8px;color: grey;">请输入正确的用户名和密码</p>
          </div>
          <div class = "modeBom">
            <p  @click = "quxiao"  style="font-size: 14px;border-right: 1px solid whitesmoke;">取消</p>
            <p @click = "quxiao" style="font-size: 14px;color: forestgreen;">确定</p>
          </div>
        </div>
        <div class = "sybl">
          <img src="../../assets/image/logo.png" alt="">
        </div>
        <div class = "login"  :style = "[op]">



          <div class = "bodyContain">
            <form action="">
              <ul class="reg-box">
                <li>
                  <i class="icon iconfont icon-iconzh"></i>
                  <div class = "rightContain">
                    <input type="text"  @focus="ZHInput"  placeholder="请输入您的账号" maxlength="11"/>
                  </div>
                </li>
                <li>
                  <i class="icon iconfont icon-iconfontmima1"></i><input type="text"  placeholder="验证码" class="sradd" /><div class="phoKey">YFL78</div>
                </li>
                <li>
                  <i class="icon iconfont icon-icon--1"></i>
                  <div class = "rightContain">
                    <input type="password"  style="width: 70%" @focus="ZHInput"  placeholder="请设置您的密码" maxlength="11"/>
                  </div>
                </li>
                <li>
                  <i class="icon iconfont icon-icon--1"></i>
                  <div class = "rightContain">
                    <input type="password"  style="width: 70%" @focus="ZHInput"  placeholder="请确认您的密码" maxlength="11"/>
                  </div>
                </li>

              </ul>
              <div class = "signLX"  @click="showModelt">
                <p>注册类型选择：</p>
                <mt-picker class =  "picker" :slots="slots" @change="onValuesChange" :visible-item-count="1"></mt-picker>

              </div>
              <div class = "xieyi">
                <div class = "yes"><div class = "cheakbox" @click="cheakBtn" ><img :src="fitem"  v-if="tongyi"></div>同意中订用户协议</div>
                <div class = "yeslfet">
                  <span class = "fogetPass" >已有账号</span>
                  <span style="color: #acacac;margin-top: 2px;">丨</span>
                  <router-link class = "fogetPass" to="/">登陆</router-link>
                </div>

              </div>
              <div class="sub">
                <mt-button
                  @click="sheetVisible = true" class = "btnsy">
                  立即注册
                </mt-button>
              </div>
            </form>
            <div class="otherLogin">
              <div class = "otherLoginTop">
                <div class = "lin"></div>
                <div class = "phg">其他注册方式</div>
                <div class = "lin"></div>
              </div>
              <div class = "otherLoginBottom">
                <i class="icon iconfont icon-qq" style="color: #5bc0de"></i>
                <i class="icon iconfont icon-weixin" style="color:yellowgreen"></i>
                <i class="icon iconfont icon-weibo" style="color: orangered"></i>
              </div>
            </div>
            <div class = "footer">
              <p>©2018-中订</p>
              <p>贵州佳音电子商务有限公司</p>
            </div>
          </div>
          <div class = "tishi" v-if="showtishi">
            <img src = "../../assets/image/jinggao.png" >
            <p>{{hehe}}</p>
            <img src="../../assets/image/chacha.png" @click="closetishi">
          </div>

        </div>
      </div>
</template>

<script>
  export default {
    data () {
      return{
        hehe:"防欺诈盗号，请勿输入支付或qq密码",
        showtishi:false,
        fitem:require("../../assets/image/cheak.png"),
        tongyi:true,
        showModel:false,
        op: {opacity:'1'},
        classA:true,
        value:'',
        slots:
          [
            {
              values: ['零售商', '生产商']
            }
          ],
      }
    },
    components: {


    },
    methods:{
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      },

      cheakBtn:function(){
        this.tongyi = !this.tongyi;
      },
      ZHInput:function () {
        this.showtishi=true;
        let ind = 3;
        let _this = this;
        const interval = setInterval(function () {
          ind--;
          if (ind===0) {
            _this.showtishi=false;
            clearInterval(interval);
          }
        }, 500);

      },
      closetishi:function(){
        this.showtishi=false;
      },
      loginbtn:function(){
        this.showModel=true;
        this.op = {opacity:'0.8'};
        this.classA=!this.classA;

      },
      quxiao:function(){
        this.showModel=false;
        this.op = {opacity:'1'};
      }
    }
//

  }

</script>

<style scoped>

  p{
    margin: 0;
  }
  input::-webkit-input-placeholder {
    color: #acacac;
    font-size: 16px;

  }
  .signLX{
    width: 90%;
    padding: 5px 5%;
    display: flex;
    flex-direction: column;
  }
  .signLX p{
    font-size: 15px;
    color: #acacac;
    margin-bottom: 5px;
  }
  .picker{
    border-left: 1px solid #acacac;
    border-right: 1px solid #acacac;

  }
  .signLX input{
    width: 100%;
    font-size: 15px;
    height: 25px;
    color: #acacac;
    background-color: transparent;
    border: 1px solid #acacac;
    text-align: center;
    line-height: 25px;
  }
.pickerOp{
  text-align: center;
}
  .logPage{
    width: 100%;
    background-image: url("../../assets/image/background.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .yanzhengma{
    width: 30.7px;
    height: 29px;
  }
  .sybl{
    width: 100%;
    height: 20%;
  }
  .sybl img{
    width: 130px;
    display:block;
    max-width:100%;
    margin:0 auto;
    padding-top: 4%;
  }
  .login{
    width: 100%;
    padding: 0;
  }

  .bodyContain{
    width: 90%;
    height: 100%;
    margin: 0 5%;
    display: flex;
    flex-direction: column;
  }
  form{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .sub {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .sub p{
    width: 100%;
    height: 25px;
    color:grey;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    padding-top: 10px;
  }
  .btnsy{
    width: 100%;
    height: 60px;
    color: #fbf9f3;
    background-color:#ec2127;
    border-radius: 20px;
    font-size: 16px;
    text-align: center;
    height: 60px;
    font-family: 黑体;
    margin: auto;
    border: none;
  }

  .reg-box {
    width: 100%;
  }

  .reg-box li {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 10px 0 5% 5%;

  }

  .reg-box li label{

    height: 100%;
    line-height: 40px;
    text-align: center;
  }
  .reg-box li .rightContain{
    display: flex;
    flex-direction: row;
    width: 90%;
    border-top: 0;
    border-bottom: 1px #acacac solid;

  }
  .mui-icon{
    line-height: 38px;
    color: #acacac;
    padding-right: 2%;

  }
  .reg-box li input{
    width: 100%;
    height: 100%;
    font-size: 15px;
    line-height: 40px;
    text-align: left;
    padding-left: 5px;
    border:0;
    background-color: transparent;
    color: #acacac;
  }
  .reg-box li i{
    width: 10%;
    height: 100%;
    font-size: 20px;
    line-height: 40px;
    color: #acacac
  }
  .reg-box li  .sradd{
    width: 42%;
    height: 100%;
    line-height: 80px;
    font-size: 15px;
  }
  .reg-box li  .phoKey{
    width: 30%;
    height: 100%;
    font-size: 20px;
    line-height: 40px;
    border-left:  1px lightslategrey solid;
    margin-left: 5px;
    text-align: center;
  }
  .xieyi{
    width: 90%;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin: 10px 5%;
  }
  .xieyi .yes{
    width: 50%;
    height: 25px;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    line-height: 25px;
    color: #acacac;
  }
  .cheakbox{
    width: 20px;
    height: 20px;
    border: 1px gray solid;
    margin-right: 5px;
  }
  .cheakbox img{
    width: 100%;
    height:100%;
  }
  .otherLogin{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .otherLoginTop{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    width: 100%;
  }
  .phg{
    font-size: 14px;
    color:#acacac;
    line-height: 40px;
  }
  .lin{
    width: 30%;
    height: 1px;
    border-top: 1px solid #3c3c3c;
    margin-top: 19px;
  }
  .otherLoginBottom{
    width: 90%;
    height: 50px;
    display: flex;
    flex-direction: row;
    padding: 0 8%;
    justify-content: space-between;
  }
  .otherLoginBottom i{
    font-size: 30px;
  }
  .xieyi .fogetPass{
    color: #acacac;
    font-size: 15px;
    height: 100%;
    line-height: 25px;
  }
  .footer{
    width: 90%;
    height: 75px;
    display: flex;
    padding: 0 5%;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    line-height: 25px;
    color:grey;
  }
  .footer p{
    font-size: 12px;
  }
  .tishi{
    width: 100%;
    position: fixed;
    top:45px;
    left:0;
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1% 3%;
  }
  .tishi img{
    width: 20px;
    height: 20px;
  }
  .tishi p{
    font-size: 15px;
  }
  .modelShow{
    position: fixed;
    width: 80%;
    border-radius:2% ;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    top:25%;
    left:10%;
    z-index: 999;
    border: 1px solid whitesmoke;
  }
  .modeTop{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 30px;
  }
  .modeBom{
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 30px;
    border-top: 1px solid whitesmoke;
  }
  .modeBom p{
    width: 50%;
    height: 100%;
    display: inline-block;
    line-height: 30px;
    text-align: center;
  }
  .yeslfet{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

</style>
