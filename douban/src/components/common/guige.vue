<template>
  <div class = "guiGe">
    <Header :message = "titleInfo"></Header>
    <div class = "bodyContainAll">
      <div class = "addguigeList"@click = "addGuiG">
        <p >+  点我添加规格</p>
      </div>
      <ul>
        <li v-for="(item,key) in guigelist"  >
          <div class = "guiGe-headline">
            <span class = "guiGe-headline-title">{{item.spec_name}}</span>
            <div  class = "guiGe-headline-icon">+</div>
          </div>
          <div class = "bodyContain">
              <span  v-for="(item,key) in item.spec_val"  >
                {{item.spec_val_name}}
              </span>

          </div>
        </li>
      </ul>
    </div>
    <div class = "footLine"><button>保存</button></div>
  <div class = "dropMea" v-if = "showAdd">
    <div class = "dropMea-header">x</div>
    <div class = "dropMea-body">
      <p>{{addName}}</p>
      <input type = 'text'  placeholder='请输入规格名称'>
    </div>
    <div  @click = "closeAdd" class = "dropMea-foot">保存</div>

  </div>
  </div>

</template>

<script>
  import Header from 'components/common/head.vue'
  export default {
    data () {
      return{
        titleInfo:'选择规格',
        inpValue:'',
        number: 1,
        showAdd:false,
        requestId:"",
        guigeList:[],
        addName:"",
        guigelist:[{
          spec_name:'你个龟儿子',
          spec_val:[{
            spec_val_name:'你妈妈咪'
          },{
            spec_val_name:'你妈妈咪'
          },{
            spec_val_name:'你妈妈咪'
          },
            {
              spec_val_name:'你妈妈咪'
            },{
              spec_val_name:'你妈妈sdas咪'
            },{
              spec_val_name:'你妈妈咪'
            },
            {
              spec_val_name:'你妈妈咪'
            },{
              spec_val_name:'你妈妈asddd咪'
            },{
              spec_val_name:'你妈妈咪ahdasndaskdmaksndjand'
            }],
        },
          {
            spec_name:'我日你妈妈',
            spec_val:[{
              spec_val_name:'你妈妈咪'
            },{
              spec_val_name:'你妈妈咪'
            },{
              spec_val_name:'你妈妈咪'
            }],
          },

        ],

      }
    },
    components: {
      Header
    },
    methods:{
      addGuiG(){
          this.showAdd = true;
      },
      closeAdd(){
        this.showAdd = false;
      }

    }

  }

</script>

<style scoped>
  .guiGe{
    width: 94%;
    overflow: hidden;
    height: 92%;
    padding: 4% 3%;
    margin-top: 40px;
  }
  .bodyContainAll{
    width: 100%;
    overflow: hidden;
    height: 100%;
    margin-bottom: 50px;
  }
  .addguigeList{
    width: 100%;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .addguigeList p{
    display: block;
    height: 25px;
    border-radius:0;
    margin: 0;
    padding: 0;
    font-size: 15px;
    color: red;
    line-height: 25px;
  }
  .guiGe ul{
    width: 100%;
    overflow: hidden;
    height: 100%;
  }
  .guiGe ul li{
    width: 100%;
    float:left;
    border-top: 1px whitesmoke solid;
    border-bottom: 1px whitesmoke solid;
    padding-bottom: 8px;
  }
  .guiGe-headline{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .guiGe-headline-title{
    padding: 5px 6px;
    font-size: 15px;
    font-family: "Microsoft YaHei UI";
    color: #6c6c6c;

  }
  .guiGe-headline-icon{
    float: left;
    width: 10%;
    height: 100%;
    line-height: 40px;
    font-size: 20px;
    color: red;
  }
  .footLine{
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
  }
  .footLine button{
    width: 100%;
    height: 50px;
    background-color:  #ec2127;
    text-align: center;
    font-size: 17.5px;
    color: white;
    line-height: 50px;
    border-radius: 0;
  }
  .bodyContain{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .bodyContain span{
    font-size: 12px;
    color: red;
    border: 1px solid  #ec2127;
    border-radius: 5px;
    padding: 5px 6px;
    margin-left: 6px;
    margin-bottom: 5px;

  }
  .dropMea{
    width: 84%;
    position: fixed;
    top:125px;
    left:0;
    padding: 10px 3%;
    margin-left: 5%;
    border: 1px #FF7F50 solid;
    box-shadow: 1px 25px 150px 2px whitesmoke inset;
  }
  .dropMea-header{
    width: 20px;
    height: 20px;
    font-size: 20px;
    border: 1px whitesmoke solid;
    line-height: 20px;
    color: red;
    margin-left: 335px;
    background-color: whitesmoke;
  }
  .dropMea-foot{
    width: 100%;
    font-size: 15px;
    line-height: 35px;
    height: 35px;
    text-align: center;
    margin-top: 5px;
    background-color: whitesmoke;
  }
  .dropMea-body{
    width: 100%;
    margin: 7.5px 0;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .dropMea-body p{
    width: 20%;
    height: 100%;
    line-height: 35px;
    font-size: 15px;
  }
  .dropMea-body input{
    width: 75%;
    line-height: 35px;
    font-size: 15px;
    margin-top: 3.5px;
    border: none;
    background-color: transparent;
  }

</style>

