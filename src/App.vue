<template>
  <div id="app">
    <input type="text" v-model="todomsg" @keydown="addDo($event)" />
    <!-- <button @click="addDo">+增加</button> -->
    <br />
    <hr />

    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in listOne" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" />
        {{item.title}} ----
        <button @click="removeDO(key)">删除</button>
      </li>
    </ul>

    <h2>已完成</h2>
    <ul class="finish">
      <li v-for="(item,key) in listOne" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" />
        {{item.title}} ----
        <button @click="removeDO(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      todomsg: "",
      listOne: [
        {
          title: "one",
          checked: false
        },
        {
          title: "two",
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
      }
    },
    removeDO(key) {
      this.listOne.splice(key, 1);
    }
  }
};
</script>

<style lang="css">
.finish li {
  background: #eee;
}
</style>


 
