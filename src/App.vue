<template>
  <div id="app">
    <input type="text" v-model="todomsg" @keydown="addDo($event)" />
    <!-- <button @click="addDo">+增加</button> -->
    <br />
    <hr />

    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in listOne" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()" />
        {{item.title}} ----
        <button @click="removeDO(key)">删除</button>
      </li>
    </ul>

    <h2>已完成</h2>
    <ul class="finish"> 
      <li v-for="(item,key) in listOne" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()"/>
        {{item.title}} ----
        <button @click="removeDO(key)">删除</button>
      </li>
    </ul>

    <h2>获取渲染对象的数据</h2>
    <button @click="getItem()">点击获取数据</button>
  </div>
</template>

<script>
import cache from './model/cache.js';
var dataKey='key';
export default {
  name: "app",
  data() {
    return {
      todomsg: "",
      listOne: [
        {
          title: "录制nodejs",
          checked: false
        },
        {
          title: "录制vue",
          checked: true
        }
      ]
    };
  },
  methods: {
    addDo(e) {
      console.log(e);

      if (e.keyCode == 13 && this.todomsg != "") {
        this.listOne.push({ title: this.todomsg, checked: false });
        this.todomsg = "";
        cache.set(dataKey,this.listOne);
      }
    },
    removeDO(key) {
      this.listOne.splice(key, 1);
      cache.set(dataKey,this.listOne);
    },
    getItem() {
      console.log(this.listOne);
    },
    saveList(){
       cache.set(dataKey,this.listOne);
    }
  },
  mounted: function() {
    //程序启动的时候初始化list

    let initDs = cache.get(dataKey);
    if (initDs != undefined&&initDs) {
      this.listOne = initDs;
    }
  }
};
</script>

<style lang="css">
.finish li {
  background: #eee;
}
</style>


 
