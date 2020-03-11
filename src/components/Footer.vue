<template>
  <div id="footer-vue">
    <p>
      {{time}}
      <a href="#">YP's Blog</a> - Hosted by
      <a href="#" style="font-weight: bold">Coding Pages</a>
    </p>
    <p>
      <a href="#" @click="getMsg()">沪ICP备00000000号{{fooPro}} {{eName}}</a>
    </p>
  </div>
</template>
<script>

import event from '../model/event.js';


function getNowYear() {
    var now = new Date();
    return now.getFullYear(); //得到年份
}

export default {
    data() { //这里定义的时模板里"{{}}"需要获取的数据
        return {
            message: "hello world",
            time: getNowYear(),
            eName:''
        }
    },
    methods:{
      getMsg(data){
        if(data==undefined|| data==''){
          data='父组件'
        }
       var pMsg= this.$parent.englishName;
       alert(`这是${data}的英文名${pMsg}`);

      }
    },
    props:['fooPro'],
    mounted(){
       //监听非父子组件传来的值
       event.$on('contact-on',function(data){
         console.log(data);
         this.eName=data;
         //fooPro=data;
       })
    }
}
</script>