<template>
  <div class = "fenlei">
    <Header :message = "titleInfo"></Header>
    <div class = "fenleiBody">
    <ul>
      <li v-for="(item,key) in fenlei"   @click="son(item,key)" :class="key==selected?'active':''">
        {{item.name}}
        <div class = "otherHold" v-if="key==selected">
          <div class = "leftBody">
            <div class = "leftLi" v-for="(item,key) in item.list" >
              <img :src ='item.src'>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    </div>

  </div>
</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {
      return{
        titleInfo:'需求类型',
        selected:0,
        fenlei:[{
            name:'男装',
           list:[{
                src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
             text:'上衣'
           },
             {
               src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
               text:'裤子'
             },
             {
               src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
               text:'上衣'
             },
             {
               src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
               text:'裤子'
             },
             {
               src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
               text:'上衣'
             },
             {
               src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
               text:'裤子'
             },
             {
               src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
               text:'上衣'
             },
             {
               src:'https://img.alicdn.com/bao/uploaded/i1/196993935/TB1XUkhiFGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_b.jpg',
               text:'裤子'
             },]
        },
          {
            name:'女装',
            list:[{
              src:'https://img.alicdn.com/bao/uploaded/i2/408107205/TB1hvqjdQomBKNjSZFqXXXtqVXa_!!0-item_pic.jpg_b.jpg',
              text:'上衣'
            },
              {
                src:'https://img.alicdn.com/bao/uploaded/i3/420567757/TB1YoEWmkyWBuNjy0FpXXassXXa_!!0-item_pic.jpg_b.jpg',
                text:'裤子'
              },]
          },
        ],
      }
    },
    components: {
      Header
    },
    methods: {
      son(item,key){
        this.selected=key;
      }
    }
  }

</script>

<style scoped>
  .fenlei{
    width: 100%;
    margin-top: 40px;
    height: 100%;
  }
  .fenleiBody{
    width: 100%;
    height: 100%;
  }
  .fenleiBody ul{
    width: 100%;
    height: 100%;
  }
  .fenlei ul li{
    padding-left: 7.5px;
    width: 100%;
    float: left;
    text-align: left;
    font-size: 17.5px;
    line-height: 40px;
    height: 40px;
    color:grey;
    border-bottom: 1px white solid;
  }
  .otherHold{
    width: 75%;
    position: absolute;
    top:40px;
    right: 0;
background-color: whitesmoke;
    overflow: hidden;
    height: 100%;
  }
  .leftBody{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
  }
 .leftLi{
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
  }
  .leftLi img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
 p{
    font-size: 12px;
    color: #6c6c6c;
    font-family: "Microsoft YaHei UI";
    line-height: 12px;
   padding: 4px;
  }
  .active{
    background-color: whitesmoke;
  }

</style>
