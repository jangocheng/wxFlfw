<template>
  <div class = "fenlei">
  <Header></Header>
      <div class = "spflPage-header">
        <div class = "fenleiList">
          <ul>
            <li @click = "zuixinfabuBtn" ><span>最新发布</span></li>
            <li @click ="jiageBtn"  ><span>价格</span><div class = "upDown"> <i class="icon iconfont icon-sanjiaoxing-up"  :class="jiageUP?'active':''"></i> <i  :class="jiageDown?'active':''" class="icon iconfont icon-sanjiaoxing-down"></i></div></li>
            <li @click ="shuliangBtn" ><span>数量</span><div class = "upDown"><i class="icon iconfont icon-sanjiaoxing-up" :class="shuliangUP?'active':''"></i> <i :class="shuliangDown?'active':''" class="icon iconfont icon-sanjiaoxing-down"></i></div></li>
            <li @click ="shaixuanBtn" ><span>筛选</span> <i class="icon iconfont icon-shaixuan"></i></li>
          </ul>
        </div>
        <div class  = "saixuan" v-if = "showModel">
            <span v-for="(item,key) in saixuan" @click="son(item,key)" :class="key==selectedSX?'activeSX':''">{{item.zi}}</span>
        </div>
      </div>
      <div class = "body-Contain" >
        <div  class = "newgoods-contains" >
          <GoodsList :message="goodsLA"  v-show="zuixinfabu"></GoodsList>
          <GoodsList :message="goodsLB"  v-show="jiage"></GoodsList>
        </div>
      </div>
  </div>
</template>

<script>
  import Header from './head.vue'
  import GoodsList from './goodsList.vue'

  export default {
    data () {
      return{
        zuixinfabu:true,
        jiage:false,
        jiageUP:true,
        jiageDown:false,
        shuliangUP:true,
        shuliangDown:false,
        shuliang:false,
        shaixuan:false,
        showModel:false,
        selectedSX:0,
        hehe: [{
          zi: "最新发布"
        },
          {
            zi:"价格"
          },
          {
            zi:"数量"
          },{
            zi:"筛选"
          },],
        saixuan:[
          {
            zi: "上衣"
          },
          {
            zi:"裤子"
          },
          {
            zi:"外套"
          },{
            zi:"套装"
          },
        ],
        goodsLA: [
          {
            Image: "https://img.alicdn.com/bao/uploaded/TB1Zk86nx1YBuNjy1zcSuvNcXXa.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",
          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i4/1766047907/TB2.QG4e1uSBuNjy1XcXXcYjFXa_!!1766047907-0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 85",
            conut: "销量： 10",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i1/1710396780/TB188Z1cNSYBuNjSspjXXX73VXa_!!0-item_pic.jpg_b.jpg",
            Ph: "白色t恤女宽松bf风ins超火的上衣短袖",
            price: "￥ 69.00",
            conut: "销量： 2000",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i4/1039181416/TB2C8wngTJYBeNjy1zeXXahzVXa_!!1039181416-0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",
          }

        ],
        goodsLB: [
          {
            Image: "https://img.alicdn.com/bao/uploaded/i2/912836044/TB1ZWWej7CWBuNjy0FaXXXUlXXa_!!0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",

          },
          {
            Image: "https://img.alicdn.com/bao/uploaded/i3/272205633/TB12vjRd5OYBuNjSsD4XXbSkFXa_!!0-item_pic.jpg_b.jpg",
            Ph: "金丝绒套装女韩版时尚休闲运动服卫衣二",
            price: "￥ 299",
            conut: "销量： 20",

          },

        ]

      }
    },
    components: {
      Header,
      GoodsList
    },
    methods:{
      son(item,key){
        this.selectedSX=key;
      },
      zuixinfabuBtn:function(){
          this.zuixinfabu = true;
          this.jiage = false;
          this.shuliang = false;
          this.shaixuan = false;
        this.showModel=false;
      },
      jiageBtn:function(){
        this.zuixinfabu = false;
        this.jiage = true;
        this.shuliang = false;
        this.shaixuan = false;
        this.showModel=false;
        this.jiageUP = !this.jiageUP;
        this.jiageDown = !this.jiageDown;

      },
      shuliangBtn:function(){
        this.zuixinfabu = false;
        this.jiage = false;
        this.shuliang = true;
        this.shaixuan = false;
        this.showModel=false;
        this.shuliangUP = !this.shuliangUP;
        this.shuliangDown = !this.shuliangDown;
      },
      shaixuanBtn:function(){
        this.zuixinfabu = false;
        this.jiage = false;
        this.shuliang = false;
        this.shaixuan = true;
        this.showModel=!this.showModel;
        this.selectedSX=0;
      },

    }

  }

</script>

<style scoped>

.fenlei{
  width: 100%;
  overflow: hidden;
  margin-top: 40px;

}
  .headContain{
    width: 100%;
    overflow: hidden;
  }
.spflPage-header{
  width: 94%;
  overflow: hidden;
  padding: 5px 3%;
}
.fenleiList{
 width: 100%;
}
.fenleiList ul{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.fenleiList ul li{
  display: flex;
  flex-direction: row;
  height: 30px;
  line-height: 30px;
}
.fenleiList ul li span{
  font-size: 14px;
}
.fenleiList ul li .upDown{
  display: flex;
  flex-direction:column;
  line-height: 7px;
  padding-top: 8px;
}
.fenleiList ul li .upDown i{
 font-size: 12px;
}


.spflPage-body{
  margin-top: 12.5px;
  width: 100%;
  background-color: yellow;
}
.body-Contain{
  width: 100%;
  overflow: hidden;
  padding-top: 4%;
  background-color: whitesmoke;
}
.active{
  color:#ec2127 ;
}
.activeSX{
  color:#ec2127;
 border: 1px solid  #ec2127;
}

  .saixuan{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
.saixuan span{
  padding: 2px 5px;
  display: inline-block;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  font-size: 12px;
}
</style>

