<template>
<div class = "home">
  <homePage  v-show="qiehuanNum==0"></homePage>
  <fabu v-show="qiehuanNum==2"></fabu>
  <userCenter v-show="qiehuanNum==4"></userCenter>
  <buycar  v-show="qiehuanNum==3"></buycar>
  <Soucang v-show="qiehuanNum==1"></Soucang>
  <FootBar @qiehuan = "qiehuan"></FootBar>
</div>
</template>

<script>
  import FootBar from 'components/common/foot.vue'
  import fabu from 'components/common/fabu.vue'
  import userCenter from 'components/common/userCenter.vue'
  import buycar from 'components/common/buycar.vue'
  import Soucang from 'components/common/soucang.vue'
  import homePage from 'components/common/homePage.vue'
  export default {
    data () {
      return{
        qiehuanNum:0,

      }
    },
    components: {
      FootBar,
      fabu,
      userCenter,
      buycar,
      Soucang,
      homePage

    },
    methods: {
      qiehuan:function(data){
          this.qiehuanNum=data;
      }
    }
  }

</script>

<style scoped>
  .home{
    width: 100%;
  }

</style>
