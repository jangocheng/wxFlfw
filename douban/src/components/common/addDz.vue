<template>
  <div class = "addDz">
    <Header :message = "titleInfo"></Header>
    <form action = ""  >
      <ul class="reg-box" >
        <li>
          <label >收货人：</label>
          <div class = "rightContain">
            <input type="text"  v-model="userName"  @change='inputMsg'  maxlength="11"/>
          </div>
        </li>
        <li>
          <label for="">手机号：</label> <div class = "rightContain">
          <input type="number" v-model="userTel"  maxlength="11"/>
        </div>
        </li>
        <li @click = "showModel">
          <label for="">省/市/区：</label> <div class = "rightContain">
          <input type="text" v-model.lazy="di"  maxlength="11"/>
          <img style="width: 18px;height:18px;margin-top: 5px;" src="../../assets/image/drop.png" alt="">
        </div>
        </li>
<div class = "showModeList"  v-show ="showModelt">
  <div class = "picker-head">
    <p style="color: silver" @click = "closeModel">取消</p>
    <p style="color: yellowgreen"  @click = "submitValue">确定</p>
  </div>
        <mt-picker  :slots="slots" @change="onValuesChange"></mt-picker>
</div>
        <div class= "liwai">
          <label >详细地址：</label>
          <div class = "rightContain">
            <textarea type="text" maxlength="50" v-model="zi" ></textarea>
          </div>
        </div>
        <li>
          <label >邮　编：</label>
          <div class = "rightContain">
            <input type="text" maxlength="11"/>
          </div>
        </li>
      </ul>
    </form>
    <div class = "addDizhi-foot" >
      <button @click ='saveAddDZForm'>保存</button>
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
          titleInfo:'添加地址',
        showModelt:false,
        slots: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {

            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot2',
            textAlign: 'center'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]

      }
    },
    components: {
      Header

    },
    computed:{
      ...mapState({
        userName:state=>state.addDZ.userName,
        userTel:state=>state.addDZ.userTel,
        di:state=>state.addDZ.di,
        zhi:state=>state.addDZ.zhi,
      }),
    },
    methods: {
      inputMsg:function(e){

      },
      showModel:function () {
        this.showModelt=true;
      },
      closeModel:function(){
        this.showModelt=false;
      },
      submitValue:function(){
        this.showModelt=false;

      },
      onValuesChange:function(picker, values){
       this.di=values;
      }

    }
  }

</script>

<style scoped>

  .addDz{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin-top: 40px;
  }
  .reg-box {
    width: 100%;
  }
  .reg-box li {
    width: 94%;
    padding: 0 3%;
    height: 35px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    border-bottom: 1px whitesmoke solid;
  }

  .reg-box li label{
    height: 80%;
    width: 30%;
    line-height: 25px;
    text-align: center;
    border-right: 1px whitesmoke solid;
    font-size: 15px;
  }
  .reg-box li .rightContain{
    display: flex;
    flex-direction: row;
    width: 75%;
  }
  .reg-box li input{
    width: 100%;
    height: 80%;
    font-size: 15px;
    line-height: 40px;
    text-align: left;
    padding-left: 5px;
    border: none;
  }
  .reg-box li text{
    font-size: 15px;
    line-height: 30px;
    color: #FF7F50;
  }
  .liwai{
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    border-bottom: 1px whitesmoke solid;
  }
  .liwai label{
    height: 80%;
    width: 30%;
    line-height: 40px;
    text-align: center;
    border-right: 1px whitesmoke solid;
    font-size: 15px;
  }
  .liwai .rightContain{
    display: flex;
    flex-direction: row;
    width: 75%;
  }
  .liwai textarea{
    width: 100%;
    height: 80%;
    font-size: 15px;
    line-height: 40px;
    text-align: left;
    padding-left: 5px;
    border: none;
  }

  .addDizhi-foot{
    width: 100%;
    height: 50px;
    background-color:#ec2127;
    position: fixed;
    bottom: 0;
    left:0;
  }
  .addDizhi-foot button{
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
  .showModeList{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
  }
  .picker-head{
    width: 94%;
    height: 30px;
    display: flex;
    padding: 0 3%;
    line-height: 30px;
    justify-content: space-between;

  }

</style>
