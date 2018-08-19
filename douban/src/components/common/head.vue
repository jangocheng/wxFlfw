<template>
  <mt-header class = "head" fixed :title="message">
    <router-link to="/" slot="left">
      <mt-button icon="back" @click = "back"></mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>

export default {
	data () {
		return{

		}
	},
  props:{
      message:String
  },
	methods: {
back:function(){
  this.$router.go(-1);
}
	}
}

</script>

<style scoped>
  .head{
    background-color:#ec2127;
    font-family: "Microsoft YaHei UI";
  }

</style>
