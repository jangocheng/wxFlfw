<template>

  <div id="app">
    <transition :name="transitionName">
    <router-view/>
    </transition>
  </div>
</template>

<script>
  import  './assets/fonts/fount/iconfont.css';
export default {
  name: 'App',
  data(){
    return {
      transitionName:''
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  }

}
</script>

<style>

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  html,body,#app {height: 100%;}
*{
  padding: 0;
  margin: 0;
}
input{
  outline: none;
}
ul li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#222;
}
img {
  vertical-align: inherit;
}
p{
  font-family:"Microsoft YaHei UI";
  margin: 0;
}

#app {
  font-family: '楷体','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/

}
</style>
