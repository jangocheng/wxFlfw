
<template>
  <div class = "goodListContain">
  <ul  class = "newgoods-contains" >
    <router-link to="/goodsInfo">
    <li class="newgoods-contain-list"  v-for="(item,key) in message">
      <div class = "newgoods-image">
        <img :src = "item.Image">
      </div>
      <div class = "newgoods-text">
        <p class = "newgoods-ph">{{item.Ph}}</p>
      </div>
      <div class = "newgoods-price">
        <p class = "price-left">{{item.price}}</p>
        <p class = "price-right">{{item.conut}}</p>
      </div>
    </li>
    </router-link>
  </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return{
      }
    },
    props:["message"],
    methods: {

    }
  }

</script>

<style scoped>
  .goodListContain{
    width: 100%;
  }
  p{
    margin-bottom: 5px;
    font-size: 12px;
  }
  .newgoods-contains{
    width: 97%;
    padding: 5px 0 3%;
    overflow: hidden;
    background-color: whitesmoke;
    overflow: hidden;
  }
  .newgoods-contain-list{
    width: 42%;
    margin-bottom: 3.5%;
    margin-left: 3%;
    padding: 2%;
    border-radius: 2%;
    background-color: white;
    display: flex;
    flex-direction: column;
    float: left;
    border: 1px solid #ec2127;
    box-shadow:1px 1px 5px pink;
    -webkit-box-shadow:1px 1px 5px pink;
    -moz-box-shadow:1px 1px 5px  pink;
  }
  .newgoods-image{
    width: 100%;
    height: 23vh;
    display: inline-block;
    margin: 0 auto;
  }
  .newgoods-image img{
       width: 100%;
       height: 100%;
     }
  .newgoods-text{
    margin-top: 1vh;
  }
  .newgoods-price{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
.price-left{
  color: red;
}




</style>
