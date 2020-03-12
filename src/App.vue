<template>
 <div id="app">
   <router-link to="/info">Go to Info</router-link>
		 <router-link to="/home">Go to Home</router-link>
   <!-- //在自定义的组件上，新增一个动态属性，然后属性的值 author 是父组件的，这个时候父组件就是已经把值给发过去了 -->
    <router-view></router-view>   

      <mycomponent :myName="englishName" :webName="name"></mycomponent>

     <footer-vue ></footer-vue>
 </div>
</template>
<script>


import myContact from "./components/MyContact.vue";
import footers from "./components/Footer.vue";
export default {
  data(){
    return {
       name: "孙悟猪",
      author: "孙悟猪",
      englishName: "DanielYao"
    }
  },

    components: {
    mycomponent: myContact,
    "footer-vue": footers
  },

}
</script>

 <style scoped>
@import "./assets/rexoc.css";

</style>