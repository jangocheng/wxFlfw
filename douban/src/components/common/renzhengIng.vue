<template>
  <!--pages/Gorenzheng/Gorenzheng.wxml-->
  <div class= "shengheIng">
    <div class = "head">
      <p>尊敬的用户：</p>
      <p>您所提交的审核会在4小时内完成审核，请耐心等待或致电下方客服电话进行咨询，给您带来的不便敬请原谅，谢谢！</p>
    </div>
    <div class = "chat">
      <div class = "chatContain">
        <p>在线客服</p>
        <p>tel:1865632562</p>
      </div>
    </div>
    <div class = "contain">
      <p>审核进度</p>

    </div>
  </div>

</template>

<script>

  export default {
    data () {
      return{

      }
    },
    components: {

    },
    methods:{

    }

  }

</script>

<style scoped>

p{
    font-size: 15px;
  color: #636363;
  }

  .shengheIng{
    width: 100%;
    height: 100%;
  }
  .head{
    width: 94%;
    height: 100px;
    margin: 3% 3%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
  }
  .chat{
    width: 90%;
    height: 75px;
    background-color: whitesmoke;
    padding: 10px 5%;
  }
  .chatContain{
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .chatContain p{
    margin: 5px 7.5px;

  }
  .contain{
    width: 94%;
    margin: 3% 3%;
  }


</style>

