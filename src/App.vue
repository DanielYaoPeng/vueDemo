<template>
    <div id="app">
          <header>
            <div class="description">
                <div style="background-image: url(https://pic.cnblogs.com/avatar/1468246/20180817230353.png); width: 128px; height: 128px; background-size: cover; border-radius: 50%; margin: 0 auto;"
                     v-on:click="alert('我是头像')">
                </div>
                <p class="name" v-text="author"> 博客园：{{ name }}</p>
                <p class="desc">Software Engineer.Currently working in Microsoft co-operation.</p>
            </div>
            <nav>
                <ul class="nav">
                    <li class="nav-item">
                        <a href="https://www.cnblogs.com/laozhang-is-phi/">博客园</a>
                    </li>
                    <li class="nav-item">
                        <a href="/timeline">简书</a>
                    </li>
                    <li class="nav-item">
                        <a href="/music">阿里云栖</a>
                    </li>
                    <li class="nav-item">
                        <a href="/rss.xml">Git</a>
                    </li>
                    <li class="nav-item" v-show="isShow">
                        <a href="/rss.xml">CSDN</a>
                    </li>
                </ul>
            </nav>
        </header>

         <input type="text" class="edit" @keydown.enter="addArticle" v-model="task.name" placeholder="按回车添加文章">
        <div class="container">
            <h2 class="hr">
                <span>About Me</span>
            </h2>
            <p>
                My name is <span v-html="author"></span>. An amateur programmer who writes code every day and watches
                movies every day.
            </p>
            <h2 class="hr">
                <span>featured</span>
            </h2>
            <ul class="post-list non-style-list">
                <!--注意，不能在已经存在的静态类post-list-item上操作 动态绑定class样式，deleted=true状态样式异化-->
                <li v-for='item in listSearch' class="post-list-item" :class="{ deleted: item.deleted}">
                    <!--这里用到了 v-bind 指令-->
                    <a v-bind:href="'https://www.cnblogs.com/laozhang-is-phi/p/'+ item.id +'.html'">{{item.name}}</a>
                    <!--还可以这样写-->
                    <!--<a :href="liskUrl">{{item.name}}</a>-->
                    <span class="post-list-date">({{item.date}})</span>
                    <button @click="removeArticle($index)">删除</button>
                </li>
            </ul>
            <div>
                <div v-if="list.length > 20 ">
                    MOST
                </div>
                <div v-else-if="list.length > 6 ">
                    MORE
                </div>
                <div v-else>
                    ALL
                </div>
            </div>
            <h2 class="hr">
                <span>Skills</span>
            </h2>
            <ul class="skill-list non-style-list">
                <li v-for='(item, key) in list3' class="post-list-item">{{key}}、{{item.name}}</li>
            </ul>
            <h2 :class=[hrClass,testClass]>
                <span>Contact</span>
            </h2>
            <!-- <my-component></my-component> -->
            <mycomponent></mycomponent>
        </div>
        <child message="孙悟猪"></child>

       
   
        <!-- //在自定义的组件上，新增一个动态属性，然后属性的值 author 是父组件的，这个时候父组件就是已经把值给发过去了 -->
        <footer-vue :foo-pro="author" @click="doThis(arg1)"></footer-vue>   
        <div class="layout-bg"></div>
    </div>
</template>

<script>

import myContact from './components/MyContact.vue';
import footers from './components/Footer.vue';

var taskInit = {
    name: "", //内容为空
    id: uuid(),
    date: " Just Now ",
    finished: false, //未完成
    deleted: false //未删除
};
export default {
     data(){
       return{
   name: "孙悟猪",
        author: "孙悟猪",
        task: taskInit,
        isShow: true,
        hrClass: 'hr',
        testClass: 'test',
        list: [
            //假数据
            {
                name: " Vue前篇：ES6初体验 & 模块化编程",
                id: 9585766,
                date: "2018年9月5日",
                finished: false,
                deleted: true
            },
            {
                name: "Vue前篇：JS对象&字面量&this",
                id: 9580807,
                date: "2018年9月4日",
                finished: false,
                deleted: false
            },
            {
                name: " VUE 计划书 & 我的前后端开发简史",
                id: 9577805,
                date: "2018年9月3日",
                finished: false,
                deleted: false
            },
            {
                name: " DTOs 对象映射使用，项目部署Windows+Linux完整版",
                id: 3800,
                date: "2018年9月1日",
                finished: false,
                deleted: false
            },
            {
                name: " 三种跨域方式比较，DTOs(数据传输对象)初探",
                id: 4200,
                date: "2018年8月31日",
                finished: false,
                deleted: false
            },
            {
                name: "VUE 计划书 & 我的前后端开发简史",
                id: 3200,
                date: "2018年9月2日",
                finished: false,
                deleted: false
            },
            {
                name: "VUE 实战预告",
                id: 3200,
                date: "2018年9月12日",
                finished: false,
                deleted: false
            }
        ],
        list3: [
            //假数据
            {
                name: "Html5"
            },
            {
                name: "CSS3"
            },
            {
                name: "JAVASCTIPT"
            },
            {
                name: "SQL"
            },
            {
                name: "C#"
            },
            {
                name: "Wechat小程序"
            },
            {
                name: "ASP.NET"
            }
        ],
       }
     
    },
    components:{
        'mycomponent': myContact,
        'footer-vue':footers
    },
     methods: {
        addArticle() {
            this.list = this.list.reverse();
            this.list.push(this.task);
            this.list = this.list.reverse();
            this.task = initTask();
        },
        removeArticle(index) {
            // this.list.
            //console.log(index);
            this.list.splice(index, 1);
        }
    },
    //通过计算属性过滤数据
    computed: {
        listSearch: function() {

            let that = this; //filter过滤器会改变this的指向 ，保存起来
            return this.list.filter(function(item) {
                //判断以后数据是否和输入相同，筛选功能
                return item.name.toLowerCase().indexOf(that.$data.task.name.toLowerCase()) >= 0;
            });
        },
        nameCpt() {
            return this.task.name
        }
    },
    watch: {
        nameCpt() {
            //这里面可以执行一旦监听的值发生变化你想做的操作
            console.log("变啦变啦！")
        },
        deep: true //表示监视对象的属性变化
    },
}
function initTask(name = "") {
    return {
        name: name, //内容为空
        id: 100,
        date: " Just Now ",
        finished: false, //未完成
        deleted: false //未删除
    }
};
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
</script>

 <style scoped>
  @import './assets/rexoc.css';
        .edit {
            display: block;
            width: 400px;
            height: 35px;
            line-height: 35px;
            margin: 30px auto;
            box-sizing: border-box;
            padding-left: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
            outline: 0;
            box-shadow: 0 0 5px #ccc;
        }

        .deleted {
            color: red;
            text-decoration: line-through;
        }
    </style>